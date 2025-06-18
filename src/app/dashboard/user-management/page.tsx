"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const PERMISOS = [
  "Gestionar Audiencias",
  "Realizar Envíos",
  "Gestionar Plantillas",
  "Módulo de Resultados",
];

export default function AdminUsuariosPage() {
  const [perfil, setPerfil] = useState("usuario");
  const [permisosSeleccionados, setPermisosSeleccionados] = useState<string[]>(
    []
  );

  const handleCheckboxChange = (permiso: string) => {
    setPermisosSeleccionados((prev) =>
      prev.includes(permiso)
        ? prev.filter((p) => p !== permiso)
        : [...prev, permiso]
    );
  };

  const usuarios = [
    {
      nombre: "Ana Martínez",
      email: "ana@example.com",
      perfil: "Administrador",
    },
    {
      nombre: "Luis Gómez",
      email: "luis@example.com",
      perfil: "Usuario",
    },
  ];

  return (

    <>
    <BreadcrumbNav />

        <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna izquierda: Formulario */}
            <Card>
            <CardHeader>
                <CardTitle>Crear nuevo usuario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div>
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" placeholder="Nombre completo" />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                </div>
                <div>
                    <Label>Perfil</Label>
                    <Select value={perfil} onValueChange={setPerfil}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona perfil" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="administrador">Administrador</SelectItem>
                        <SelectItem value="usuario">Usuario</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                </div>

                {/* Permisos solo para usuarios */}
                {perfil === "usuario" && (
                <div>
                    <Label className="mb-2 block">Permisos</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PERMISOS.map((permiso) => (
                        <div key={permiso} className="flex items-center space-x-2">
                        <Checkbox
                            id={permiso}
                            checked={permisosSeleccionados.includes(permiso)}
                            onCheckedChange={() => handleCheckboxChange(permiso)}
                        />
                        <Label htmlFor={permiso}>{permiso}</Label>
                        </div>
                    ))}
                    </div>
                </div>
                )}

                <Button className="mt-2">Crear usuario</Button>
            </CardContent>
            </Card>

            {/* Columna derecha: Tabla de usuarios */}
            <Card>
            <CardHeader>
                <CardTitle>Listado de usuarios</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Perfil</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {usuarios.map((usuario, index) => (
                    <TableRow key={index}>
                        <TableCell>{usuario.nombre}</TableCell>
                        <TableCell>{usuario.email}</TableCell>
                        <TableCell>{usuario.perfil}</TableCell>
                        <TableCell className="text-right space-x-2">
                        <Button size="icon" variant="ghost">
                            <Pencil className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Trash2 className="w-4 h-4" />
                        </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
            </Card>
        </div>
        </div>

    </>

  );
}