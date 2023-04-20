import React from 'react';
import Home from '../pages/Home';

export type TMapRoutes = {
  label: string;
  path: string;
  // eslint-disable-next-line no-undef
  component: React.FC;
};

export const routes: TMapRoutes[] = [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
];
