import React from "react";
// import { Badge } from "~/components/ui/bdge";
import { ChevronRight } from "lucide-react";

export default function NewsBadge() {
  return (
    <div className="flex justify-between text-[10px] items-center text-nowrap w-[300px] border rounded-[20px] border-1 border-black px-2 py-1">
      <div>We just launched our new website, check it out.</div>
      <ChevronRight size={12} />
    </div>
  );
  // <Badge>
  //   Badge-
  // </Badge>
}
