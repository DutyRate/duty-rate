import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { getServerAuthSession } from "~/server/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import { Input } from "~/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { headers } from "next/headers";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const isAdmin = session?.user.role == 1;
  if (!session || !isAdmin) redirect('/');
  

  return (
    <section>
      {session && isAdmin && (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">Duty Rate</span>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  <Link
                    href="/admin/dashboard"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      pathname == "/admin/dashboard" && "bg-muted text-primary"
                    }`}
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/logistics"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      pathname == "/admin/logistics" && "bg-muted text-primary"
                    }`}
                  >
                    <Package className="h-4 w-4" />
                    Logitics companies{" "}
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      1
                    </Badge>
                  </Link>
                </nav>
              </div>
              <div className="mt-auto p-8">
                <Button size="sm" asChild className="w-full">
                  <Link href="/">
                    <Home className="mr-4 h-4 w-4" />
                    Go home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Duty Rate</span>
                    </Link>

                    <Link
                      href="/admin/dashboard"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                        pathname == "/admin/dashboard" &&
                        "bg-muted text-primary"
                      }`}
                    >
                      <Home className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <Link
                      href="/admin/logistics"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                        pathname == "/admin/logistics" &&
                        "bg-muted text-primary"
                      }`}
                    >
                      <Package className="h-4 w-4" />
                      Logitics companies{" "}
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        1
                      </Badge>
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <Button size="sm" className="w-full">
                      <Home className="mr-4 h-4 w-4" />
                      Go to home
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            {children}
          </div>
        </div>
      )}
      {!session ||
        (!isAdmin && <div>You are not Permitted to view this page </div>)}
      {/* Ensure user is authenticated before rendering the dashboard */}
      {/* Include shared UI here e.g. a header or sidebar */}
    </section>
  );
}
