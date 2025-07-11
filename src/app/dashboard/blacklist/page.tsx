"use client";

import React, { useState } from 'react';
import { Search, Trash2 } from 'lucide-react';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const BlacklistComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  type Registro = {
    id: string;
    mail: string;
    telefono: string;
    nombreEnvio: string;
    canal: string;
    nombreTemplate: string;
    fechaEnvio: string;
    fechaDesuscripcion: string;
  };
  
  const [registroToDelete, setRegistroToDelete] = useState<Registro | null>(null);

  // Datos de ejemplo para la blacklist
  const [registrosBlacklist, setRegistrosBlacklist] = useState([
    {
      id: 'BL001',
      mail: 'usuario1@example.com',
      telefono: '+56912345678',
      nombreEnvio: 'Campaña Verano 2024',
      canal: 'Email',
      nombreTemplate: 'Template Promocional',
      fechaEnvio: '2024-03-15T10:30:00',
      fechaDesuscripcion: '2024-03-16T14:22:00'
    },
    {
      id: 'BL002',
      mail: 'cliente2@gmail.com',
      telefono: '+56987654321',
      nombreEnvio: 'Newsletter Marzo',
      canal: 'SMS',
      nombreTemplate: 'Template Newsletter',
      fechaEnvio: '2024-03-10T09:15:00',
      fechaDesuscripcion: '2024-03-12T16:45:00'
    },
    {
      id: 'BL003',
      mail: 'test@company.com',
      telefono: '+56911223344',
      nombreEnvio: 'Oferta Especial',
      canal: 'WhatsApp',
      nombreTemplate: 'Template Oferta',
      fechaEnvio: '2024-02-28T11:00:00',
      fechaDesuscripcion: '2024-03-01T08:30:00'
    },
    {
      id: 'BL004',
      mail: 'maria.rodriguez@email.com',
      telefono: '+56944556677',
      nombreEnvio: 'Bienvenida Nuevos Clientes',
      canal: 'Email',
      nombreTemplate: 'Template Bienvenida',
      fechaEnvio: '2024-04-02T15:20:00',
      fechaDesuscripcion: '2024-04-03T12:10:00'
    },
    {
      id: 'BL005',
      mail: 'carlos.lopez@domain.com',
      telefono: '+56933445566',
      nombreEnvio: 'Recordatorio Pago',
      canal: 'SMS',
      nombreTemplate: 'Template Recordatorio',
      fechaEnvio: '2024-03-20T13:45:00',
      fechaDesuscripcion: '2024-03-21T09:15:00'
    }
  ]);

  // Filtrar registros por término de búsqueda
  const registrosFiltrados = registrosBlacklist.filter(registro =>
    registro.mail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    registro.telefono.includes(searchTerm) ||
    registro.nombreEnvio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    registro.canal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    registro.nombreTemplate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    registro.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Formatear fecha y hora
  const formatearFecha = (fechaISO: string) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Handlers para acciones
  const handleEliminarRegistro = (registro: Registro) => {
    setRegistroToDelete(registro);
    setDeleteDialogOpen(true);
  };

  const confirmarEliminacion = () => {
    if (registroToDelete) {
      setRegistrosBlacklist(prev => prev.filter(r => r.id !== registroToDelete.id));
      setDeleteDialogOpen(false);
      setRegistroToDelete(null);
    }
  };

  // Obtener color del badge según el canal
  const getColorCanal = (canal: string) => {
    switch (canal.toLowerCase()) {
      case 'email':
        return 'bg-blue-100 text-blue-800';
      case 'sms':
        return 'bg-green-100 text-green-800';
      case 'whatsapp':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
    <BreadcrumbNav/>
    <div className="w-full space-y-6 p-6">
      {/* Header con título y buscador */}
      <div className="flex flex-col space-y-4">
        {/* <h1 className="text-2xl font-bold text-gray-900">Registros de Blacklist</h1> */}
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar por email, teléfono, nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Contador de registros */}
      <div className="text-sm text-gray-600">
        {registrosFiltrados.length} de {registrosBlacklist.length} registros
      </div>

      {/* Tabla de registros */}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teléfono
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre del Envío
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Canal
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Template
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Envío
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Desuscripción
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {registrosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-6 py-8 text-center text-gray-500">
                    {searchTerm ? 'No se encontraron registros que coincidan con la búsqueda' : 'No hay registros en la blacklist'}
                  </td>
                </tr>
              ) : (
                registrosFiltrados.map((registro) => (
                  <tr key={registro.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {registro.id}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="truncate" title={registro.mail}>
                        {registro.mail}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {registro.telefono}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="truncate" title={registro.nombreEnvio}>
                        {registro.nombreEnvio}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getColorCanal(registro.canal)}`}>
                        {registro.canal}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="truncate" title={registro.nombreTemplate}>
                        {registro.nombreTemplate}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatearFecha(registro.fechaEnvio)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatearFecha(registro.fechaDesuscripcion)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => handleEliminarRegistro(registro)}
                        className="inline-flex items-center p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        title="Eliminar registro"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de confirmación para eliminar */}
      {deleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            
            <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
              ¿Eliminar registro de blacklist?
            </h3>
            
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600 mb-1">
                <strong>ID:</strong> {registroToDelete?.id}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Email:</strong> {registroToDelete?.mail}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Teléfono:</strong> {registroToDelete?.telefono}
              </p>
            </div>
            
            <p className="text-sm text-gray-500 text-center mb-6">
              Esta acción eliminará el registro de la blacklist y permitirá que este contacto vuelva a recibir comunicaciones.
            </p>
            
            <div className="flex gap-3 justify-center">
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

export default BlacklistComponent;