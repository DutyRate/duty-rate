"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import SearchInput from "../_components/searchInput";

import SkeletonCard from "./_components/skeletonCards";
import Logistics from "./_components/logisticsCard";

export default function RatePage() {
  const searchParams = useSearchParams();
  const {
    data: logistics,
    isFetched,
    isLoading,
  } = api.logistics.getLatest.useQuery({});

  
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-start gap-10 bg-[#F3EAE5]/50 pt-48">
      {/* Use Skeleton to simulate loading of data */}
      <SearchInput
        className="absolute top-24"
        intialText={searchParams.get("q") ?? ""}
        placeholder="Search for logistic companies"
      />
      {/* Text to show, when no result is found */}
      {(!logistics || logistics.length < 1) && isFetched && (
        <div>No results found</div>
      )}

      {/* Loading animation using skeletons */}
      {isLoading && <SkeletonCard />}

      {logistics && (
        <>
          <h2 className="text-lg font-bold">
            Showing {logistics.length} compan{logistics.length > 1 ? "ies" : "y"}
          </h2>
          <Logistics logistics={logistics}/>
        </>
      )}
    </main>
  );
}
