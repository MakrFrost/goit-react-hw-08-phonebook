import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';
import { selectVisibleContacts, isLoading } from 'redux/contacts/selectors';
import css from './ContactList.module.css';
import Loader from 'components/Loader/Loader';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const Loading = useSelector(isLoading);

  return (
    <div className={css.contact__container}>
      {contacts.length === 0 && <p>Sorry, You don't have contacts.</p>}
      {Loading ? (
        <Loader />
      ) : (
        <ul className={css.contact__list}>
          {contacts &&
            contacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
        </ul>
      )}
    </div>
  );
}
// import { isLoading } from 'redux/contacts/selectors';
// import Loader from 'components/Loader/Loader';
// const Loading = useSelector(isLoading);
