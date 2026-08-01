import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useInventarioStore } from "../store/useInventarioStore";

export default function Inventario() {
  const {
    inventario,
    productoSeleccionado,
    setProductoSeleccionado,
    fetchInventario,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
  } = useInventarioStore();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchInventario();
  }, []);

  const abrirModalVer = (producto) => {
    setProductoSeleccionado(producto);
    setShowViewModal(true);
  };

  const abrirModalEditar = (producto) => {
    setProductoSeleccionado(producto);
    setShowEditModal(true);
  };

  const handleCrearProducto = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nuevoProducto = {
      nombre: form.nombre.value,
      categoria: form.categoria.value,
      cantidad: form.cantidad.value,
      precio: form.precio.value,
    };
    await crearProducto(nuevoProducto);
    setShowCreateModal(false);
    form.reset();
  };

  const handleEditarProducto = async (e) => {
    e.preventDefault();
    const form = e.target;
    const actualizado = {
      ...productoSeleccionado,
      nombre: form.nombre.value,
      categoria: form.categoria.value,
      cantidad: form.cantidad.value,
      precio: form.precio.value,
    };
    await actualizarProducto(actualizado);
    setShowEditModal(false);
  };

  const handleEliminar = async (id) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      await eliminarProducto(id);
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Inventario</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Nuevo Producto
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Categoría</th>
              <th className="px-4 py-2">Cantidad</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inventario.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No hay productos registrados.
                </td>
              </tr>
            ) : (
              inventario.map((producto) => (
                <tr key={producto.id} className="border-t">
                  <td className="px-4 py-2">{producto.nombre}</td>
                  <td className="px-4 py-2">{producto.categoria}</td>
                  <td className="px-4 py-2">{producto.cantidad}</td>
                  <td className="px-4 py-2">{producto.precio}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => abrirModalVer(producto)}
                      className="text-blue-600 hover:underline"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => abrirModalEditar(producto)}
                      className="text-yellow-600 hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(producto.id)}
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
            <h2 className="text-xl font-bold mb-2">Nuevo Producto</h2>
            <form onSubmit={handleCrearProducto}>
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="text" name="categoria" placeholder="Categoría" required />
              <input type="number" name="cantidad" placeholder="Cantidad" required />
              <input type="number" name="precio" placeholder="Precio" required />
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
      {showViewModal && productoSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-2">Detalle del Producto</h2>
            <p><strong>Nombre:</strong> {productoSeleccionado.nombre}</p>
            <p><strong>Categoría:</strong> {productoSeleccionado.categoria}</p>
            <p><strong>Cantidad:</strong> {productoSeleccionado.cantidad}</p>
            <p><strong>Precio:</strong> ${productoSeleccionado.precio}</p>
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
      {showEditModal && productoSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-bold mb-2">Editar Producto</h2>
            <form onSubmit={handleEditarProducto}>
              <input type="text" name="nombre" defaultValue={productoSeleccionado.nombre} required />
              <input type="text" name="categoria" defaultValue={productoSeleccionado.categoria} required />
              <input type="number" name="cantidad" defaultValue={productoSeleccionado.cantidad} required />
              <input type="number" name="precio" defaultValue={productoSeleccionado.precio} required />
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
