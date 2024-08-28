"use client";
import { useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import SearchInput from "../_components/searchInput";
import { ChevronRightCircle } from "lucide-react";
export default function RatePage() {
  const searchParams = useSearchParams();
  const rates = api.rates.searchRate.useQuery({
    query: searchParams.get("q") ?? "",
    limit: 12,
  });
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-[#F3EAE5]/50">
      {/* Use Skeleton to simulate loading of data */}
      <SearchInput
        className="absolute top-24"
        intialText={searchParams.get("q") ?? ""}
      />
      {rates?.data?.map((rate) => (
        <div className="flex h-12 w-3/5 items-center justify-between rounded-lg border border-2 bg-white px-4">
          <div>{rate.cet} {rate.desc}</div>
          <div>
            <ChevronRightCircle size="25" className="" />
          </div>
        </div>
      ))}
    </main>
  );
}
