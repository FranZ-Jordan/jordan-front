import BreadcrumbNav from "@/components/BreadcrumbNav";
import { ChartBarMultiple } from "@/components/charts/chart-bar-multiple";
import { ChartPieDonut } from "@/components/charts/chart-pie-donut";
import { ChartRadialDelivered } from "@/components/charts/chart-radial-delivered";
import { ChartRadialRebounds } from "@/components/charts/chart-radial-rebounds";
import { ChartRadialTotal } from "@/components/charts/chart-radial-total";
import { SectionCards } from "@/components/charts/chart-section-cards";
import StatisticsFilterBar from "@/components/StatisticsFilterBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Statistics() {
  return (
    <>
      <BreadcrumbNav />

      <div className="p-6">
        <StatisticsFilterBar />
      </div>

      <div className="p-6 grid gap-4">
      <div className="grid grid-cols-3 gap-4">
        <ChartRadialDelivered />
        <ChartRadialRebounds />
        <ChartRadialTotal />

      </div>
        <div className="grid grid-cols-2 gap-4">
          <ChartPieDonut />
          <ChartBarMultiple />
        </div>

        <div>
          <SectionCards />
        </div>
      </div>
    </>
  );
}