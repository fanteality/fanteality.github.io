import React from 'react';
const { lazy } = React;
export default {
    Home: lazy(() => import('./Home')),
} as any;
