import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import CalendarioEventos from "./pages/CalendarioEventos";
import Inventario from "./pages/Inventario";
import Proveedores from "./pages/Proveedores";
import Facturacion from "./pages/Facturacion";
import Pagos from "./pages/Pagos";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (

      <Routes>
        {/* Página de Login */}
        <Route path="/login" element={<Login />} />
        
        <Route path="/eventos" element={<Eventos />} />

        {/* Página de Registro */}
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Página de Dashboard */}
        
        {/* Página de Clientes */}
        <Route path="/clientes" element={<Clientes />} />
        
        {/* Página del Calendario de Eventos */}
        <Route path="/calendario" element={<CalendarioEventos />} />
        
        {/* Página de Inventario */}
        <Route path="/inventario" element={<Inventario />} />
        
        {/* Página de Proveedores */}
        <Route path="/proveedores" element={<Proveedores />} />
        
        {/* Página de Facturación */}
        <Route path="/facturacion" element={<Facturacion />} />
        
        {/* Página de Pagos */}
        <Route path="/pagos" element={<Pagos />} />

        <Route path="*" element={<NotFound />} />
        
        <Route path="/" element={<Login />} />
 
      </Routes>

  );
}
