import { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { onCountUp, onCountDown } from '../app.action';
import { authAction } from '../../authPage';

import { HomeComponent } from '../pages';

import '../styles/scss/style.scss';

const mapStateToProps = (state: Object) => ({
  ...state,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onCountUp,
      onCountDown,
    },
    dispatch,
  );
export default memo(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));
