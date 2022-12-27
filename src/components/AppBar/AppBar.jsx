import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserLogout/UserLogout';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from '../../redux/auth/useAuth';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="appbar-container">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
