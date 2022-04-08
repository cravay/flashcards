import { ColorSchemeProvider, MantineProvider, Text } from '@mantine/core';
import React from 'react';

import { useRootColorScheme } from '../common/color-scheme/useRootColorScheme';
import Shell from '../shell/Shell';

export default function App(): JSX.Element {
  const [colorScheme, toggleColorScheme] = useRootColorScheme();

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <Shell>
          <Text size="xl" weight="bold" color="dimmed">
            Let's study some flashcards!
          </Text>
        </Shell>
      </ColorSchemeProvider>
    </MantineProvider>
  );
}
