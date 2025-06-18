"use client";

import { useState } from "react";
import { MoreHorizontal, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Checkbox } from "@/components/ui/checkbox";

const statusColorMap: Record<string, string> = {
  Completado: "text-green-600",
  Ejecutando: "text-blue-600",
  Pendiente: "text-yellow-600",
  Programado: "text-purple-600",
  Error: "text-red-600",
};

const mockData = [
  {
    nombre: "Campaña Verano",
    fechaProgramacion: "2025-06-10",
    fechaFinalizacion: "2025-06-11",
    estado: "Completado",
    canal: "Email",
  },
  {
    nombre: "Promo SMS Junio",
    fechaProgramacion: "2025-06-10",
    fechaFinalizacion: "",
    estado: "Ejecutando",
    canal: "SMS",
  },
  {
    nombre: "Encuesta Clientes",
    fechaProgramacion: "2025-06-12",
    fechaFinalizacion: "",
    estado: "Programado",
    canal: "WhatsApp",
  },
];

export default function TablaEnvios() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (


<>
<BreadcrumbNav />

    <div className="p-4 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Input
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Buscar</Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Buscar por fecha</Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
          </PopoverContent>
        </Popover>

        <Button variant="secondary">Comparar Envíos</Button>
        <Button variant="ghost" size="icon">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-4">
              <Checkbox aria-label="Seleccionar todos" />
            </TableHead>
            <TableHead>Nombre del Envío</TableHead>
            <TableHead>Fecha de Programación</TableHead>
            <TableHead>Fecha de Finalización</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Canal</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox aria-label={`Seleccionar envío ${index + 1}`} />
              </TableCell>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>{item.fechaProgramacion}</TableCell>
              <TableCell>{item.fechaFinalizacion || "-"}</TableCell>
              <TableCell>
                <span className={cn("font-medium", statusColorMap[item.estado])}>
                  {item.estado}
                </span>
              </TableCell>
              <TableCell>{item.canal}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Más detalles</DropdownMenuItem>
                    <DropdownMenuItem>Lanzar Nuevamente</DropdownMenuItem>
                    <DropdownMenuItem>Descargar Reporte</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  );
}

