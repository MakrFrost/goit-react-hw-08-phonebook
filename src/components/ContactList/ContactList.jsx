import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const totalContacts = contacts.length;

  return (
    <ul>
      {contacts.map(({ number, name, id }) => (
        <ContactItem key={id} number={number} name={name} id={id} />
      ))}
      <p>Total contacts in you phonebook: {totalContacts}</p>
    </ul>
  );
};
