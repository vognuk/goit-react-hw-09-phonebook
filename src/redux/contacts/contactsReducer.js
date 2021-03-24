import { createReducer, combineReducers } from '@reduxjs/toolkit'
import {
    initContactsRequest,
    initContactsSuccess,
    initContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    delContactRequest,
    delContactSuccess,
    delContactError,
    changeFilter,
} from './contactsActions'

const initialState = {
    contacts: {
        items: [],
        filter: '',
        error: '',
    },
};

const items = createReducer([], {
    [initContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [delContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [initContactsRequest]: () => true,
    [initContactsSuccess]: () => false,
    [initContactsError]: () => false,

    [delContactRequest]: () => true,
    [delContactSuccess]: () => false,
    [delContactError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
});

const filter = createReducer(initialState.contacts.filter, {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
    loading,
});

