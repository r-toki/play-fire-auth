import React from 'react';

const AuthRoutes = React.lazy(() =>
  import('@/features/auth').then((m) => ({ default: m.AuthRoutes }))
);

export const publicRoutes = [{ path: 'auth/*', element: <AuthRoutes /> }];
