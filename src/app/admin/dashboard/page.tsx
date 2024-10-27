import { ChartNoAxesCombined, Forklift, SquareUser, Warehouse } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";
import { RatesChart } from "../_components/chart";
export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div
        className="flex h-full flex-col items-start justify-between gap-16 rounded-lg border border-dashed p-8 shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex w-full gap-8">
          <Card className="w-1/4">
            <CardHeader>
              <CardDescription className="flex w-full justify-between">
                Total Rates
                <ChartNoAxesCombined className="h-4 w-4 opacity-50" />
              </CardDescription>
              <CardTitle>20,000</CardTitle>
              <CardDescription className="text-[10px]">
                +2% from last month
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardDescription className="flex w-full justify-between">
                Logistic Companies
                <Forklift className="h-4 w-4 opacity-50" />
              </CardDescription>
              <CardTitle>400</CardTitle>
              <CardDescription className="text-[10px]">
                +50% from last month
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardDescription className="flex w-full justify-between">
                Clearing agents
                <SquareUser className="h-4 w-4 opacity-50" />
              </CardDescription>
              <CardTitle>100</CardTitle>
              <CardDescription className="text-[10px]">
                +20% from last month
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardDescription className="flex w-full justify-between">
                Warehouses
                <Warehouse className="h-4 w-4 opacity-50" />
              </CardDescription>
              <CardTitle>230</CardTitle>
              <CardDescription className="text-[10px]">
                +45% from last month
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="flex w-full flex-1 gap-8">
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle>Rates graph</CardTitle>
              </CardHeader>
            <RatesChart />
          </Card>
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
              <CardDescription>
                500 searches today
              </CardDescription>
              <CardContent>

              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}
