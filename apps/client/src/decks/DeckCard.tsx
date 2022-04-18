import { DeckWithAuthorDto } from '@flashcards/shared';
import { Anchor, Box, Card, Group, Text } from '@mantine/core';
import { formatDistanceToNow } from 'date-fns/esm';
import { Link } from 'react-router-dom';

import { textWithEllipsis } from '../common/styles';

interface DeckCardProps {
  deck: DeckWithAuthorDto;
}

export function DeckCard({ deck }: DeckCardProps): JSX.Element {
  const updatedAt = new Date(deck.updatedAt);
  const timeAgo = formatDistanceToNow(updatedAt);

  return (
    <Card shadow="sm" p="lg">
      <Group noWrap>
        <Box sx={{ overflow: 'hidden' }}>
          <Anchor
            component={Link}
            to={`./${deck.id}`}
            size="lg"
            weight="bold"
            sx={textWithEllipsis}
            title={deck.name}
          >
            {deck.name}
          </Anchor>
          <Text
            color="dimmed"
            sx={textWithEllipsis}
            title={deck.description ?? undefined}
            my="xs"
          >
            {deck.description ?? 'No description available'}
          </Text>
          <Text size="xs" color="dimmed" sx={textWithEllipsis}>
            <Text size="xs" weight="bold" sx={{ display: 'inline' }}>
              Last updated:{' '}
            </Text>
            <span title={updatedAt.toISOString()}>{timeAgo} ago</span>
          </Text>
          <Text size="xs" color="dimmed" sx={textWithEllipsis}>
            <Text size="xs" weight="bold" sx={{ display: 'inline' }}>
              Author:{' '}
            </Text>
            <Anchor size="xs" component={Link} to={`/users/${deck.author.id}`}>
              {deck.author.name}
            </Anchor>
          </Text>
        </Box>
      </Group>
    </Card>
  );
}
