import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter, ContactForm, ContactList } from 'components/index';
import Loader from 'components/Loader/Loader';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const Loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm />
      <Filter />
      <div>{Loading && <Loader />}</div>
      <ContactList />
    </>
  );
}
