import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <>
      <Phonebook />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
};
