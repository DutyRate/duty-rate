
import { Baumans } from "next/font/google";
import { api, HydrateClient } from "~/trpc/server";
import NewsBadge from "../_components/news";
import { TextEffect } from "../_motionComponents/text-effect";
import React from "react";
import InputForm from "./_components/inputForm";

const nunito = Baumans({
  weight: "400",
  subsets: ["latin"],
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
        <div className={`text-[100px] font-bold ${nunito.className}`}>
          <TextEffect per="word" as="h3" preset="slide">
            Duty Rate
          </TextEffect>
        </div>
        <InputForm/>
      </main>
    </HydrateClient>
  );
}
