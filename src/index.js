const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const test = async () => {
  let index = 0
  for (; index < 12; index++) {
    const i = index
    prisma.$executeRaw`select pg_sleep(2)`.then(c => console.log(`Finished ${i}`)).catch(err => console.log(`Err ${i}: ${err}`));
  }
  await prisma.$executeRaw`select pg_sleep(2)`.then(c => console.log(`Finished ${index}`)).catch(err => console.log(`Err ${index}: ${err}`));
}

test().finally(() => {prisma.$disconnect()})