import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

export default function Model() {
  return (
    <div className="homepage-container">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
