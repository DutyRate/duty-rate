import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const logisticsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
     z.object({ name: z.string().min(1) , 
          location: z.string().min(1) ,
          desc: z.string().min(1) ,
          img: z.string().min(1) ,
          url: z.string().url(),
     }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          location: input.location,
          desc: input.desc,
          img: input.img,
          url: input.url,
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
