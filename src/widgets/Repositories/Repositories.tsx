import { Flex, Title } from '@mantine/core'
import { useList, useUnit } from 'effector-react'

import { $repositories, repositoryLoaded } from '@/pages/User/model'
import { LoadingScreen } from '@/shared/ui/LoadingScreen'
import { RepositoryItem } from '@/shared/ui/RepositoryItem'

export const Repositories = () => {
  const [repositories, isRepositoriesLoaded] = useUnit([
    $repositories,
    repositoryLoaded.$isOpened,
  ])

  const repositoriesList = useList($repositories, (repository) => (
    <RepositoryItem {...repository} />
  ))

  if (!isRepositoriesLoaded && repositories.length === 0)
    return <LoadingScreen />

  return (
    <>
      <Title order={3}>Repositories</Title>
      <Flex gap="md" direction="column">
        {repositoriesList}
      </Flex>
    </>
  )
}
