"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    mes: 'Ene',
    entregados: 4200,
    rebotes: 420,
    aperturas: 3100,
    clics: 650
  },
  {
    mes: 'Feb',
    entregados: 3800,
    rebotes: 380,
    aperturas: 2850,
    clics: 580
  },
  {
    mes: 'Mar',
    entregados: 5100,
    rebotes: 510,
    aperturas: 3750,
    clics: 780
  },
  {
    mes: 'Abr',
    entregados: 4600,
    rebotes: 460,
    aperturas: 3350,
    clics: 690
  },
  {
    mes: 'May',
    entregados: 4400,
    rebotes: 440,
    aperturas: 3200,
    clics: 680
  },
  {
    mes: 'Jun',
    entregados: 4800,
    rebotes: 480,
    aperturas: 3500,
    clics: 720
  }
];

export function ChartBarMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolución Mensual de Métricas</CardTitle>
        <CardDescription>
          Comparación de entregados, rebotes, aperturas y clics por mes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => {
                const labels: { [key: string]: string } = {
                  entregados: 'Entregados',
                  rebotes: 'Rebotes',
                  aperturas: 'Aperturas',
                  clics: 'Clics'
                };
                return [value, labels[name as string] || name];
              }}
            />
            <Legend 
              formatter={(value) => {
                const labels: { [key: string]: string } = {
                  entregados: 'Entregados',
                  rebotes: 'Rebotes',
                  aperturas: 'Aperturas',
                  clics: 'Clics'
                };
                return labels[value] || value;
              }}
            />
            <Bar 
              dataKey="entregados" 
              fill="#10b981" 
              name="entregados"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="rebotes" 
              fill="#ef4444" 
              name="rebotes"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="aperturas" 
              fill="#3b82f6" 
              name="aperturas"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="clics" 
              fill="#8b5cf6" 
              name="clics"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}