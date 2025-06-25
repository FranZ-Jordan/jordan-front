"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Mail, MousePointer } from "lucide-react";

const metrics = [
  {
    title: "Tasa de Entrega",
    value: 88.5,
    icon: Mail,
    color: "text-green-600",
    bgColor: "bg-green-50",
    trend: "up"
  },
  {
    title: "Tasa de Rebote",
    value: 8.5,
    icon: TrendingDown,
    color: "text-red-600",
    bgColor: "bg-red-50",
    trend: "down"
  },
  {
    title: "Tasa de Aperturas",
    value: 72.7,
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    trend: "up"
  },
  {
    title: "Tasa de Clics",
    value: 15.4,
    icon: MousePointer,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    trend: "up"
  }
];

export function ChartPercentageMetrics() {
  return (
    <>
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <div className={`${metric.bgColor} p-2 rounded-full`}>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl font-bold">{metric.value}%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendIcon className={`h-4 w-4 mr-1 ${
                    metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`} />
                  <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {metric.trend === 'up' ? '+2.1%' : '-0.5%'}
                  </span>
                </div>
              </div>
              <Progress 
                value={metric.value} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-2">
                vs mes anterior
              </p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}