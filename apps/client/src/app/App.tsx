import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';

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
          <Outlet />
        </Shell>
      </ColorSchemeProvider>
    </MantineProvider>
  );
}
