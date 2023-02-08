import { Link } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

import { MdAccountCircle } from 'react-icons/md';
import { BsPersonPlusFill } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  const { userName } = useAuth();

  return isLoggedIn ? (
    <div className="homepage-container">
      <h1>Hello {userName}, nice to meet You here!</h1>
      <p className="homepage-text">
        This <b>application</b> was created for active people who have a lot of
        contacts and dont have to much free time.
      </p>
      <ul className="homepage-list">
        With my <b>"Phonebook App"</b> you can:
        <li>
          <BsPersonPlusFill className="homepage-icons" />
          Add contact number to you contacts
        </li>
        <li>
          <IoIosCall className="homepage-icons" />
          Make a call directly from the app
        </li>
        <li>
          <FaSortAmountUpAlt className="homepage-icons" />
          Check the total number of your contacts
        </li>
        <li>
          <BsThreeDots className="homepage-icons" />
          See the time and much-much more!
        </li>
      </ul>
    </div>
  ) : (
    <div className="homepage-container">
      <h1>Hello, nice to meet You here!</h1>
      <p className="homepage-text">
        This <b>application</b> was created for active people who have a lot of
        contacts and dont have to much free time.
      </p>
      <ul className="homepage-list">
        With my <b>"Phonebook App"</b> you can:
        <li>
          <MdAccountCircle className="homepage-icons" />
          Create your personal account
        </li>
        <li>
          <BsPersonPlusFill className="homepage-icons" />
          Add contact number to you contacts
        </li>
        <li>
          <IoIosCall className="homepage-icons" />
          Make a call directly from the app
        </li>
        <li>
          <FaSortAmountUpAlt className="homepage-icons" />
          Check the total number of your contacts
        </li>
        <li>
          <BsThreeDots className="homepage-icons" />
          See the time and much-much more!
        </li>
      </ul>
      <p className="homepage-text">
        Dont waste time and go straight to
        <Link to="/register" className="homepage-link">
          register
        </Link>
        your account!
      </p>
      <p className="homepage-text">
        If you already have an account, let's
        <Link to="/login" className="homepage-link">
          log in
        </Link>
        !
      </p>
    </div>
  );
}
