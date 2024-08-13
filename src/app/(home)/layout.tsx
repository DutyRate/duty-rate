import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import Nav from "../_components/nav";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <section>
      <Nav session={session} />
      {children}
    </section>
  );
}
