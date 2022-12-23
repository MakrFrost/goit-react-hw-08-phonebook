import { NavLink } from 'react-router-dom';
import { MdOutlineAppRegistration, MdLogin } from 'react-icons/md';

export const AuthNav = () => {
  return (
    <>
      <NavLink className="register" to="/register">
        Register
        <MdOutlineAppRegistration className="navigations-icons" />
      </NavLink>
      <NavLink to="/login">
        Log In
        <MdLogin className="navigations-icons" />
      </NavLink>
    </>
  );
};
