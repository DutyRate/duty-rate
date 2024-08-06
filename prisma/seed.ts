import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

async function main() {
  for (let rate of dutyrates) {
    prisma.rateTable.create({
      data: rate,
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
