import { useAuth } from 'redux/auth/useAuth';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink to="/">
        Home
        <FaHome className="navigations-icons" />
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
};
