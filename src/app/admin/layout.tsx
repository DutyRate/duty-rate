import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

import { headers } from "next/headers";
import AdminNavBar from "./_components/navbar";

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
       <AdminNavBar>{children}</AdminNavBar>
      )}
      {!session ||
        (!isAdmin && <div>You are not Permitted to view this page </div>)}
      {/* Ensure user is authenticated before rendering the dashboard */}
      {/* Include shared UI here e.g. a header or sidebar */}
    </section>
  );
}
