// LazyLoader.js

import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function LazyLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default LazyLoader;
