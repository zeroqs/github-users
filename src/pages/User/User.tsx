import { Avatar, Divider, Flex, Text } from '@mantine/core'
import { IconUsers } from '@tabler/icons-react'
import { useUnit } from 'effector-react'

import { $user, userLoadedRoute } from '@/pages/User/model'
import { LoadingScreen } from '@/shared/ui/LoadingScreen'

const User = () => {
  const [user, isPostLoadedRouteOpened] = useUnit([$user, userLoadedRoute.$isOpened])

  if (!user) return null

  if (!isPostLoadedRouteOpened && !user) return <LoadingScreen />

  return (
    <Flex gap="xl">
      <Avatar
        alt={user.login}
        radius="md"
        src={user.avatar_url}
        styles={{ root: { width: '150px', height: '150px' } }}
      />

      <Flex align="flex-start" direction="column" gap={5}>
        <Flex gap={5} align="flex-start" mt="xs">
          <Text fw={700}>{user.login}</Text>

          {user.name && (
            <>
              <Divider orientation="vertical" mx={5} />
              <Text c="gray.3">{user.name}</Text>
            </>
          )}
        </Flex>

        <Flex align="center" fz="xs" gap="3px">
          <IconUsers size="12px" stroke={1.5} />
          <Text>followers</Text>
          <Text c="gray.3">{user.followers}</Text>
          <Divider orientation="vertical" mx={5} />
          <Text>following</Text>
          <Text c="gray.3">{user.following}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default User
