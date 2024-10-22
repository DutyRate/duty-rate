

import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const unsplashRouter = createTRPCRouter({
  getImage: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${input.query}&per_page=5&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `${process.env.UNSPLASH_ID} ${process.env.UNSPLASH_ACCESS_KEY}`,
          }),
        },
      );

     if (res.ok) {
          const data = await res.json() as {
            results:[
              {
                description: string,
                urls:{
                  regular: string
                }
              }
            ]
          };
          const images:{desc: string, url:string}[] =[];

          data.results.forEach((element) => {
               images.push({
                    desc: element.description,
                    url: element.urls.regular
               })
          });
          return images ?? null;
     }
      return null;
    }),
});