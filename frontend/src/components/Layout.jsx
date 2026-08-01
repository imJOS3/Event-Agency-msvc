// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-md p-4 z-10 flex flex-col justify-between">
      {/* Parte superior: navegación */}
      <div>
        <h2 className="text-2xl font-bold mb-6">ERP Eventos</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
          <Link to="/clientes" className="text-gray-700 hover:text-blue-500">Clientes</Link>
          <Link to="/eventos" className="text-gray-700 hover:text-blue-500">Eventos</Link>
          <Link to="/inventario" className="text-gray-700 hover:text-blue-500">Inventario</Link>
          <Link to="/pagos" className="text-gray-700 hover:text-blue-500">Pagos</Link>
          <Link to="/facturacion" className="text-gray-700 hover:text-blue-500">Facturación</Link>
          <Link to="/proveedores" className="text-gray-700 hover:text-blue-500">Proveedores</Link>
          <Link to="/calendario" className="text-gray-700 hover:text-blue-500">Calendario</Link>
        </nav>
      </div>

      {/* Parte inferior: perfil + logout */}
      <div className="flex flex-col gap-2">
        <Link
          to="/perfil"
          className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
        >
          <img
            src="https://i.pravatar.cc/40" // imagen de prueba, puedes cambiarla por la del usuario
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>Perfil</span>
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-red-500">Cerrar sesión</Link>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen ml-64 ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
