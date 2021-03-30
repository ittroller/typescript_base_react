import React from 'react';
import { Breadcrumb } from 'antd';

import './style.scss';

const BreadcrumbComponent: React.FC = () => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
);

export default BreadcrumbComponent;
