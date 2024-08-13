import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

// Populat the database
const dutyrates = [
  {
    cet: 1701911000,
    desc: "Other, Cane or beet sugar ..,with favour/colour in powder, crystal or granule form",
    su: "KG",
    duty: 20,
    vat: 7.5,
    lvy: 50,
    exc: 0,
    dov: new Date(2020, 4, 14),
    pdf: 200,
  },
];

const users = [
  {
    name: "Hanif",
    email: "hanif@test.com",
    password: "admin1001",
    emailVerified: null,
    image: "",
    role: 1,
  },
  {
    name: "Rafiu",
    email: "rafiu@test.com",
    password: "admin1001",
    emailVerified: null,
    image: "",
    role: 1,
  },
];


async function main() {
  for (let rate of dutyrates) {
    await prisma.rateTable.create({
      data: rate,
    });
  }

  for (let user of users) {
    user.password = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  //   "prisma": {
  //   "seed": "node --no-warnings=ExperimentalWarning --loader ts-node/esm prisma/seed.ts"
  // },