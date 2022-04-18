import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { IconSchool, IconStack2, IconUsers } from '@tabler/icons';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

// Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/demos/core/AppShell/_mainLinks.tsx
interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  link: string;
  onClick: () => void;
}

function MainLink({
  icon,
  color,
  label,
  link,
  onClick,
}: MainLinkProps): JSX.Element {
  return (
    <UnstyledButton
      component={NavLink}
      to={link}
      onClick={() => onClick()}
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

const data: Omit<MainLinkProps, 'onClick'>[] = [
  {
    icon: <IconStack2 size={16} />,
    color: 'teal',
    label: 'Flashcard Decks',
    link: '/decks',
  },
  {
    icon: <IconSchool size={16} />,
    color: 'rebeccapurple',
    label: 'Study',
    link: '/study',
  },
  {
    icon: <IconUsers size={16} />,
    color: 'grape',
    label: 'Users',
    link: '/users',
  },
];

export class MainLinks extends React.Component<{ onClick: () => void }> {
  override render(): ReactNode {
    return (
      <>
        {data.map((link) => (
          <MainLink {...link} onClick={this.props.onClick} key={link.label} />
        ))}
      </>
    );
  }
}
