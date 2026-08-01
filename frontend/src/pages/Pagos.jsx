import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { usePagosStore } from "../store/usePagosStore";

export default function Pagos() {
  const {
    pagos,
    getPagos,
    crearPago,
    eliminarPago,
  } = usePagosStore();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [form, setForm] = useState({ monto: "", metodo: "" });

  useEffect(() => {
    getPagos(); // Cargar pagos al iniciar
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitCrear = async (e) => {
    e.preventDefault();
    await crearPago(form);
    setForm({ monto: "", metodo: "" });
    setShowCreateModal(false);
  };

  const handleEliminar = async (id) => {
    if (confirm("¿Estás seguro de eliminar este pago?")) {
      await eliminarPago(id);
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pagos</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Nuevo Pago
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Método</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pagos.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No hay pagos registrados.
                </td>
              </tr>
            ) : (
              pagos.map((pago) => (
                <tr key={pago.id} className="border-t">
                  <td className="px-4 py-2">{pago.monto}</td>
                  <td className="px-4 py-2">{pago.metodo}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEliminar(pago.id)}
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
            <h2 className="text-xl font-bold mb-2">Nuevo Pago</h2>
            <form onSubmit={handleSubmitCrear}>
              <input
                type="text"
                name="monto"
                value={form.monto}
                onChange={handleChange}
                placeholder="Monto"
                required
              />
              <input
                type="text"
                name="metodo"
                value={form.metodo}
                onChange={handleChange}
                placeholder="Método de Pago"
                required
              />
              <div className="mt-4 flex justify-end space-x-2">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCreateModal(false)}
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
}
