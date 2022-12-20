import { toast } from 'react-toastify';

import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from '../redux/contactsApi';
import Loader from '../Loader/Loader';
import DeleteImg from '../Images/DeleteImg';
import CallImg from '../Images/CallImg';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { isFetching } = useFetchContactsQuery();

  console.log(isFetching);

  return (
    <>
      <li id={id} className={css.item}>
        <b>{name}</b>
        <i>{number}</i>
        <CallImg number={number} />
        <button
          disabled={isDeleting}
          onClick={() => {
            deleteContact(id);
            toast.error(`You removed "${name}" from your contacts!`);
          }}
        >
          {isDeleting ? <Loader width={'12px'} /> : <DeleteImg />}
        </button>
      </li>
    </>
  );
}
