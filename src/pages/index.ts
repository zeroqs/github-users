import { lazy } from 'react'

export const HomePage = lazy(() => import('./Home/Home'))
export const UserPage = lazy(() => import('./User/User'))
export const NotFoundPage = lazy(() => import('./Error'))
