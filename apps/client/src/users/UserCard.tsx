import { UserDto } from '@flashcards/shared';
import { Avatar, Box, Card, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { textWithEllipsis } from '../common/styles';

interface UserCardProps {
  user: UserDto;
}

export function UserCard({ user }: UserCardProps): JSX.Element {
  return (
    <Card shadow="sm" p="lg" component={Link} to={`./${user.id}`}>
      <Group noWrap>
        <Avatar src={user.avatar} radius="xl" alt={`Avatar of ${user.name}`} />

        <Box sx={{ overflow: 'hidden' }}>
          <Text weight="bold" sx={textWithEllipsis}>
            {user.name}
          </Text>
          <Text color="dimmed" sx={textWithEllipsis}>
            {user.eMail}
          </Text>
        </Box>
      </Group>
    </Card>
  );
}
