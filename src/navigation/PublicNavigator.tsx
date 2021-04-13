import React, { lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import { publicRouters } from '../router';

const NotFound = lazy(() => import('../modules').then(module => ({ default: module.NotFound })));

const PublicNavigator: React.FC = () => (
  <Switch>
    <Route exact={publicRouters.subRoutes.some(r => r.exact)} path={publicRouters.subRoutes.map(r => r.path)}>
      <publicRouters.layout>
        {publicRouters.subRoutes.map((subRoute, idx) => (
          <Route key={idx} {...subRoute} />
        ))}
      </publicRouters.layout>
    </Route>
    <Route exact component={NotFound} />
  </Switch>
);

export default memo(PublicNavigator);
