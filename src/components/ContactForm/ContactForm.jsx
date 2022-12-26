import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = async evt => {
    evt.preventDefault();

    const number = evt.currentTarget.elements.number.value;
    const name = evt.currentTarget.elements.name.value;

    const copy = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
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
      dispatch(addContact({ name: name, number: number }));
      toast.success(`You have successfully added "${name}" to you contacts!`);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <label className={css.label__name}>
        Name
        <input
          className={css.input__name}
          placeholder="JUGGERNAUT"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>
      <label className={css.label__number}>
        Number
        <input
          className={css.input__number}
          placeholder="+7209282291"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <button type="submit" className={css.form_button}>
        Add contact!
      </button>
    </form>
  );
}
