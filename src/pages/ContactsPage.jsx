import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
