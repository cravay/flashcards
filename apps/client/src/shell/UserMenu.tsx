import { Avatar, Box, Group, Text, UnstyledButton } from '@mantine/core';
import React from 'react';
import { ChevronRight } from 'tabler-icons-react';

import { textWithEllipsis } from '../common/styles';

// Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/demos/core/AppShell/_user.tsx
export function UserMenu(): JSX.Element {
  const profile = {
    name: 'Michael Schertenleib',
    avatar: 'https://avatars.githubusercontent.com/u/11135559?v=4',
    eMail: 'michael@michaelschertenleib.com',
  };

  return (
    <Box
      sx={(theme) => ({
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group noWrap>
          <Avatar src={profile.avatar} radius="xl" />
          <Box sx={{ flex: 1, flexShrink: 2, overflow: 'hidden' }}>
            <Text size="sm" weight={500} sx={textWithEllipsis}>
              {profile.name}
            </Text>
            <Text color="dimmed" size="xs" sx={textWithEllipsis}>
              {profile.eMail}
            </Text>
          </Box>

          <ChevronRight size={18} />
        </Group>
      </UnstyledButton>
    </Box>
  );
}
