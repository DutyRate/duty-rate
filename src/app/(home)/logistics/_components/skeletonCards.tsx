"use client";
import { Skeleton } from "~/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <section className="grid grid-cols-4 gap-8">
      <div className="flex h-max w-60 cursor-pointer flex-col items-start justify-center gap-4 rounded-lg p-4">
        <Skeleton className="flex h-48 w-full cursor-pointer rounded-lg bg-black/10" />
        <Skeleton className="flex h-5 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
        <Skeleton className="flex h-5 w-4/5 cursor-pointer rounded-lg bg-black/10 px-4" />
      </div>

      <div className="flex h-max w-60 cursor-pointer flex-col items-start justify-center gap-4 rounded-lg p-4">
        <Skeleton className="flex h-48 w-full cursor-pointer rounded-lg bg-black/10" />
        <Skeleton className="flex h-5 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
        <Skeleton className="flex h-5 w-4/5 cursor-pointer rounded-lg bg-black/10 px-4" />
      </div>

      <div className="flex h-max w-60 cursor-pointer flex-col items-start justify-center gap-4 rounded-lg p-4">
        <Skeleton className="flex h-48 w-full cursor-pointer rounded-lg bg-black/10" />
        <Skeleton className="flex h-5 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
        <Skeleton className="flex h-5 w-4/5 cursor-pointer rounded-lg bg-black/10 px-4" />
      </div>

      <div className="flex h-max w-60 cursor-pointer flex-col items-start justify-center gap-4 rounded-lg p-4">
        <Skeleton className="flex h-48 w-full cursor-pointer rounded-lg bg-black/10" />
        <Skeleton className="flex h-5 w-3/5 cursor-pointer rounded-lg bg-black/10 px-4" />
        <Skeleton className="flex h-5 w-4/5 cursor-pointer rounded-lg bg-black/10 px-4" />
      </div>
    </section>
  );
}
