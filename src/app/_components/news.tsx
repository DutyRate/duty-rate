import React from "react";
import { Badge } from "~/components/ui/badge";
import { ChevronRight } from "lucide-react";

export default function NewsBadge() {
  return (
    <Badge variant={"outline"} className="text-[10px] text-primary px-2 py-1">
      We just launched our new website, check it out <ChevronRight size={14} />
    </Badge>
  );

}
