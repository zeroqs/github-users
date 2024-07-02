import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'atomic-router-react'

import { router } from '@/app/routing'
import { RoutesView } from '@/app/routing/view'

export const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router}>
        <RoutesView />
      </RouterProvider>
    </MantineProvider>
  )
}
