import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '@app/contacts/models/contact';
import { ContactState } from '@app/contacts/store/contacts/contact.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss'],
})
export class ContactTableComponent implements OnInit {
  contactList: Contact[];

  displayedColumns = ['name', 'phoneNumber', 'birthdate', 'technologies', 'actions'];

  state$: Observable<ContactState>;

  constructor(private store: Store<{ contacts: ContactState }>) {
    this.state$ = this.store.select((s) => s.contacts);
  }

  ngOnInit() {}

  removeContact(contactId: number) {}
}
