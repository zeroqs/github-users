import '@mantine/core/styles.css'

import { Container, MantineProvider } from '@mantine/core'
import { RouterProvider } from 'atomic-router-react'
import { Suspense } from 'react'

import { router } from '@/app/routing'
import { RoutesView } from '@/app/routing/view'
import { LoadingScreen } from '@/shared/ui/LoadingScreen'
import Header from '@/widgets/Header/Header'

export const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router}>
        <Header />

        <Suspense fallback={<LoadingScreen />}>
          <Container size="lg" py={25}>
            <RoutesView />
          </Container>
        </Suspense>
      </RouterProvider>
    </MantineProvider>
  )
}
