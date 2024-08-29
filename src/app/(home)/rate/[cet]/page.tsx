"use client";

import { Card } from "~/components/ui/card";
import { api } from "~/trpc/react";
import { ChevronLeft, ChevronRightCircle, Copy, Share2 } from "lucide-react";
import PDFViewer from "./_components/pdfViewer";
import { Badge } from "~/components/ui/badge";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";


export default function DetailRatePage({
  params,
}: {
  params: { cet: string };
}) {
  const { data: rate, isLoading } = api.rates.getRate.useQuery({
    query: params.cet,
  });
  const router = useRouter()
  const goBack = () =>{
     router.back();
  }
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-[#F3EAE5]/50">
      {!rate && !isLoading && (
        <Card className="flex h-max min-h-96 w-2/3 flex-col items-center justify-center rounded-lg border border-2 bg-transparent">
          {/* Display an error message, if rate cannot be found */}
          <div>
            Unfortunalty, this item cannot be found, please check your search
            input.
          </div>
        </Card>
      )}
      {rate && (
        <Card className="relative flex h-max min-h-96 w-2/3 flex-col items-center justify-center rounded-lg border border-2 bg-transparent">
          <section className="absolute top-4 flex w-full items-center justify-between px-4">
            <ChevronLeft
              size={30}
              className="cursor-pointer"
              onClick={goBack}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full outline-none"
                >
                  <Share2
                    className="cursor-pointer h-5 w-5"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Copy Link <Copy className="ml-2 h-5 w-5"/></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <div className="relative">
            <div className="flex gap-4">
              <h2>HSCode {rate.cet}</h2>
              <Badge>{rate.su}</Badge>
            </div>

            <h2 className="mt-6 text-[24px]">{rate.desc}</h2>
            {rate.duty && (
              <h2 className="text-[22px]">Duty rate: {rate.duty}%</h2>
            )}

            <h3 className="mt-12 text-[20px]">
              The additional cost added on this item is listed below:
            </h3>

            <ul className="text-[18px]">
              {rate.vat && <li>Value Added Tax: {rate.vat}%</li>}
              {rate.lvy && <li>Levy: {rate.lvy}%</li>}
              {rate.exc && <li>EXC: {rate.exc}</li>}
            </ul>
            <PDFViewer />
          </div>
        </Card>
      )}
    </main>
  );
}
