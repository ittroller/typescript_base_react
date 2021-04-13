import { lazy } from 'react';
import { PrivateLayout } from '../layouts';

import { RootRoute } from './interfaceRoute';

const DashboardContainer = lazy(() => import('../modules').then(module => ({ default: module.DashboardContainer })));
// const AccountContainer = lazy(() => import('../modules').then(module => ({ default: module.AccountContainer })));

const privateRouters: RootRoute = {
  layout: PrivateLayout,
  type: 'private',
  subRoutes: [
    {
      path: '/dashboard',
      component: DashboardContainer,
      exact: true,
      isAuth: true,
    },
    // {
    //   path: '/account',
    //   component: AccountContainer,
    //   exact: true,
    //   isAuth: true,
    // },
  ],
};

export { privateRouters };
