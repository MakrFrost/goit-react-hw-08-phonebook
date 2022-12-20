import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6399d82016b0fdad774b4eb6.mockapi.io/contacts',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/Phonebook',
      providesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: '/Phonebook',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/Phonebook/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
