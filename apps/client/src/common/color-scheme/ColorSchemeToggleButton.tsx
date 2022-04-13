import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons';

export function ColorSchemeToggleButton(): JSX.Element {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={32}>
      {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  );
}
