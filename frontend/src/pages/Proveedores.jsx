import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useProveedoresStore } from "../store/useProveedoresStore";

export default function Proveedores() {
  const {
    proveedores,
    getProveedores,
    crearProveedor,
    eliminarProveedor,
  } = useProveedoresStore();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [form, setForm] = useState({ nombre: "", contacto: "" });

  useEffect(() => {
    getProveedores(); // Cargar al montar
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearProveedor(form);
    setForm({ nombre: "", contacto: "" });
    setShowCreateModal(false);
  };

  const handleEliminar = async (id) => {
    if (confirm("¿Deseas eliminar este proveedor?")) {
      await eliminarProveedor(id);
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Proveedores</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Nuevo Proveedor
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Contacto</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No hay proveedores registrados.
                </td>
              </tr>
            ) : (
              proveedores.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="px-4 py-2">{p.nombre}</td>
                  <td className="px-4 py-2">{p.contacto}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEliminar(p.id)}
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

      {/* Modal para Crear */}
      {showCreateModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-4">Nuevo Proveedor</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre del proveedor"
                required
              />
              <input
                type="text"
                name="contacto"
                value={form.contacto}
                onChange={handleChange}
                placeholder="Contacto"
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
