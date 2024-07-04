import { createEffect, createEvent, createStore, sample } from 'effector'
import { debounce } from 'patronum'

import { getUserFx } from '@/pages/User/model'
import { Api } from '@/shared/api'

export const searchChanged = createEvent<string>()

export const $search = createStore('')

export const $result = createStore<SearchGitHubUser[]>([])

const fetchSearchFx = createEffect<Search, SearchResult>((search) => {
  return Api.searchUser(search.searchQuery)
})

export const $loading = fetchSearchFx.pending

$search.on(searchChanged, (_, search) => search)
$search.on(getUserFx.done, () => '' )

$result.on(fetchSearchFx.doneData, (_, result) => {
  if ($search.getState().length === 0) return []
  return result.items
})

$result.on(searchChanged, () => {
  if ($search.getState().length === 0) return []
})

sample({
  clock: debounce({
    source: searchChanged,
    timeout: 400,
  }),
  filter: $search.map((search) => search.length > 0),
  fn: (search) => ({ searchQuery: search }),
  target: fetchSearchFx,
})


