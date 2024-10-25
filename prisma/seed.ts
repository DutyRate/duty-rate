import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

// Populat the database
const dutyrates = [
  // {
  //   cet: "1701911000",
  //   desc: "Other, Cane or beet sugar with favour/colour in powder, crystal or granule form",
  //   su: "KG",
  //   duty: 20,
  //   vat: 7.5,
  //   lvy: 50,
  //   exc: 0,
  //   dov: new Date(2020, 3, 14),
  //   pdf: 80,
  // },
  {
    cet: "2201101000",
    desc: "Mineral waters",
    su: "LT",
    duty: 35,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 12),
    pdf: 95,
  },
  {
    cet: "2202910000",
    desc: "Non-alcoholic beer",
    su: "L",
    duty: 20,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2023, 5, 22),
    pdf: 95,
  },
  {
    cet: "2401100000",
    desc: "Unmanufactured tobacco; tobacco refuse.",
    su: "KG",
    duty: 5,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2023, 6, 25),
    pdf: 100,
  },
  {
    cet: "2402100000",
    desc: "Cigars, cheroots and cigarillos, containing tobacco",
    su: "ST",
    duty: 20,
    vat: 7.5,
    lvy: 0,
    exc: 20,
    dov: new Date(2023, 6, 26),
    pdf: 100,
  },
  {
    cet: "2403910000",
    desc: '"Homogenised" or "reconstituted" tobacco',
    su: "KG",
    duty: 10,
    vat: 7.5,
    lvy: 60,
    exc: 20,
    dov: new Date(2023, 5, 22),
    pdf: 100,
  },
  {
    cet: "2523210000",
    desc: "Portland cement",
    su: "KG",
    duty: 20,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2023, 5, 22),
    pdf: 106,
  },
  {
    cet: "2716000000",
    desc: "Electrical energy. (optional heading)",
    su: "TKH",
    duty: 5,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 12),
    pdf: 115,
  },
  {
    cet: "2804100000",
    desc: "Hydrogen",
    su: "M3",
    duty: 5,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 12),
    pdf: 117,
  },
  {
    cet: "3702310000",
    desc: "Photographic film in rolls for colour photography (polychrome)",
    su: "U",
    duty: 20,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 12),
    pdf: 173,
  },
  {
    cet: "3702440000",
    desc: "Photographic film in rolls of a width exceeding 105 mm exceeding 610 mm",
    su: "M2",
    duty: 20,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 12),
    pdf: 174,
  },
  {
    cet: "3702520000",
    desc: "Photographic film in rolls of a width not exceeding 16 mm",
    su: "M",
    duty: 20,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 12),
    pdf: 174,
  },
  {
    cet: "6403201000",
    desc: "Footwear with outer sole of leather/uppers of leather strap across instep /big toe CKD",
    su: "2U",
    duty: 10,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 11),
    pdf: 302,
  },
  {
    cet: "7102210000",
    desc: "Diamonds, Unworked or simply sawn, cleaved or bruted",
    su: "CRT",
    duty: 5,
    vat: 7.5,
    lvy: 0,
    exc: 0,
    dov: new Date(2020, 1, 11),
    pdf: 315,
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

const logistics = [
  {
    name: "Glovo",
    location: "Abuja, Nigeria",
    img: "/glovo.jpg",
    desc: "A german logistics company",
    url: "https://glovo.com",
  },
  {
    name: "Chowdeck",
    location: "Abuja, Nigeria",
    desc: "A YC Backed company",
    img: "/glovo.jpg",
    url: "https://glovo.com",
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

  for (let logistic of logistics) {
    await prisma.logisticsTable.create({
      data: logistic,
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
