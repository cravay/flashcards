import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Moon, Sun } from 'tabler-icons-react';

export function ColorSchemeToggleButton(): JSX.Element {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={32}>
      {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </ActionIcon>
  );
}
