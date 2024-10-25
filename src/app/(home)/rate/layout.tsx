
export default async function RateLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-[#F3EAE5]/50 pt-36">{children}</section>;
}
