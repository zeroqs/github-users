import { Autocomplete, Flex, Loader, Paper, Title } from '@mantine/core'
import { useUnit } from 'effector-react'


import { $loading, $result, $search, searchChanged } from '@/pages/Home/model'
import { AutoCompleteOption } from '@/shared/ui/AutoCompleteOption'
import { goUserPage } from '@/pages/User/model'
import { Link } from 'atomic-router-react'
import { homeRoute } from '@/app/routing'

const Header = () => {
  const [search, loading, result] = useUnit([$search, $loading, $result])

  const options = result.map((user) => {
    return {
      value: user.login,
      ...user,
    }
  })

  return (
    <Paper  p="md">
      <Flex align="center" direction="row" wrap="wrap" justify="space-between">
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={homeRoute}>
          <Flex align="center" direction="row" wrap="wrap" gap="md">
          ⭐️
          <Title order={3}>GitHub Users</Title>
          
          </Flex>
          </Link>

        <Autocomplete
          value={search}
          onChange={searchChanged}
          w={300}
          placeholder="🔎 Search for GitHub users"
          data={options}
          renderOption={AutoCompleteOption}
          onOptionSubmit={goUserPage}
          rightSection={loading && <Loader size={16} />}
          comboboxProps={{
            transitionProps: { transition: 'pop', duration: 200 },
          }}
        />
      </Flex>
    </Paper>
  )
}

// eslint-disable-next-line import/no-default-export
export default Header
