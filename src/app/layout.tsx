import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";


export const metadata: Metadata = {
  title: "Duty rate",
  description: "Check the duty rate for your goods",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  return (
    // bg-[#F3EAE5]
    <html lang="en" className={`${GeistSans.variable} bg-white`}>
      <body>
        <TRPCReactProvider>
          <Toaster richColors />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
