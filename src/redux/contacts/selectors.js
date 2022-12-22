import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const isLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

//!
export const sortContacts = arr => {
  return [...arr.sort((a, b) => a.name.localeCompare(b.name))];
};

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return sortContacts(visibleContacts);
  }
);
