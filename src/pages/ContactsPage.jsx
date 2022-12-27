import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { isLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const Loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
      {/* {Loading ? <Loader /> : <ContactList />} */}
    </>
  );
}
