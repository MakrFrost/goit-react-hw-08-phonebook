import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';
import { BsFilter } from 'react-icons/bs';

import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  function changeFilter(e) {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  }

  return (
    <>
      <label className={css.filter__label}>
        Find you contacts by name:
        <input
          type="text"
          name="filter"
          placeholder="Enter name here"
          onChange={changeFilter}
        />
        <BsFilter className={css.filter__icon} />
      </label>
      {
        <p>
          Total contacts in you phonebook: <b>{contacts.length}</b>
        </p>
      }
    </>
  );
}
