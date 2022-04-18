import { CreateDeckDto, createDeckSchema } from '@flashcards/shared';
import { Alert, Box, Button, Group, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconAlertCircle } from '@tabler/icons';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  useCreateDeckMutation,
  useGetDeckQuery,
  useGetUsersQuery,
  useUpdateDeckMutation,
} from '../app/apiSlice';
import { UserSelect } from '../users/UserSelect';

export function DeckForm(): JSX.Element {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const isNew = deckId === undefined;

  const { data: users } = useGetUsersQuery();
  const { data: deck, isLoading: deckIsLoading } = useGetDeckQuery(
    Number(deckId),
    { skip: isNew }
  );
  const [createDeck, { error: createDeckError }] = useCreateDeckMutation();
  const [updateDeck, { error: updateDeckError }] = useUpdateDeckMutation();

  const form = useForm<CreateDeckDto>({
    schema: zodResolver(createDeckSchema),
    initialValues: {
      name: '',
      description: '',
      authorId: users?.[0].id ?? 0,
    },
  });

  useEffect(() => {
    if (deck) {
      form.setValues({ ...deck, description: deck.description ?? '' });
    }
    // `form` should be a dependency here, but it seems to change on every render.
    // Issue for this: https://github.com/cravay/flashcards/issues/19
    // eslint-disable-next-line
  }, [deck]);

  if (!users || deckIsLoading) {
    return <>Loading ...</>;
  }

  if (!isNew && !deck) {
    return <>Deck not found</>;
  }

  const onSubmit = async (deck: CreateDeckDto): Promise<void> => {
    if (isNew) {
      await createDeck(deck).unwrap();
    } else {
      await updateDeck({ id: Number(deckId), ...deck }).unwrap();
    }

    navigate('/decks');
  };

  return (
    <Box sx={{ minWidth: 450 }} mx="auto">
      <Title pb="xl">{isNew ? 'Create' : 'Edit'} Deck</Title>

      {createDeckError || updateDeckError ? (
        <Alert
          mb="xl"
          icon={<IconAlertCircle size={16} />}
          title="Saving failed"
          color="red"
        >
          Failed to dave the deck
        </Alert>
      ) : undefined}

      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <TextInput
          required
          label="Name"
          mb="sm"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Description"
          mb="sm"
          {...form.getInputProps('description')}
        />

        <UserSelect
          required
          label="Author"
          mb="sm"
          {...form.getInputProps('authorId')}
        />

        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
