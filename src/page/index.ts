import React from 'react';
const { lazy } = React;
export default {
  Home: lazy(() => import('./Home')),
  Css: lazy(() => import('./Css')),
  React: lazy(() => import('./React')),
  FrontEnd: lazy(() => import('./FrontEnd')),
  NotFound: lazy(() => import('./NotFound')),
} as any;
