import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  for (let i = 0; i < 10; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    await prisma.user.create({
      data: {
        name: faker.internet.userName(firstName, lastName),
        avatar: faker.internet.avatar(),
        eMail: faker.internet.email(firstName, lastName),
      },
    });
  }

  await prisma.deck.create({
    data: {
      name: 'French numbers',
      description: 'This deck helps you learn the french numbers from 1-10',
      author: {
        connect: await prisma.user.findFirst({ select: { id: true } }),
      },
      cards: {
        createMany: {
          data: [
            { front: '1', back: 'un' },
            { front: '2', back: 'deux' },
            { front: '3', back: 'trois' },
            { front: '4', back: 'quatre' },
            { front: '5', back: 'cinq' },
            { front: '6', back: 'six' },
            { front: '7', back: 'sept' },
            { front: '8', back: 'huit' },
            { front: '9', back: 'neuf' },
            { front: '10', back: 'dix' },
          ],
        },
      },
    },
  });
}

main().catch(console.error);
