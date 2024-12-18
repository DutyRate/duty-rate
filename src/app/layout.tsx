import "~/styles/globals.css";
import {Lexend_Deca} from "next/font/google";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";


export const metadata: Metadata = {
  title: "Duty rate",
  description: "Check the duty rate for your goods",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const lexend_Deca = Lexend_Deca({
  style: "normal",
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  return (
    // bg-[#F3EAE5]
    <html lang="en" className={`${lexend_Deca.className} bg-white`}>
      <body>
        <TRPCReactProvider>
          <Toaster richColors />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
