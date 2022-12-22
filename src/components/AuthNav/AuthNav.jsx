import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink className="register" to="/register">
        Register
      </NavLink>
      <NavLink to="/login">Log In</NavLink>
    </>
  );
};
