"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Clock,
  TrendingUp,
  Users,
  Target
} from "lucide-react";

const summaryData = [
  {
    title: "Total de Campañas",
    value: "24",
    change: "+3",
    changeType: "increase" as const,
    icon: Mail,
    description: "Campañas enviadas este mes"
  },
  {
    title: "Total de Desuscripciones",
    value: "12,847",
    change: "+1,204",
    changeType: "decrese" as const,
    icon: Users,
    description: "Tasa de desuscripciones del 10.3%"
  },
  {
    title: "Tasa de Entrega",
    value: "94.2%",
    change: "+5.1%",
    changeType: "increase" as const,
    icon: Target,
    description: "Tasa entrega campaña"
  },
  {
    title: "Promedio de Aperturas",
    value: "68.5%",
    change: "2.3%",
    changeType: "increase" as const,
    icon: TrendingUp,
    description: "Últimos 30 días"
  }
];


export function SectionCards() {
  return (
    <div className="space-y-6">
      {/* Resumen General */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Resumen General</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryData.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {item.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Badge 
                      variant={item.changeType === 'increase' ? 'default' : 'destructive'}
                      className="text-xs px-1 py-0"
                    >
                      {item.change}
                    </Badge>
                    <span>{item.description}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Métricas Detalladas */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Métricas Detalladas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Entregas Exitosas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">4,400</div>
              <p className="text-xs text-muted-foreground mt-1">
                88% del total de envíos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" />
                Total de Rebotes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">600</div>
              <p className="text-xs text-muted-foreground mt-1">
                12% del total de envíos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                En Procesamiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,200</div>
              <p className="text-xs text-muted-foreground mt-1">
                Pendientes de entrega
              </p>
            </CardContent>
          </Card>

                    <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                En Procesamiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,200</div>
              <p className="text-xs text-muted-foreground mt-1">
                Pendientes de entrega
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}