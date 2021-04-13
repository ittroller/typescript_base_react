import React, { useMemo, memo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PrivateNavigator from './PrivateNavigator';
import PublicNavigator from './PublicNavigator';
import ResolveNavigator from './ResolveNavigator';
import { privateRouters, publicRouters } from '../router';

const RootNavigator: React.FC = () => {
  //   const [hasUser, setHasUser] = useState(useSelector(state => !!state.global.user));
  const [hasUser] = useState(false);
  const location = useLocation();

  const renderUI = useMemo(() => {
    const isLogin = !!localStorage.getItem('token');

    const isRouterPrivate = privateRouters?.subRoutes.find(route => route.path === location.pathname);

    const isAuthenRouter = publicRouters?.subRoutes.find(
      route => route.path === location.pathname && (route.path === '/login' || route.path === '/register'),
    );

    if (hasUser) {
      return <PrivateNavigator />;
    }
    if (isLogin && (isRouterPrivate || isAuthenRouter)) {
      return <ResolveNavigator />;
    }
    return <PublicNavigator />;
  }, [hasUser, location]);

  return <>{renderUI}</>;
};

export default memo(RootNavigator);
