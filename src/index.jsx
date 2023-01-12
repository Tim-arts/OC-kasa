import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';

import Home, { loader as HomeLoader } from './pages/Home';
import About from './pages/About';
import Housing, { loader as HousingLoader } from './pages/Housing/Housing.jsx';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: HomeLoader,
  },
  {
    path: 'housings/:housingId',
    element: <Housing />,
    loader: HousingLoader,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
