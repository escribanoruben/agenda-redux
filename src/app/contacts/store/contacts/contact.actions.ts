import { Contact } from '../../models/contact';
import { createAction, props } from '@ngrx/store';

export const loadContacts = createAction('[Contact] Load Contacts');

export const loadContactsSuccess = createAction('[Contact] Load Contacts Success', props<{ data: Contact[] }>());

export const loadContactsFailure = createAction('[Contact] Load Contacts Failure', props<{ error: any }>());
