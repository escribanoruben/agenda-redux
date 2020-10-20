import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Technology } from '@app/contacts/enums/technology.enum';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  Technology = Technology;
  TechnologyList = Object.keys(Technology);

  contactForm = this.fb.group({
    name: [null, Validators.required, Validators.maxLength(80)],
    phoneNumber: [null],
    birthdate: [null],
    technologies: [null],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
