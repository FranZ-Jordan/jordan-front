"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FilterDialogContent from "./FilterDialogContent";

export default function StatisticsFilterBar() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4 flex-wrap text-sm text-muted-foreground">
        <span><strong>Tipo de Envío:</strong> Ejemplo: Campaña</span>
        <span><strong>Canal:</strong> Ejemplo: Email</span>
        <span><strong>Fecha:</strong> Del 01-06-2025 al 08-06-2025</span>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button >Filtrar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Filtrar estadísticas</DialogTitle>
          </DialogHeader>
          <FilterDialogContent />
        </DialogContent>
      </Dialog>

      <Button variant="outline">Descargar Reporte</Button>
    </div>
  );
}