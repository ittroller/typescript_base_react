import { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AboutComponent } from '../pages';

const mapStateToProps = (state: {}) => ({
  ...state,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);
export default memo(connect(mapStateToProps, mapDispatchToProps)(AboutComponent));
