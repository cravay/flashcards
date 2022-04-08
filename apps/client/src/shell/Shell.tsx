import {
  AppShell,
  Burger,
  Center,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
} from '@mantine/core';
import { useBooleanToggle, useHotkeys } from '@mantine/hooks';
import React from 'react';

import { ColorSchemeToggleButton } from '../common/color-scheme/ColorSchemeToggleButton';
import { textWithEllipsis } from '../common/styles';
import { MainLinks } from './MainLinks';
import { User } from './User';

interface ShellProps {
  children: React.ReactNode;
}

// Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/demos/core/AppShell/AppShell.demo.usage.tsx
export default function Shell(props: ShellProps): JSX.Element {
  const [opened, toggleOpened] = useBooleanToggle(false);
  useHotkeys([['mod+M', () => toggleOpened()]]);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 300, lg: 300 }}
        >
          <Navbar.Section grow>
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <Group sx={{ height: '100%' }} noWrap position="apart">
            <Group
              noWrap
              align="center"
              sx={{ flexShrink: 2, overflow: 'hidden' }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => toggleOpened()}
                  size="sm"
                  mr="xl"
                />
              </MediaQuery>

              <Text mr="md" weight="bold" sx={textWithEllipsis}>
                <span
                  role="img"
                  style={{ marginRight: 8 }}
                  aria-label="emoji containing a piece of paper and a pencil"
                >
                  📝
                </span>
                Flashcards
              </Text>
            </Group>

            <ColorSchemeToggleButton />
          </Group>
        </Header>
      }
    >
      <Center style={{ height: 500 }}>{props.children}</Center>
    </AppShell>
  );
}
