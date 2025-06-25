import BreadcrumbNav from "@/components/BreadcrumbNav";
import { ChartBarMultiple } from "@/components/charts/chart-bar-multiple";
import { ChartRadialDelivered } from "@/components/charts/chart-radial-delivered";
import { ChartRadialRebounds } from "@/components/charts/chart-radial-rebounds";
import { ChartRadialTotal } from "@/components/charts/chart-radial-total";
import { SectionCards } from "@/components/charts/chart-section-cards";
import { ChartPercentageMetrics } from "@/components/charts/chart-percentage-metrics";
import StatisticsFilterBar from "@/components/StatisticsFilterBar";

export default function Statistics() {
  return (
    <>
      <BreadcrumbNav />

      <div className="p-6">
        <StatisticsFilterBar />
      </div>

      <div className="p-6 grid gap-4">
        {/* Métricas de porcentajes */}
        <div className="grid grid-cols-4 gap-4">
          <ChartPercentageMetrics />
        </div>

        {/* Gráficos radiales */}
        <div className="grid grid-cols-3 gap-4">
          <ChartRadialDelivered />
          <ChartRadialRebounds />
          <ChartRadialTotal />
        </div>

        {/* Gráfico de barras múltiples */}
        <div className="grid grid-cols-1 gap-4">
          <ChartBarMultiple />
        </div>

        {/* Tarjetas de resumen */}
        <div>
          <SectionCards />
        </div>
      </div>
    </>
  );
}