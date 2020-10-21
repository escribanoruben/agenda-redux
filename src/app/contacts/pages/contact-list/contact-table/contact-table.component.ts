import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '@app/contacts/models/contact';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss'],
})
export class ContactTableComponent implements OnInit {
  @Input()
  contactList: Contact[];

  displayedColumns = ['name', 'phoneNumber', 'birthdate', 'technologies', 'actions'];

  ngOnInit() {}

  removeContact(contactId: number) {}
}
