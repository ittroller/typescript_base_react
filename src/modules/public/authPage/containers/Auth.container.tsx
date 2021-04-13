import { memo } from 'react';
// import { bindActionCreators, Dispatch } from 'redux';
// import { connect } from 'react-redux';

import { LoginComponent, RegisterComponent } from '../pages';

export default {
  LoginContainer: memo(LoginComponent),
  RegisterContainer: memo(RegisterComponent),
};
