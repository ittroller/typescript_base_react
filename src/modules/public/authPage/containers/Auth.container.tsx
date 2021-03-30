import { memo } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { LOGIN_ACTION } from '../auth.action';
import { LoginComponent, RegisterComponent } from '../pages';

import { AuthReducerType } from '../../../../store/typesReducer';

const mapStateToProps = (state: AuthReducerType) => ({ ...state });

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ onLogin: LOGIN_ACTION.onLoginRequest, onRegister: LOGIN_ACTION.onLoginRequest }, dispatch);

export default {
  LoginContainer: memo(connect(mapStateToProps, mapDispatchToProps)(LoginComponent)),
  RegisterContainer: memo(connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)),
};
