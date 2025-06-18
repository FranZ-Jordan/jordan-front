import BreadcrumbNav from "@/components/BreadcrumbNav";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  FileText,
  LucideMail,
  LucideMessageSquare,
  LucidePhoneCall,
  LucideCalendarCog,
  LucideDatabase,
  LucideCalendarDays,
  LucideArrowDownWideNarrow,
  LucideChartPie,
  LucideChartBar,
  LucideSearch,
} from "lucide-react";

const sections = [
  {
    title: "Envíos",
    items: [
      {
        title: "Email",
        description: "Carga tu lista, selecciona tu plantilla y envía tus correos.",
        icon: LucideMail,
        href: "/dashboard/send-email",
      },
      {
        title: "SMS",
        description: "Carga tu lista, selecciona tu plantilla y comienza a enviar tus SMS.",
        icon: LucideMessageSquare,
        href: "/usuarios",
      },
      {
        title: "VMS",
        description: "Envía mensajes de voz. Simplemente elige tu plantilla y selecciona tu fuente de datos.",
        icon: LucidePhoneCall,
        href: "/configuracion",
      },
      {
        title: "Campañas",
        description: "Planifica y gestiona tus envíos.",
        icon: LucideCalendarCog,
        href: "/reportes",
      },
    ],
  },
  {
    title: "Audiencias",
    items: [
      {
        title: "Audiencias",
        description: "Carga y gestiona tu listas de base de datos.",
        icon: LucideDatabase,
        href: "/dashboard/audiences",
      },
      {
        title: "Segmentación",
        description: "Crea diferentes segmentos de tus audiencias",
        icon: Users,
        href: "/usuarios",
      },
      {
        title: "Historial de Cargas",
        description: "Explora el acumulado de cargas de tus audiencias.",
        icon: LucideCalendarDays,
        href: "/configuracion",
      },
      {
        title: "Gestión de Listas",
        description: "Asegura la calidad de tus listas de contactos.",
        icon: FileText,
        href: "/reportes",
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
    </>
  );
}