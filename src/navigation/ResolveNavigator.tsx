import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import { USER_ACTION } from '../store/global';

type SetUserFC = (user: boolean) => void;

const ResolveNavigator = ({ setUser }: { setUser: SetUserFC }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = !!localStorage.getItem('token');

    if (token) {
      dispatch(USER_ACTION.getUserRequest({}, (user: Object) => setUser(user ? !!user : false)));
    }
  }, [dispatch, setUser]);

  return (
    <div>
      <h1>LOADING ...</h1>
    </div>
  );
};

export default memo(ResolveNavigator);
