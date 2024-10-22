
// import { Baumans } from "next/font/local";
import localFont from "next/font/local";
import { api, HydrateClient } from "~/trpc/server";
import NewsBadge from "../_components/news";
import { TextEffect } from "../_motionComponents/text-effect";
import React from "react";
import SearchInput from "./_components/searchInput";


const bauhmaus = localFont({
  src: "./BAUHS93.woff",
  style: "normal",
  weight: "800",
  display: "swap",
});
export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const commands = [
    // { value: "calendar", label: "Calendar" },
    // { value: "search-emoji", label: "Search Emoji" },
    // { value: "calculator", label: "Calculator" },
  ];

  // void api.post.getLatest.prefetch();
  // You can prefetch any important details for the homepage

  return (
    <HydrateClient>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-[#F3EAE5]/50">
        <NewsBadge />
        <div className={`text-[120px] font-bold ${bauhmaus.className}`}>
          <TextEffect per="word" as="h3" preset="slide">
            duty rate
          </TextEffect>
        </div>
        <SearchInput placeholder="Search for a CET Number or the name of item" />
      </main>
    </HydrateClient>
  );
}
