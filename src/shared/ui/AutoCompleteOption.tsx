import {
  Avatar,
  ComboboxLikeRenderOptionInput,
  ComboboxStringItem,
  Flex,
  Text,
} from '@mantine/core'
import { useUnit } from 'effector-react'

import { $result } from '@/pages/Home/model'

export const AutoCompleteOption = ({
  option,
}: ComboboxLikeRenderOptionInput<ComboboxStringItem>) => {
  const [result] = useUnit([$result])

  const user = result.find((user) => user.login === option.value)

  if (!user) return null

  return (
    <Flex gap="sm">
      <Avatar src={user.avatar_url} />
      <Text>{user.login}</Text>
    </Flex>
  )
}
