import { createSelector } from '@reduxjs/toolkit'

export const getAllContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;

export const getContactsLength = state => {
    const allContacts = getAllContacts(state);
    return allContacts.length;
};

export const getFilteredContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name, number }) =>
            name.toLowerCase().includes(normalizedFilter) ||
            String(number).includes(normalizedFilter)
        );
    },
);
