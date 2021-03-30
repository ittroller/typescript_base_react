import React, { useMemo, memo } from 'react';
import { useSelector } from 'react-redux';

import PrivateNavigator from './PrivateNavigator';
import PublicNavigator from './PublicNavigator';
import ResolveNavigator from './ResolveNavigator';

import { privateRouters, publicRouters } from '../router';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import { GlobalReducerType } from '../store/typesReducer';

const RootNavigator = () => {
  const [hasUser, setHasUser] = useState(useSelector<GlobalReducerType, boolean>(state => !!state.global.user));
  const location = useLocation();

  const renderUI = useMemo(() => {
    const isLogin = !!localStorage.getItem('token');

    const isRouterPrivate = privateRouters?.subRoutes.find(route => route.path === location.pathname);

    const isAuthenRouter = publicRouters?.subRoutes.find(
      route => route.path === location.pathname && (route.path === '/login' || route.path === '/register'),
    );

    const setUser = (user: boolean): void => setHasUser(user);

    if (hasUser) return <PrivateNavigator />;
    else if (isLogin && (isRouterPrivate || isAuthenRouter)) return <ResolveNavigator setUser={setUser} />;
    return <PublicNavigator />;
  }, [hasUser, location]);

  return <>{renderUI}</>;
};

export default memo(RootNavigator);
