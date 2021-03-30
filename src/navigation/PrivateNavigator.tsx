import React, { lazy, useEffect, memo, Component } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import { privateRouters, publicRouters } from '../router';

import { ComponentIF } from '../router/interfaceRoute';

const NotFound = lazy(() => import('../modules').then(module => ({ default: module.NotFound })));

const PrivateNavigator = () => {
  const mergeRoute = [privateRouters, publicRouters];
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (publicRouters?.subRoutes?.length) {
      publicRouters.subRoutes.map(route => {
        if (route.path === location.pathname && (location.pathname === '/login' || location.pathname === '/register')) {
          return history.push('/dashboard');
        }
        return false;
      });
    }
  }, [history, location]);

  return (
    <Switch>
      {mergeRoute.map((route, i) => (
        <Route
          key={i}
          exact={route.subRoutes.some((r: ComponentIF) => r.exact)}
          path={route.subRoutes.map((r: ComponentIF): string => r.path)}
        >
          <privateRouters.layout>
            {route.subRoutes.map((subRoute: ComponentIF, idx: number) => (
              <Route key={idx} {...subRoute} />
            ))}
          </privateRouters.layout>
        </Route>
      ))}

      <Route exact component={NotFound} />
    </Switch>
  );
};

export default memo(PrivateNavigator);
