import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const ratesRouter = createTRPCRouter({
  // Create a new rate, hardly to be used, unless by the admin dashboard
  // Table should remain with less write and more reads
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
  // Get individual rate option by the unique value of "cet"
  // Two fields cannot have the same cet
  getRate: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const rate = await ctx.db.rateTable.findUnique({
        where: {
          cet: input.query,
        },
      });
      return rate ?? null;
    }),
  // !important, take caution before editing
  // The main functionality of the app, most used API
  // search for rates based on either name or cet search query
  // Utilize cache in prodution, to reduce database calls, since results are mostly the same everytime
  searchRate: publicProcedure
    .input(
      z.object({
        query: z.string(),
        limit: z.number().int().default(10).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const rates = await ctx.db.rateTable.findMany({
        // cacheStrategy: {
        //   ttl: 200,
        // },
        //TODO use Prisma accelerate to activate caching https://www.prisma.io/docs/accelerate/getting-started
        take: input.limit,
        // skip: (input.limit * input.page) - input.limit,
        where: {
          OR: [
            { cet: { contains: input.query } },
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
