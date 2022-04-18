import { Box, Button, LoadingOverlay, SimpleGrid, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

import { useGetDecksQuery } from '../app/apiSlice';
import { DeckCard } from './DeckCard';

export function Decks(): JSX.Element {
  const { data: decks } = useGetDecksQuery();

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <LoadingOverlay visible={!decks} overlayColor="transparent" zIndex={1} />
      <Title pb="xl">Decks</Title>

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'xl', cols: 2 },
          { maxWidth: 'md', cols: 1 },
        ]}
      >
        {decks?.map((deck) => (
          <DeckCard key={deck.id} deck={deck} />
        ))}
      </SimpleGrid>

      <Button component={Link} to="./new" mt="lg" hidden={!decks}>
        Create new Deck
      </Button>
    </Box>
  );
}
