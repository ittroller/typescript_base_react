import { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AccountComponent } from '../pages';

const mapStateToProps = (state: Object) => ({
  ...state,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);
export default memo(connect(mapStateToProps, mapDispatchToProps)(AccountComponent));
