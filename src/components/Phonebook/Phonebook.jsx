import { useFetchContactsQuery } from './redux/contactsApi';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Loader from './Loader/Loader';
import css from '../Phonebook/Phonebook.module.css';

function Phonebook() {
  const { isLoading } = useFetchContactsQuery();

  return (
    <div className={css.main_container}>
      {isLoading ? (
        <div className={css.loader}>
          <h2>Loading, please wait...</h2>
          <Loader width={'96px'} />
        </div>
      ) : (
        <Section title={'Add contact to phonebook!'}>
          <Form />
          <Section title={'Contacts:'} />
          <Filter />
          <Contacts />
        </Section>
      )}
    </div>
  );
}

export default Phonebook;
