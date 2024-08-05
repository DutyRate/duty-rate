"use client";

import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Icons
import { siFacebook } from "simple-icons";
import { MobileNav } from "./mobileNav";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <NavigationMenu className="fixed inset-x-0 top-0 z-50 w-screen bg-transparent">
        <NavigationMenuList className="flex h-14 w-screen items-center justify-between p-4">
          <Link href="/" className="flex items-center" prefetch={false}>
            <div className="flex items-center justify-start gap-4">
              <Image src="/icon.png" width={30} height={30} alt="logo" />
              <h1 className="text-xl font-medium text-black">SEMRA</h1>
            </div>
            <span className="sr-only">Semra home</span>
          </Link>

          <div className="hidden gap-4 md:flex">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/about" && "text-semraGreen"
                  }`}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/events" && "text-semraGreen"
                  }`}
                >
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/contact" && "text-semraGreen"
                  } text-base`} //bg-[#F5F5F5]
                >
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>

          <div className="flex gap-4 md:hidden">
            <MobileNav />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
