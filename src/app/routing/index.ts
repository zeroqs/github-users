import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'

export const homeRoute = createRoute()
export const userRoute = createRoute<{ username: string }>()

export const routes = [
  { path: '/', route: homeRoute },
  { path: '/user/:username', route: userRoute },
]

export const router = createHistoryRouter({ routes })

const history = createBrowserHistory()
router.setHistory(history)

