"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table"
import { Download } from "lucide-react"
import BreadcrumbNav from "@/components/BreadcrumbNav"

type Resultado = {
  producto: string
  email: string
  telefono: string
  direccion: string
  canal: string
  fechaEnvio: string
}

export default function EnviosBusqueda() {
  const [busqueda, setBusqueda] = useState("")
  const [resultados, setResultados] = useState<Resultado[]>([])

  const handleSearchByRecords = async () => {
    // Aquí se conectaría a la API
    const dummyData = [
      {
        producto: "12345",
        email: "cliente@ejemplo.com",
        telefono: "+56912345678",
        direccion: "Calle Falsa 123, Santiago",
        canal: "Email",
        fechaEnvio: "2025-06-10 14:35"
      }
    ]
    setResultados(dummyData)
  }

  const handleDownload = () => {
    // Lógica para descargar en CSV/Excel
    console.log("Descargar reporte")
  }

  return (
    <>
    <BreadcrumbNav />
        <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar por email o teléfono"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
            <Button onClick={handleSearchByRecords}>Buscar</Button>
            <Button variant="outline" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />Descargar Reporte</Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>N° Producto</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Canal</TableCell>
              <TableCell>Fecha Envío</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resultados.length > 0 ? (
              resultados.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.producto}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.telefono}</TableCell>
                  <TableCell>{item.canal}</TableCell>
                  <TableCell>{item.fechaEnvio}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  Sin resultados para la búsqueda
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>   
    </>
  )
}
