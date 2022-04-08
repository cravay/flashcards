import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { School, Stack2, Users } from 'tabler-icons-react';

// Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/demos/core/AppShell/_mainLinks.tsx
interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  link: string;
}

function MainLink({ icon, color, label, link }: MainLinkProps): JSX.Element {
  return (
    <UnstyledButton
      component={NavLink}
      to={link}
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

        '&.active':
          theme.colorScheme === 'dark'
            ? {
                color: theme.colors.blue[0],
                backgroundColor: theme.colors.blue[9],
              }
            : {
                color: theme.colors.blue[9],
                backgroundColor: theme.colors.blue[0],
              },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data: MainLinkProps[] = [
  {
    icon: <Stack2 size={16} />,
    color: 'teal',
    label: 'Flashcard Decks',
    link: '/decks',
  },
  {
    icon: <School size={16} />,
    color: 'rebeccapurple',
    label: 'Study',
    link: '/study',
  },
  {
    icon: <Users size={16} />,
    color: 'grape',
    label: 'Users',
    link: '/users',
  },
];

export function MainLinks(): JSX.Element {
  return (
    <>
      {data.map((link) => (
        <MainLink {...link} key={link.label} />
      ))}
    </>
  );
}
