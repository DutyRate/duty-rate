import { Warehouse } from "lucide-react";


export default function WarehousePage() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center gap-10 bg-[#F3EAE5]/50">
      <h2 className="flex items-center justify-center gap-4 text-center text-[18px] font-bold">
        <Warehouse className="h-5 w-5" /> Bonded Warehouses will be added soon...
      </h2>
    </main>
  );
}
