
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { logisticsRouter } from "./routers/logistics";
import { ratesRouter } from "./routers/rates";
import { unsplashRouter } from "./routers/unsplash";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  logistics: logisticsRouter,
  rates: ratesRouter,
  unsplash: unsplashRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
