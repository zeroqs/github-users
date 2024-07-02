import { createRoutesView } from 'atomic-router-react'

import { homeRoute } from '@/app/routing'
import { HomePage, NotFoundPage } from '@/pages'

export const RoutesView = createRoutesView({
  routes: [{ route: homeRoute, view: HomePage }],
  otherwise: NotFoundPage,
})
