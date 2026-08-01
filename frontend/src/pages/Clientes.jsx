import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import useClientesStore  from "../store/useClientesStore";

export default function Clientes() {
  const {
    clientes,
    clienteSeleccionado,
    setClienteSeleccionado,
    fetchClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
  } = useClientesStore();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchClientes(); // carga inicial desde la API
  }, []);

  const abrirModalVer = (cliente) => {
    setClienteSeleccionado(cliente);
    setShowViewModal(true);
  };

  const abrirModalEditar = (cliente) => {
    setClienteSeleccionado(cliente);
    setShowEditModal(true);
  };

  const handleCrearCliente = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nuevoCliente = {
      nombre: form.nombre.value,
      correo: form.correo.value,
      telefono: form.telefono.value,
      ciudad: form.ciudad.value,
    };
    await crearCliente(nuevoCliente);
    setShowCreateModal(false);
    form.reset();
  };

  const handleEditarCliente = async (e) => {
    e.preventDefault();
    const form = e.target;
    const actualizado = {
      ...clienteSeleccionado,
      nombre: form.nombre.value,
      correo: form.correo.value,
      telefono: form.telefono.value,
      ciudad: form.ciudad.value,
    };
    await actualizarCliente(actualizado);
    setShowEditModal(false);
  };

  const handleEliminar = async (id) => {
    if (confirm("¿Estás seguro de eliminar este cliente?")) {
      await eliminarCliente(id);
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Nuevo Cliente
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Correo</th>
              <th className="px-4 py-2">Teléfono</th>
              <th className="px-4 py-2">Ciudad</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No hay clientes registrados.
                </td>
              </tr>
            ) : (
              clientes.map((cliente) => (
                <tr key={cliente.id} className="border-t">
                  <td className="px-4 py-2">{cliente.nombre}</td>
                  <td className="px-4 py-2">{cliente.correo}</td>
                  <td className="px-4 py-2">{cliente.telefono}</td>
                  <td className="px-4 py-2">{cliente.ciudad}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => abrirModalVer(cliente)}
                      className="text-blue-600 hover:underline"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => abrirModalEditar(cliente)}
                      className="text-yellow-600 hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(cliente.id)}
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
            <h2 className="text-xl font-bold mb-2">Nuevo Cliente</h2>
            <form onSubmit={handleCrearCliente}>
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="email" name="correo" placeholder="Correo" required />
              <input type="text" name="telefono" placeholder="Teléfono" required />
              <input type="text" name="ciudad" placeholder="Ciudad" required />
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

      {/* Modal Ver */}
      {showViewModal && clienteSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-2">Detalle del Cliente</h2>
            <p><strong>Nombre:</strong> {clienteSeleccionado.nombre}</p>
            <p><strong>Correo:</strong> {clienteSeleccionado.correo}</p>
            <p><strong>Teléfono:</strong> {clienteSeleccionado.telefono}</p>
            <p><strong>Ciudad:</strong> {clienteSeleccionado.ciudad}</p>
            <div className="mt-4 text-right">
              <button
                className="btn btn-secondary"
                onClick={() => setShowViewModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Editar */}
      {showEditModal && clienteSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-2">Editar Cliente</h2>
            <form onSubmit={handleEditarCliente}>
              <input
                type="text"
                name="nombre"
                defaultValue={clienteSeleccionado.nombre}
                required
              />
              <input
                type="email"
                name="correo"
                defaultValue={clienteSeleccionado.correo}
                required
              />
              <input
                type="text"
                name="telefono"
                defaultValue={clienteSeleccionado.telefono}
                required
              />
              <input
                type="text"
                name="ciudad"
                defaultValue={clienteSeleccionado.ciudad}
                required
              />
              <div className="mt-4 flex justify-end space-x-2">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
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
}
