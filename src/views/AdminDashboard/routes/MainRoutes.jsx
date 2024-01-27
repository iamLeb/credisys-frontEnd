import { lazy } from 'react';

// project import
import Loadable from '/src/components/Loadable';
import MainLayout from '/src/views/AdminDashboard/layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../../dashboard/index.jsx')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('../extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('../components-overview/Typography')));
const Color = Loadable(lazy(() => import('../components-overview/Color')));
const Shadow = Loadable(lazy(() => import('../components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('../components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
