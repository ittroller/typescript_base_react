import { lazy } from 'react';
import { PublicLayout } from '../layouts';

import { RootRoute } from './interfaceRoute';

const HomeContainer = lazy(() => import('../modules').then(module => ({ default: module.HomeContainer })));

// const AboutContainer = lazy(() => import('../modules').then(module => ({ default: module.AboutContainer })));

// const BlogsContainer = lazy(() => import('../modules').then(module => ({ default: module.BlogsContainer })));

// const RegisterContainer = lazy(() =>
//   import('../modules').then(module => ({ default: module.AuthContainer.RegisterContainer })),
// );
// const LoginContainer = lazy(() =>
//   import('../modules').then(module => ({ default: module.AuthContainer.LoginContainer })),
// );

const publicRouters: RootRoute = {
  layout: PublicLayout,
  type: 'public',
  subRoutes: [
    {
      path: '/',
      component: HomeContainer,
      exact: true,
    },
    // {
    //   path: '/login',
    //   component: LoginContainer,
    //   exact: true,
    // },
    // {
    //   path: '/register',
    //   component: RegisterContainer,
    //   exact: true,
    // },
    // {
    //   path: '/about',
    //   component: AboutContainer,
    //   exact: true,
    // },
    // {
    //   path: '/blogs',
    //   component: BlogsContainer,
    //   exact: true,
    // },
  ],
};

export { publicRouters };
