import { Injectable } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ContactActions from './contact.actions';

@Injectable()
export class ContactEffects {
  loadContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactActions.loadContacts),
      mergeMap((action) =>
        this.contactsService.getAllContacts().pipe(
          map((data) => {
            return ContactActions.loadContactsSuccess({
              data,
            });
          }),
          catchError((error) => of(ContactActions.loadContactsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private contactsService: ContactsService) {}
}
