import React from 'react';
const { lazy } = React;
export default {
    Home: lazy(() => import('./Home')),
    Banner: lazy(() => import('./Banner')),
} as any;
