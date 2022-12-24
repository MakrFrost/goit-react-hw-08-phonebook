import { useAuth } from 'redux/auth/useAuth';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AiOutlineContacts, AiOutlineFieldTime } from 'react-icons/ai';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/">
        Home
        <FaHome className="navigations-icons" />
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className="navigation-contacts">
            Contacts
            <AiOutlineContacts className="navigations-icons" />
          </NavLink>
          <NavLink to="/time" className="navigation-time">
            Time
            <AiOutlineFieldTime className="navigations-icons" />
          </NavLink>
        </>
      )}
    </>
  );
}
