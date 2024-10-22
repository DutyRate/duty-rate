"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { MobileNav } from "./mobileNav";

import { type Session } from "next-auth";
import { CircleUserIcon, Container, ForkliftIcon, SquareUserRound, Warehouse } from "lucide-react";

export default function Nav({session}:{session:Session | null}) {
  const pathname = usePathname();
  return (
    <>
      <NavigationMenu className="fixed inset-x-0 top-0 z-50 w-screen bg-transparent">
        <NavigationMenuList className="flex h-14 w-screen items-center justify-between p-12">
          <Link href="/" className="flex items-center" prefetch={false}>
            <div className="flex items-center justify-start gap-4">
              <Image src="/icon.png" width={30} height={30} alt="logo" />
              <h1 className="text-xl font-medium text-black">Duty Rate</h1>
            </div>
            <span className="sr-only">Duty rate</span>
          </Link>

          <div className="hidden gap-4 md:flex">
            <NavigationMenuItem>
              {session ? (
                <Link href="/admin/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} border border-2 border-black/10 bg-transparent ${
                      pathname == "/admin/dashboard" && "text-semraGreen"
                    }`}
                  >
                    <CircleUserIcon size={20} className="mr-2" />
                    {session.user.email}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      pathname == "/login" && "text-semraGreen"
                    }`}
                  >
                    Admin Login
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/logistics" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/logistics" && "text-semraGreen"
                  }`}
                >
                  <ForkliftIcon className="mr-2 h-5 w-5" /> Logistics
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/agents" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/agents" && "text-semraGreen"
                  } text-base`} //bg-[#F5F5F5]
                >
                  <SquareUserRound className="mr-2 h-5 w-5" />
                  Clearing and forwarding agents
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/warehouses" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/warehouses" && "text-semraGreen"
                  } text-base`} //bg-[#F5F5F5]
                >
                  <Warehouse className="mr-2 h-5 w-5" />
                  Bonded warehouses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/port-facilities" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/port-facilities" && "text-semraGreen"
                  } text-base`} //bg-[#F5F5F5]
                >
                  <Container className="mr-2 h-5 w-5" />
                   Port facilities
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
