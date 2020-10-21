import { Component, OnInit } from '@angular/core';
import { Contact } from '@app/contacts/models/contact';
import { ContactsService } from '@app/contacts/services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contactList: Contact[];
  isLoading = false;

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.contactService.getAllContacts().subscribe((contactList) => {
      this.contactList = contactList;
      this.isLoading = false;
    });
  }
}
