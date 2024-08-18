import CommandSearch from "~/components/ui/commandSearch";
import { Nunito } from "next/font/google";
import { api, HydrateClient } from "~/trpc/server";
import NewsBadge from "../_components/news";

const nunito = Nunito({
  weight: "variable",
  subsets: ["latin"],
});
export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const commands = [
    { value: "calendar", label: "Calendar" },
    { value: "search-emoji", label: "Search Emoji" },
    { value: "calculator", label: "Calculator" },
  ];

  // void api.post.getLatest.prefetch();
  // You can prefetch any important details for the homepage

  return (
    <HydrateClient>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-[#F3EAE5]/50">
        <NewsBadge />
        <h2 className={`text-[100px] font-bold ${nunito.className}`}>Duty Rate</h2>
        <div className="w-2/5">
          <CommandSearch commands={commands} className="" />
        </div>
      </main>
    </HydrateClient>
  );
}
