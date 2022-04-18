import { Text } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetUserQuery } from '../app/apiSlice';

export function User(): JSX.Element {
  const { userId } = useParams();

  const { data: user, isLoading } = useGetUserQuery(Number(userId as string));

  return (
    <Text size="xl" weight="bold" color="dimmed">
      {user
        ? `Profile of ${user.name} ...`
        : isLoading
        ? 'Loading ...'
        : 'User not found'}
    </Text>
  );
}
