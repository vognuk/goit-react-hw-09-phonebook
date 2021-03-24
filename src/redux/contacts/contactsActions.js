import { createAction } from '@reduxjs/toolkit'

export const initContactsRequest = createAction('app/initStateRequest');
export const initContactsSuccess = createAction('app/initStateSuccess');
export const initContactsError = createAction('app/initStateError');

export const addContactRequest = createAction('form/addContactRequest');
export const addContactSuccess = createAction('form/addContactSuccess', (payload) => {
    return {
        payload,
    }
});
export const addContactError = createAction('form/addContactError');

export const delContactRequest = createAction('contact/delContactRequest');
export const delContactSuccess = createAction('contact/delContactSuccess');
export const delContactError = createAction('contact/delContactError');
export const filterContacts = createAction('contact/filterContacts');

export const changeFilter = createAction('contact/changeFilter');
