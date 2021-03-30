import React, { lazy, memo } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import { publicRouters, privateRouters } from '../router';

const NotFound = lazy(() => import('../modules').then(module => ({ default: module.NotFound })));

const PublicNavigator = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Switch>
      <Route exact={publicRouters.subRoutes.some(r => r.exact)} path={publicRouters.subRoutes.map(r => r.path)}>
        <publicRouters.layout>
          {publicRouters.subRoutes.map((subRoute, idx) => (
            <Route key={idx} {...subRoute} />
          ))}
        </publicRouters.layout>
      </Route>
      {privateRouters?.subRoutes?.length ? (
        privateRouters.subRoutes.map(route => {
          if (route.path === location.pathname) {
            return history.push('/login');
          } else return <Route exact key={'NOT FOUND'} component={NotFound} />;
        })
      ) : (
        <Route exact component={NotFound} />
      )}
    </Switch>
  );
};

export default memo(PublicNavigator);
