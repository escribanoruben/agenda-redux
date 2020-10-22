import { createReducer, on } from '@ngrx/store';
import { Contact } from '../../models/contact';
import * as ContactActions from './contact.actions';

export const contactFeatureKey = 'contact';

export interface ContactsState {
  isLoading: boolean;
  contactList: Contact[];
}

export const initialState: ContactsState = {
  isLoading: false,
  contactList: [],
};

export const reducer = createReducer(
  initialState,

  on(ContactActions.loadContacts, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ContactActions.loadContactsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      contactList: action.data,
    };
  }),
  on(ContactActions.loadContactsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  })
);
