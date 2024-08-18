import { Search } from "lucide-react";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const ratesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        location: z.string().min(1),
        desc: z.string().min(1),
        img: z.string().min(1),
        url: z.string().url(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.logisticsTable.create({
        data: {
          name: input.name,
          location: input.location,
          desc: input.desc,
          img: input.img,
          url: input.url,
        },
      });
    }),

  searchRate: publicProcedure.input(
    z.object({
      query: z.string(),
      limit: z.number().int().default(10).optional(),
    })
  ).query(async ({ ctx, input }) => {
    const rates = await ctx.db.rateTable.findMany({
      // cacheStrategy: {
      //   ttl: 200,
      // },
      //TODO use Prisma accelerate to activate caching https://www.prisma.io/docs/accelerate/getting-started
      take: input.limit,
      // skip: (input.limit * input.page) - input.limit,
      where: {
        OR: [
          // { cet: {in: input.query} }, TODO: convert cet field to string
          { desc: { contains: input.query } },
        ],
      },
      // orderBy: { createdAt: "asc" },
    });

    return rates ?? [];
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
