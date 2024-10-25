"use client";

import { Card } from "~/components/ui/card";
import { api } from "~/trpc/react";
import { ChevronLeft, Copy, Share2 } from "lucide-react";
// import PDFViewer from "./_components/pdfViewer";
import { Badge } from "~/components/ui/badge";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import DotsLoader from "~/components/ui/dot-loader";

export default function DetailRatePage({
  params,
}: {
  params: { cet: string };
}) {
  const { data: rate, isLoading } = api.rates.getRate.useQuery({
    query: params.cet,
  });

  const { data: images } = api.unsplash.getImage.useQuery(
    {
      query: "sugar powder", //TODO: Change this to the content of description, extract main item
    },
    {
      enabled: !!rate, // This ensures the query only runs when rate is available
    }
  );

  const router = useRouter()
  const goBack = () =>{
     router.back();
  }
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-10">
      {!rate && !isLoading && (
        <div className="-mt-36 flex flex-col items-center justify-center border-0 bg-transparent">
          <div>
            Unfortunalty, this item cannot be found, please check your search
            input.
          </div>
        </div>
      )}

      {isLoading && (
        <div className="-mt-36 flex flex-col items-center justify-center border-0 bg-transparent">
          <DotsLoader />
        </div>
      )}

      {rate && (
        <Card className="relative flex h-max min-h-96 w-2/3 flex-col items-center justify-center rounded-lg border border-2 bg-transparent pt-6">
          <section className="top-4 mb-6 flex w-full items-center justify-between px-4">
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
                  <Share2 className="h-5 w-5 cursor-pointer" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  Copy Link <Copy className="ml-2 h-5 w-5" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          <div className="flex w-full items-center justify-between gap-4 px-4">
            <section className="relative">
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
                {rate.vat > 0 && <li>Value Added Tax: {rate.vat}%</li>}
                {rate.lvy > 0 && <li>Levy: {rate.lvy}%</li>}
                {rate.exc > 0 && <li>EXC: {rate.exc}</li>}
              </ul>
              {/* Show PDF of page */}
            </section>

            <section className="relative flex h-64 w-2/5 flex-row rounded-lg">
              {images && (
                <Image
                  src={images[1]?.url ?? ""}
                  fill
                  alt={images[1]?.desc ?? ""}
                  className="rounded-lg object-cover"
                />
              )}
            </section>
          </div>

          {/* <PDFViewer initialPage={rate.pdf}/> */}
          <div className="mt-24 w-full">
            <p className="px-4 text-center text-lg text-slate-600">
              More details are contained in the pdf document below
            </p>
            <iframe
              src={`/CET-rules.pdf#page=${rate.pdf}&toolbar=0&zoom=130`}
              width="100vw"
              height="100%"
              className="relative mt-10 h-[700px] w-full rounded-lg px-4"
            ></iframe>
          </div>
        </Card>
      )}
    </main>
  );
}
