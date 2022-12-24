import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../redux/auth/useAuth';
import css from './UserLogout.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <div className={css.logout_container}>
      <p className={css.logout_name}>Welcome, {userName}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.logout_btn}
      >
        Logout
      </button>
    </div>
  );
}
