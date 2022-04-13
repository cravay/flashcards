import { UserDto } from '@flashcards/shared';
import { Box, LoadingOverlay, SimpleGrid, Title } from '@mantine/core';
import { useEffect, useState } from 'react';

import { environment } from '../environments/environment';
import { UserCard } from './UserCard';

export function Users(): JSX.Element {
  const [users, setUsers] = useState<UserDto[] | undefined>(undefined);

  useEffect(() => {
    fetch(environment.apiUrl + '/users')
      .then((result) => result.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <LoadingOverlay visible={!users} overlayColor="transparent" zIndex={1} />
      <Title pb="xl">Users</Title>

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'xl', cols: 2 },
          { maxWidth: 'md', cols: 1 },
        ]}
      >
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
