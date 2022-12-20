import { toast } from 'react-toastify';
import { useState } from 'react';

import Loader from '../Loader/Loader';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../redux/contactsApi';
import NameImg from '../Images/NameImg';
import NumberImg from '../Images/NumberImg';
import css from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const inputChange = evt => {
    const inputName = evt.target.name;

    switch (inputName) {
      case 'name':
        setName(evt.target.value);
        break;

      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };
  const clearForm = () => {
    setName('');
    setNumber('');
  };
  const onFormSubmit = async evt => {
    evt.preventDefault();
    setName(name);
    setNumber(number);

    const copy = contacts.find(contact => contact.name === name);
    if (copy) {
      toast.info(`A "${copy.name}" already in  contacts!`);
      return;
    }
    if (!name && number) {
      toast.info('Please, enter a Name');
      return;
    }
    if (name && !number) {
      toast.info('Please, enter a Number');
      return;
    }
    if (name === '' && number === '') {
      toast.info('Please, enter Name and Number!');
    }
    if (name && number) {
      await addContact({ name: name, number: number }).unwrap();
      toast.success(`You have successfully added "${name}" to you contacts!`);
    }

    clearForm();
  };

  return (
    <>
      <form className={css.form}>
        <label className={css.label__name}>
          Name:
          <input
            placeholder="JUGGERNAUT"
            value={name}
            onChange={inputChange}
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <NameImg />
        </label>

        <label className={css.label__number}>
          Number:
          <input
            placeholder="+7209282291"
            value={number}
            onChange={inputChange}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <NumberImg />
        </label>
      </form>
      <button
        disabled={true ? name === '' && number === '' : false}
        onClick={onFormSubmit}
        type="submit"
        className={css.form_button}
      >
        {isLoading ? <Loader width={'16px'} /> : <>Add contact!</>}
      </button>
    </>
  );
}

export default Form;
