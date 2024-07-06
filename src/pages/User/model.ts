import { chainRoute, redirect } from 'atomic-router'
import { createEffect, createEvent, restore } from 'effector'

import { userRoute } from '@/app/routing'
import { Api } from '@/shared/api'

export const getUserFx = createEffect<string, GitHubUser, Error>(
  (username: string) => {
    return Api.getUser(username)
  },
)

export const getRepositoryOfUserFx = createEffect<string, Repository[], Error>(
  (username: string) => {
    return Api.getRepositoryOfUser(username)
  },
)

export const goUserPage = createEvent<string>()
export const pageMounted = createEvent()

export const $user = restore(getUserFx.doneData, {} as GitHubUser)
export const $repositories = restore(getRepositoryOfUserFx.doneData, [])

export const userLoadedRoute = chainRoute({
  route: userRoute,
  beforeOpen: {
    effect: getUserFx,
    mapParams: ({ params }) => params.username,
  },
})

export const repositoryLoaded = chainRoute({
  route: userLoadedRoute,
  beforeOpen: {
    effect: getRepositoryOfUserFx,
    mapParams: ({ params }) => params.username,
  },
})

redirect({
  clock: goUserPage,
  params: (username) => ({ username }),
  route: userRoute,
})

userLoadedRoute.opened.watch(() => {
  // this
  console.log('opened')
})

userLoadedRoute.$isOpened.watch(() => {
  // this
  console.log('isOpened')
})

userLoadedRoute.open.watch(() => {
  console.log('open')
})
