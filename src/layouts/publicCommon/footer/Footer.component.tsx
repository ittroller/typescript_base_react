import React from 'react';
import { Layout } from 'antd';

import './footer.scss';

const { Footer } = Layout;

const FooterPublic: React.FC = () => (
  <div className="layout-footer">
    <Footer className="wrapper">Made By Minh CK</Footer>
  </div>
);

export default FooterPublic;
