"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import SearchInput from "../_components/searchInput";
import { ChevronRightCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "~/components/ui/skeleton";

export default function RatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {data:rates, isFetched, isLoading} = api.rates.searchRate.useQuery({
    query: searchParams.get("q") ?? "",
    limit: 12,
  });
  const navigateToDetails = (cet: string) => {
    router.push(`/rate/${cet}`);
  };
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-start gap-10 ">
      {/* Use Skeleton to simulate loading of data */}
      <SearchInput
        className="absolute top-24"
        intialText={searchParams.get("q") ?? ""}
      />
      {/* Text to show, when no result is found */}
      {(!rates || rates.length < 1) && isFetched && <div>No results found</div>}

      {/* Loading animation using skeletons */}
      {isLoading && (
        <>
          <Skeleton className="flex h-12 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
          <Skeleton className="flex h-12 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
          <Skeleton className="flex h-12 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
          <Skeleton className="flex h-12 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
        </>
      )}

      {rates && (
        <h2 className="text-lg font-bold">
          Showing {rates.length} result{rates.length > 1 ? "s" : ""}
        </h2>
      )}

      {rates?.map((rate, index) => (
        <motion.div
          key={rate.cet}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex h-12 w-3/5 cursor-pointer items-center justify-between rounded-lg border border-2 bg-white px-4"
          onClick={() => navigateToDetails(rate.cet)}
        >
          <div>
            {rate.cet} {rate.desc} {rate.duty}%
          </div>
          <div>
            <ChevronRightCircle size="25" className="" />
          </div>
        </motion.div>
      ))}
    </main>
  );
}
