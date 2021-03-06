import { Action, createReducer, on } from '@ngrx/store';
import { Contact } from '../../models/contact';
import * as ContactActions from './contact.actions';

export const contactFeatureKey = 'contact';

export interface ContactState {
  isLoading: boolean;
  contactList: Contact[];
}

export const initialState: ContactState = {
  isLoading: false,
  contactList: [],
};

const ContactReducer = createReducer(
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

export function contactReducer(state: ContactState | undefined, action: Action) {
  return ContactReducer(state, action);
}
