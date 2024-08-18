"use client";
import { useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
export default function RatePage() {
  const searchParams = useSearchParams();
  const rates = api.rates.searchRate.useQuery({
    query: searchParams.get("q") ?? "",
    limit: 12,
  })
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-[#F3EAE5]/50">
      <h2>{JSON.stringify(rates.data)}</h2>
      {/* Use Skeleton to simulate loading of data */}
    </main>
  );
}
