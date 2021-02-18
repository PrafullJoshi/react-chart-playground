import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

// import AccountView from 'src/views/account/AccountView';
// import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from './screens/Dashboard/Dashboard';
// import LoginView from 'src/views/auth/LoginView';
// import NotFoundView from 'src/views/errors/NotFoundView';
// import ProductListView from 'src/views/product/ProductListView';
// import RegisterView from 'src/views/auth/RegisterView';
// import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <DashboardView /> },
      { path: 'register', element: <DashboardView /> },
      { path: '404', element: <DashboardView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
