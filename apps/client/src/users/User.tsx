import { Text } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';

export function User(): JSX.Element {
  const { userId } = useParams();

  return (
    <Text size="xl" weight="bold" color="dimmed">
      User #{userId}
    </Text>
  );
}
