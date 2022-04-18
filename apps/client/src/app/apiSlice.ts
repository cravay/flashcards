import {
  CardDto,
  cardSchema,
  CreateDeckDto,
  DeckDto,
  deckSchema,
  DeckWithAuthorDto,
  deckWithAuthorSchema,
  UpdateDeckDto,
  UserDto,
  userSchema,
} from '@flashcards/shared';
import {
  FullTagDescription,
  TagDescription,
} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { environment } from '../environments/environment';

const enum Tag {
  Deck = 'Deck',
  Card = 'Card',
  User = 'User',
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiUrl }),
  tagTypes: [Tag.Deck, Tag.Card, Tag.User],

  endpoints: (builder) => ({
    // POST /decks
    createDeck: builder.mutation<DeckDto, CreateDeckDto>({
      query: (body) => ({ url: '/decks', method: 'POST', body }),
      transformResponse: (result) => deckSchema.parse(result),
      invalidatesTags: () => [{ type: Tag.Deck, id: 'LIST' }],
    }),

    // GET /decks
    getDecks: builder.query<DeckWithAuthorDto[], void>({
      query: () => '/decks',
      transformResponse: (result) => deckWithAuthorSchema.array().parse(result),
      providesTags: (result) => createTagListForList(Tag.Deck, result),
    }),

    // GET /decks/:id
    getDeck: builder.query<DeckWithAuthorDto, number>({
      query: (id) => `/decks/${id}`,
      transformResponse: (result) => deckWithAuthorSchema.parse(result),
      providesTags: (_result, _error, id) => [{ type: Tag.Deck, id }],
    }),

    // PATCH /decks/:id
    updateDeck: builder.mutation<DeckDto, UpdateDeckDto & { id: number }>({
      query: ({ id, ...body }) => ({
        url: `/decks/${id}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (result) => deckSchema.parse(result),
      invalidatesTags: (result) => [{ type: Tag.Deck, id: result?.id }],
    }),

    // DELETE /decks/:id
    deleteDeck: builder.mutation<DeckDto, number>({
      query: (id) => ({ url: `/decks/${id}`, method: 'DELETE' }),
      transformResponse: (result) => deckSchema.parse(result),
      invalidatesTags: (result) => [{ type: Tag.Card, id: result?.id }],
    }),

    // GET /cards
    getCards: builder.query<CardDto[], void>({
      query: () => '/cards',
      transformResponse: (result) => cardSchema.array().parse(result),
      providesTags: (result) => createTagListForList(Tag.Card, result),
    }),

    // GET /cards/:id
    getCard: builder.query<CardDto, number>({
      query: (id) => `/cards/${id}`,
      transformResponse: (result) => cardSchema.parse(result),
      providesTags: (_result, _error, id) => [{ type: Tag.Card, id }],
    }),

    // GET /users
    getUsers: builder.query<UserDto[], void>({
      query: () => '/users',
      transformResponse: (result) => userSchema.array().parse(result),
      providesTags: (result) => createTagListForList(Tag.User, result),
    }),

    // GET /users/:id
    getUser: builder.query<UserDto, number>({
      query: (id) => `/users/${id}`,
      transformResponse: (result) => userSchema.parse(result),
      providesTags: (_result, _error, id) => [{ type: Tag.User, id }],
    }),
  }),
});

function createTagListForList<T extends { id: number }>(
  type: Tag,
  result?: T[]
): TagDescription<Tag>[] {
  return result
    ? result
        .map<FullTagDescription<Tag>>(({ id }) => ({ type, id }))
        .concat([{ type, id: 'LIST' }])
    : [type];
}

export const {
  useCreateDeckMutation,
  useGetDecksQuery,
  useGetDeckQuery,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
  useGetCardQuery,
  useGetUsersQuery,
  useGetUserQuery,
} = apiSlice;
