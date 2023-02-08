import { useAuth } from 'redux/auth/useAuth';
import { Navigate } from 'react-router-dom';

export function PublicRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
