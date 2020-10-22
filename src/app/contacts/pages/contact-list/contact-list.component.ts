import { Component, OnInit } from '@angular/core';
import { loadContacts } from '@app/contacts/store/contacts/contact.actions';
import { ContactState } from '@app/contacts/store/contacts/contact.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  state$: Observable<ContactState>;

  constructor(private store: Store<{ contacts: ContactState }>) {
    this.state$ = this.store.select((s) => s.contacts);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.store.dispatch(loadContacts());
  }
}
