"use client";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Download, 
  Users,
  MoreHorizontal, 
  LucidePlus
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const AudienciasListComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [audienciaToDelete, setAudienciaToDelete] = useState<{
    id: number;
    nombre: string;
    fechaCreacion: string;
    cantidadRegistros: number;
  } | null>(null);

  // Datos de ejemplo
  const [audiencias, setAudiencias] = useState([
    {
      id: 1,
      nombre: 'Audiencia Premium',
      fechaCreacion: '2024-01-15',
      cantidadRegistros: 15420
    },
    {
      id: 2,
      nombre: 'Clientes Frecuentes',
      fechaCreacion: '2024-02-20',
      cantidadRegistros: 8750
    },
    {
      id: 3,
      nombre: 'Nuevos Usuarios',
      fechaCreacion: '2024-03-10',
      cantidadRegistros: 23100
    },
    {
      id: 4,
      nombre: 'Segmento Geográfico Norte',
      fechaCreacion: '2024-03-25',
      cantidadRegistros: 12300
    },
    {
      id: 5,
      nombre: 'Audiencia Millennials',
      fechaCreacion: '2024-04-05',
      cantidadRegistros: 18900
    }
  ]);

  // Filtrar audiencias por término de búsqueda
  const audienciasFiltradas = audiencias.filter(audiencia =>
    audiencia.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Formatear fecha
  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Formatear cantidad de registros
  const formatearCantidad = (cantidad: number) => {
    return cantidad.toLocaleString('es-ES');
  };

  // Handlers para acciones
  const handleCrearAudiencia = () => {
    console.log('Crear nueva audiencia');
  };

  const handleEditarAudiencia = (id: number) => {
    console.log('Editar audiencia:', id);
  };

  const handleEliminarAudiencia = (audiencia: { id: number; nombre: string; fechaCreacion: string; cantidadRegistros: number; }) => {
    setAudienciaToDelete(audiencia);
    setDeleteDialogOpen(true);
  };

  const confirmarEliminacion = () => {
    if (audienciaToDelete) {
      setAudiencias(prev => prev.filter(a => a.id !== audienciaToDelete.id));
      setDeleteDialogOpen(false);
      setAudienciaToDelete(null);
    }
  };

  const handleExportarAudiencia = (id: number) => {
    console.log('Exportar audiencia:', id);
  };

  const handleSegmentacionesAsociadas = (id: number) => {
    console.log('Ver segmentaciones asociadas:', id);
  };

  return (
    <>
    <BreadcrumbNav/>
    <div className="w-full space-y-6 p-6">
      {/* Header con buscador y botón crear */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar audiencias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <Button onClick={handleCrearAudiencia}> <LucidePlus/> Crear Audiencia </Button>
      </div>

      {/* Tabla de audiencias */}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre de la Audiencia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de Creación
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cantidad de Registros
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {audienciasFiltradas.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  {searchTerm ? 'No se encontraron audiencias' : 'No hay audiencias disponibles'}
                </td>
              </tr>
            ) : (
              audienciasFiltradas.map((audiencia) => (
                <tr key={audiencia.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {audiencia.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatearFecha(audiencia.fechaCreacion)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatearCantidad(audiencia.cantidadRegistros)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      {/* Botones de acción */}
                      <button
                        onClick={() => handleSegmentacionesAsociadas(audiencia.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                      >
                        <Users className="h-3 w-3" />
                        <span className="hidden sm:inline">Segmentaciones</span>
                      </button>
                      <button
                        onClick={() => handleExportarAudiencia(audiencia.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                      >
                        <Download className="h-3 w-3" />
                        <span className="hidden sm:inline">Exportar</span>
                      </button>
                      <button
                        onClick={() => handleEditarAudiencia(audiencia.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                      >
                        <Edit className="h-3 w-3" />
                        <span className="hidden sm:inline">Editar</span>
                      </button>
                      <button
                        onClick={() => handleEliminarAudiencia(audiencia)}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-red-700 bg-white border border-red-300 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                      >
                        <Trash2 className="h-3 w-3" />
                        <span className="hidden sm:inline">Eliminar</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de confirmación para eliminar */}
      {deleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              ¿Estás seguro?
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Esta acción no se puede deshacer. Se eliminará permanentemente la audiencia "{audienciaToDelete?.nombre}" y todos sus datos asociados.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteDialogOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarEliminacion}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AudienciasListComponent;