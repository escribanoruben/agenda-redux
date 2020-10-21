import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from '@app/contacts/enums/technology.enum';
import { Contact } from '@app/contacts/models/contact';
import { ContactsService } from '@app/contacts/services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  isLoading = false;
  contact: Contact;
  contactId: number;
  isAddMode: boolean;
  Technology = Technology;
  TechnologyList = Object.keys(Technology);

  contactForm = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    phoneNumber: [null, [Validators.required, Validators.maxLength(80)]],
    birthdate: [null, []],
    technologies: [null, []],
  });

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.contactId = this.route.snapshot.params.contactId;
    this.isAddMode = !this.contactId;

    if (!this.isAddMode) {
      this.isLoading = true;
      this.contactsService.getContactById(this.contactId).subscribe((contact) => {
        const { id, ...contactWithId } = contact;
        this.contactForm.setValue(contactWithId);
        this.isLoading = false;
      });
    }
  }

  createContact() {
    const contact = this.contactForm.value;

    this.contactsService.createContact(contact).subscribe((newContact: Contact) => {
      const snackBarRef = this._snackBar.open('Contact saved successfully', 'edit', {
        duration: 4000,
      });
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/contacts', 'edit', newContact.id]);
      });
      this.router.navigate(['/contacts']);
    });
  }

  updateContact() {
    const contact = this.contactForm.value;

    this.contactsService.updateContact(contact).subscribe(() => {
      const snackBarRef = this._snackBar.open('Contact updated successfully', 'edit', {
        duration: 4000,
      });
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/contacts', 'edit', contact.id]);
      });
      this.router.navigate(['/contacts']);
    });
  }
}
