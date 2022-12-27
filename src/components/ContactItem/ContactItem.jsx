import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { BsFillTrashFill, BsFillTelephoneFill } from 'react-icons/bs';

import { deleteContact } from 'redux/contacts/operations';
import css from './ContactItem.module.css';

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.error(`You removed "${name}" from your contacts!`);
  };

  return (
    <li id={id} className={css.item}>
      <b>{name}</b>
      <i>{number}</i>
      <a href={`tel:${number}`}>
        <BsFillTelephoneFill />
      </a>
      <button type="button" onClick={handleDelete}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
