import { createRoutesView } from 'atomic-router-react'

import { homeRoute, userRoute } from '@/app/routing'
import { HomePage, NotFoundPage, UserPage } from '@/pages'

export const RoutesView = createRoutesView({
  routes: [
    { route: homeRoute, view: HomePage },
    { route: userRoute, view: UserPage },
  ],
  otherwise: NotFoundPage,
})
