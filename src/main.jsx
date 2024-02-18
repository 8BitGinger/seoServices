import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Contact from './pages/Contact';
import Services from './pages/Services';

import App from './App.jsx';
import Home from './pages/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'services',
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
