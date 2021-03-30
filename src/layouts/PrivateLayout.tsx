import React, { memo } from 'react';
import './privateCommon/layout.private.scss';

const PrivateLayout: React.FC = props => <div className="private-layout">{props.children}</div>;
export default memo(PrivateLayout);
