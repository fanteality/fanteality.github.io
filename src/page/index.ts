import React from 'react'
const { lazy } = React
export default {
  Home: lazy(() => import('./Home')),
  NotFound: lazy(() => import('./NotFound')),
  Article: lazy(() => import('./Article')),
} as any
