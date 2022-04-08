import { Text } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';

export function Deck(): JSX.Element {
  const { deckId } = useParams();

  return (
    <Text size="xl" weight="bold" color="dimmed">
      Deck #{deckId}
    </Text>
  );
}
