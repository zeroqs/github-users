import { chainRoute, redirect } from 'atomic-router'
import { createEffect, createEvent, restore, sample } from 'effector'
import { persist } from 'effector-storage/local'

import { userRoute } from '@/app/routing'
import { Api } from '@/shared/api'

export const getUserFx = createEffect<string, GitHubUser, Error>(
  (username: string) => {
    return Api.getUser(username)
  },
)

export const cleatLocalUser = createEffect(
  () => {
    return localStorage.removeItem('user')
  },
)

export const goUserPage = createEvent<string>()

export const $user = restore(getUserFx.doneData, null)

export const userLoadedRoute = chainRoute({
    route: userRoute,
    
    beforeOpen: {
        effect: getUserFx,
        mapParams: ({ params }) => params.username,
    },
    
})

sample({ clock: userLoadedRoute.closed, target: cleatLocalUser })

redirect({
  clock: goUserPage,
  params: (username) => ({ username }),
  route: userRoute,
})

persist({ store: $user, key: 'user' })