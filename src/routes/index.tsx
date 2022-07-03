import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { Landing } from '@/features/misc';

import { publicRoutes } from './public';

export const AppRoutes: FC = () => {
  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return element;
};
