# Flashcards

[![CI](https://github.com/cravay/flashcards/actions/workflows/ci.yml/badge.svg)](https://github.com/cravay/flashcards/actions/workflows/ci.yml)

Flashcards is a basic full stack [TypeScript](https://www.typescriptlang.org/) application which allows users to manage
and learn [flashcards](https://en.wikipedia.org/wiki/Flashcard). It consists of a [NestJS](https://nestjs.com/) server
and a [React](https://reactjs.org/) client. This Repository is managed using the [Nx](https://nx.dev/) build system.

## Quickstart

- Install [Git](https://git-scm.com/), [Docker](https://www.docker.com/) (or [Podman](https://podman.io/)) and [Node 16 LTS](https://nodejs.org/)
- Clone this repo: `git clone git@github.com:cravay/flashcards.git`
- Install dependencies: `npm install`
- Create .env file: `cp .env.example .env` (`copy` on Windows)
- Start Postgres database: `docker compose -p flashcards -f docker-compose.dev.yml up -d`
- Apply database migrations and run seed script: `npx prisma migrate dev`
- Start everything: `npm start`

The following apps will be started:

- Client: <http://localhost:4200>
- Server: <http://localhost:3333> (Swagger-UI: <http://localhost:3333/api>)

## Commonly used scripts

- Start: `npm start`
- Test: `npm test`
- Lint: `npm run lint`
- Build: `npm run build`

## Project Structure

```text
flashcards/
├─ apps/
│  ├─ client/ <-- The React client app
│  ├─ server/ <-- The NestJS server app
├─ libs/
│  ├─ shared/ <-- Types and utility functions shared between apps
├─ prisma/
   ├─ schema.prisma <-- Database schema
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
All the outputs get cached using [Nx Cloud](https://nx.app/) ([in this organization](https://nx.app/orgs/624ddb8a81e08f00053c551c/workspaces/624ddbbc2a9400251c0f601f))
and builds get pushed to the [client-build](https://github.com/cravay/flashcards/tree/client-build)
branch and the [server-build](https://github.com/cravay/flashcards/tree/server-build) branch.

The project gets deployed to the [render](https://render.com/) cloud. Every time a build is pushed to a build branch it
gets automatically deployed. The following services have been manually created:

- Static Site: <https://flashcards-7vuj.onrender.com/>
- Node Web Service: <https://flashcards-server.onrender.com/>
- PostgreSQL Database

## Tree-Shaking issues

Due to the bug [nrwl/nx#9717](https://github.com/nrwl/nx/issues/9717) tree-shaking currently doesn't work for client builds. 
For some reason unknown to me, the [side effects optimization of webpack](https://webpack.js.org/configuration/optimization/#optimizationsideeffects)
got disabled for Nx 12. There's a [PR to reenable it](https://github.com/nrwl/nx/pull/8296), but until that gets merged 
the side effects optimization can get manually re-enabled like this (This reduces the bundle size by over 90%):

```bash
sed --in-place s/sideEffects:\ false/sideEffects:\ true/ node_modules/\@nrwl/web/src/utils/config.js
```

The bundle of a client build can get analyzed using [source-map-explorer](https://github.com/danvk/source-map-explorer) like this:

```bash
nx build client --source-map
npx source-map-explorer dist/apps/client/main.*.js
```

## Relevant documentation

- <https://www.typescriptlang.org/docs/>
- <https://nx.dev/getting-started/intro>
- <https://docs.nestjs.com/>
- <https://www.prisma.io/docs/>
- <https://github.com/colinhacks/zod> / <https://colinhacks.com/essays/zod>
- <https://reactjs.org/docs/getting-started.html>
- <https://redux-toolkit.js.org/usage/usage-guide>
- <https://mantine.dev/getting-started/>
- <https://reactrouter.com/docs/en/v6>

## License

[MIT](./LICENSE)
