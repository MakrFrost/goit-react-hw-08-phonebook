import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// пути
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivatRoute';
// редакс
import { useAuth } from 'redux/auth/useAuth';
import { refreshUser } from 'redux/auth/operations';
// линки
import Model from './Model/Model';
import NoPage from './NoPage/NoPage';
import Loader from './Loader/Loader';
import TimePage from './TimePage/TimePage';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Model />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/time"
            element={
              <PrivateRoute redirectTo="/login" component={<TimePage />} />
            }
          />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
