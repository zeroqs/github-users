import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'

export const homeRoute = createRoute()

export const routes = [{ path: '/', route: homeRoute }]

export const router = createHistoryRouter({ routes })

const history = createBrowserHistory()
router.setHistory(history)
