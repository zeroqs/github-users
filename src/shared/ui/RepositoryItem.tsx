import { Badge, Card, Flex, Text } from '@mantine/core'
import { IconBook2, IconGitFork, IconStar } from '@tabler/icons-react'
import { Link } from 'atomic-router-react'

export const RepositoryItem = ({ ...props }: Repository) => {
  return (
    <Card withBorder padding="lg" radius="md" w="100%">
      <Flex
        gap="sm"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <Badge size="sm">{props.language ? props.language : 'N/A'}</Badge>
        {props.fork && (
          <Badge color="cyan" size="sm">
            Forked
          </Badge>
        )}
      </Flex>
      <Flex align="center" gap="3px">
        <IconBook2 size="15px" stroke={1.5} />

        <Link target="_blank" to={props.html_url}>
          <Text fw={500} fz="md">
            {props.name}
          </Text>
        </Link>
      </Flex>

      {props.description && (
        <Text mt={5} fz="sm">
          {props.description}
        </Text>
      )}

      {(Boolean(props.stargazers_count) || Boolean(props.forks_count)) && (
        <Flex align="center" fz="xs" gap="sm" mt="sm">
          {Boolean(props.stargazers_count) && (
            <Flex align="center" gap="2px">
              <IconStar size="12px" stroke={1.5} />
              <Text c="gray.3">{props.stargazers_count}</Text>
            </Flex>
          )}
          {Boolean(props.forks_count) && (
            <Flex align="center" gap="2px">
              <IconGitFork size="12px" stroke={1.5} />
              <Text c="gray.3">{props.forks_count}</Text>
            </Flex>
          )}
        </Flex>
      )}
    </Card>
  )
}
