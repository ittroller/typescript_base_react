import React, { Suspense, memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProgressBar from 'react-topbar-progress-indicator';

import { RootNavigator } from './navigation';

ProgressBar.config({
  barColors: { 0: '#bf1b44' },
  shadowBlur: 5,
});

const App: React.FC = () => (
  <Suspense fallback={<ProgressBar />}>
    <BrowserRouter>
      <RootNavigator />
    </BrowserRouter>
  </Suspense>
);

export default memo(App);
