import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserLogout/UserLogout';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from '../../redux/auth/useAuth';
// import css from './AppBar.styled.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="appbar-container">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
