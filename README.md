# Flashcards

[![CI](https://github.com/cravay/flashcards/actions/workflows/ci.yml/badge.svg)](https://github.com/cravay/flashcards/actions/workflows/ci.yml)

Flashcards is a basic full stack [TypeScript](https://www.typescriptlang.org/) application which allows users to manage
and learn [flashcards](https://en.wikipedia.org/wiki/Flashcard). It consists of a [NestJS](https://nestjs.com/) server
and a [React](https://reactjs.org/) client. This Repository is managed using the [Nx](https://nx.dev/) build system.

## Quickstart

- Install [Git](https://git-scm.com/), [Docker](https://www.docker.com/) and [Node 16 LTS](https://nodejs.org/)
- Clone this repo: `git clone git@github.com:cravay/flashcards.git`
- Install dependencies: `npm install`
- Create .env file and edit its values: `cp .env.example .env`
- Start Postgres database: `docker compose -p flashcards -f docker-compose.dev.yml up -d`
- Apply database migrations: `npx prisma migrate dev`
- Start this app: `npm start`

The following apps will be started:

- Client: http://localhost:4200
- Server: http://localhost:3333/api

## Commonly used scripts

- Start: `npm start`
- Test: `npm test`
- Lint: `npm run lint`
- Build: `npm run build`

## Repository Structure

```
flashcards/
├─ apps/
│  ├─ client/ <-- The React client app
│  ├─ server/ <-- The NestJS server app
├─ libs/
│  ├─ shared/ <-- Types and utility functions shared between apps
├─ prisma/
   ├─ schema.prisma <-- The database schema
   ├─ migrations/ <-- Database migrations
```

Also see `npx nx dep-graph`.

<!-- Generated using: https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPath!false~trailingSlash!true~rootDot!false)~2(%272%27flashcards*apps3client3server*libs3shared*0schema.0migrations%27)~version!%271%27)*%5Cn--%20%200prisma32source!3*-%01320-* -->

## Database

Data is persisted in a [PostgreSQL](https://www.postgresql.org/) Database which is accessed and managed using the [Primsa ORM](https://www.prisma.io/).
The data in the database can be viewed using [Prisma studio](https://www.prisma.io/studio): `npx prisma studio`.

## Continuous Integration / Deployment

Every time a commit is pushed to the main branch, this project gets linted, tested and built using
the [GitHub Action](https://github.com/features/actions) defined in [ci.yml](https://github.com/cravay/flashcards/blob/main/.github/workflows/ci.yml).
ALl the outputs get cached using [Nx Cloud](https://nx.app/) to the [flashcard organization](https://nx.app/orgs/624ddb8a81e08f00053c551c/workspaces/624ddbbc2a9400251c0f601f)
and builds get pushed to the [client-build](https://github.com/cravay/flashcards/tree/client-build)
and the [server-build](https://github.com/cravay/flashcards/tree/server-build) branches.

The project gets deployed to the [render](https://render.com/) cloud. Every time a build is pushed to a build branch it
gets automatically deployed. The following services have been manually created:

- Static Site: https://flashcards-7vuj.onrender.com/
- Node Web Service: https://flashcards-server.onrender.com/api
- PostgreSQL Database

## Relevant documentation

- https://www.typescriptlang.org/docs/
- https://nx.dev/getting-started/intro
- https://docs.nestjs.com/
- https://www.prisma.io/docs/
- https://github.com/colinhacks/zod
- https://reactjs.org/docs/getting-started.html
- https://redux-toolkit.js.org/usage/usage-guide
- https://mantine.dev/getting-started/

## License

[MIT](./LICENSE)
