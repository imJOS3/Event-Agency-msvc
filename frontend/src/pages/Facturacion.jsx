import { useEffect, useState } from "react";
import { useFacturacionStore } from "../store/useFacturacionStore";
import Layout from "../components/Layout";

const Facturacion = () => {
  const {
    facturas,
    facturaSeleccionada,
    fetchFacturas,
    crearFactura,
    actualizarFactura,
    eliminarFactura,
    setFacturaSeleccionada,
  } = useFacturacionStore();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    fetchFacturas();
  }, []);

  const abrirModalEditar = (factura) => {
    setFacturaSeleccionada(factura);
    setShowEditModal(true);
  };

  const abrirModalVer = (factura) => {
    setFacturaSeleccionada(factura);
    setShowViewModal(true);
  };

  const handleEliminar = async (id) => {
    if (confirm("¿Estás seguro de eliminar esta factura?")) {
      await eliminarFactura(id);
    }
  };

  const handleCrearFactura = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nuevaFactura = {
      cliente: form.cliente.value,
      monto: form.monto.value,
      fecha: form.fecha.value,
      estado: form.estado.value,
    };
    await crearFactura(nuevaFactura);
    setShowCreateModal(false);
    form.reset();
  };

  const handleEditarFactura = async (e) => {
    e.preventDefault();
    const form = e.target;
    const actualizada = {
      ...facturaSeleccionada,
      cliente: form.cliente.value,
      monto: form.monto.value,
      fecha: form.fecha.value,
      estado: form.estado.value,
    };
    await actualizarFactura(actualizada);
    setShowEditModal(false);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Facturación</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Nueva Factura
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Cliente</th>
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {facturas.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No hay facturas registradas.
                </td>
              </tr>
            ) : (
              facturas.map((factura) => (
                <tr key={factura.id} className="border-t">
                  <td className="px-4 py-2">{factura.cliente}</td>
                  <td className="px-4 py-2">${factura.monto}</td>
                  <td className="px-4 py-2">{factura.fecha}</td>
                  <td className="px-4 py-2 capitalize">{factura.estado}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => abrirModalVer(factura)}
                      className="text-blue-600 hover:underline"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => abrirModalEditar(factura)}
                      className="text-yellow-600 hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(factura.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Crear */}
      {showCreateModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-2">Nueva Factura</h2>
            <form onSubmit={handleCrearFactura}>
              <input type="text" name="cliente" placeholder="Cliente" required />
              <input type="number" name="monto" placeholder="Monto" required />
              <input type="date" name="fecha" required />
              <select name="estado" required>
                <option value="">Selecciona estado</option>
                <option value="pendiente">Pendiente</option>
                <option value="pagado">Pagado</option>
                <option value="vencido">Vencido</option>
              </select>
              <div className="mt-4 flex justify-end space-x-2">
                <button type="submit" className="btn btn-primary">Guardar</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowCreateModal(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Ver */}
      {showViewModal && facturaSeleccionada && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-2">Detalle de Factura</h2>
            <p><strong>Cliente:</strong> {facturaSeleccionada.cliente}</p>
            <p><strong>Monto:</strong> ${facturaSeleccionada.monto}</p>
            <p><strong>Fecha:</strong> {facturaSeleccionada.fecha}</p>
            <p><strong>Estado:</strong> {facturaSeleccionada.estado}</p>
            <div className="mt-4 text-right">
              <button className="btn btn-secondary" onClick={() => setShowViewModal(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Editar */}
      {showEditModal && facturaSeleccionada && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-2">Editar Factura</h2>
            <form onSubmit={handleEditarFactura}>
              <input type="text" name="cliente" defaultValue={facturaSeleccionada.cliente} required />
              <input type="number" name="monto" defaultValue={facturaSeleccionada.monto} required />
              <input type="date" name="fecha" defaultValue={facturaSeleccionada.fecha} required />
              <select name="estado" defaultValue={facturaSeleccionada.estado} required>
                <option value="pendiente">Pendiente</option>
                <option value="pagado">Pagado</option>
                <option value="vencido">Vencido</option>
              </select>
              <div className="mt-4 flex justify-end space-x-2">
                <button type="submit" className="btn btn-primary">Actualizar</button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Facturacion;
