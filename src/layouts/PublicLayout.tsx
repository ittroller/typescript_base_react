import React, { memo } from 'react';
import { Layout } from 'antd';

import { HeaderPublic, FooterPublic } from './publicCommon';

import './publicCommon/layout.public.scss';

const PublicLayout: React.FC = props => (
  <Layout className="public-layout">
    <HeaderPublic />
    <div className="layout-content">{props.children}</div>
    <FooterPublic />
  </Layout>
);

export default memo(PublicLayout);
