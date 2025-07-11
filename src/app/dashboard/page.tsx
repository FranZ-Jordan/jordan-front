import BreadcrumbNav from "@/components/BreadcrumbNav";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  LucideCalendarCog,
  LucideDatabase,
  LucideArrowDownWideNarrow,
  LucideChartPie,
  LucideChartBar,
  LucideSearch,
  LucideSend,
} from "lucide-react";
import { ChartBarMultiple } from "@/components/charts/chart-bar-multiple";

const sections = [
  {
    title: "Gestiones Principales",
    items: [
      {
        title: "Envíos Masivos",
        description: "Selecciona el canal, elige una plantilla, una lista de contactos y realiza un envío.",
        icon: LucideSend,
        href: "/dashboard/send-email",
      },
      {
        title: "Campañas",
        description: "Planifica y gestiona tus envíos.",
        icon: LucideCalendarCog,
        href: "#",
      },
      {
        title: "Audiencias",
        description: "Carga y gestiona tu listas de base de datos.",
        icon: LucideDatabase,
        href: "/dashboard/audiences",
      },
      {
        title: "Listas",
        description: "Asegura la calidad de tus listas de contactos.",
        icon: FileText,
        href: "#",
      },

    ],
  },
  {
    title: "Resultados",
    items: [
      {
        title: "Resultados de Envíos",
        description: "Obten resultados detallados de tus envíos.",
        icon: LucideChartBar,
        href: "/dashboard/shipping-results",
      },
      {
        title: "Estadístcias",
        description: "Explora mediante gráficas los resultados de tus envíos.",
        icon: LucideChartPie,
        href: "/dashboard/statistics",
      },
      {
        title: "Búsqueda por Registros",
        description: "Busca registros específicos de tus envíos, ya sea por mail o por teléfono.",
        icon: LucideSearch,
        href: "/dashboard/search-by-records",
      },
      {
        title: "Descargas",
        description: "Lista de reportes descargables.",
        icon: LucideArrowDownWideNarrow,
        href: "/reportes",
      },
    ],
  },
];


export default function Segmentacion() {
  return (
    <>
      <BreadcrumbNav />

      <div className="p-6 space-y-10">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {section.items.map(({ title, description, icon: Icon, href }, idx) => (
                <Link key={idx} href={href} className="block">
                  <Card className="cursor-pointer hover:shadow-lg transition h-full">
                    <CardContent className="flex flex-col items-center justify-center text-center p-6 space-y-2">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-lg font-medium">{title}</h3>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <ChartBarMultiple />
      </div>

    </>
  );
}