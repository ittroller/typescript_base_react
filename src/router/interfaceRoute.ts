import React from 'react';

export interface ComponentIF {
  path: string;
  component: React.FC;
  exact?: boolean;
  isAuth?: boolean;
}
export interface RootRoute {
  layout: React.FC;
  type: string;
  subRoutes: Array<ComponentIF>;
}
