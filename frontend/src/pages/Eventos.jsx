import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useEventosStore } from "../store/useEventosStore";

export default function Eventos() {
  const {
    eventos,
    eventoSeleccionado,
    setEventoSeleccionado,
    fetchEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
  } = useEventosStore();

  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "" });

  const [modals, setModals] = useState({
    crear: false,
    ver: false,
    editar: false,
  });

  useEffect(() => {
    fetchEventos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ nombre: "", correo: "", telefono: "" });
  };

  const handleCrear = async (e) => {
    e.preventDefault();
    await crearEvento(form);
    setModals({ ...modals, crear: false });
    resetForm();
  };

  const handleEditar = async (e) => {
    e.preventDefault();
    await actualizarEvento({ ...form, id: eventoSeleccionado.id });
    setModals({ ...modals, editar: false });
    setEventoSeleccionado(null);
    resetForm();
  };

  const handleEliminar = async (id) => {
    if (confirm("¿Estás seguro de eliminar este evento?")) {
      await eliminarEvento(id);
    }
  };

  const abrirModal = (tipo, evento = null) => {
    if (evento) {
      setEventoSeleccionado(evento);
      setForm({
        nombre: evento.nombre,
        correo: evento.correo,
        telefono: evento.telefono,
      });
    }
    setModals({ crear: false, ver: false, editar: false, [tipo]: true });
  };

  const cerrarModal = () => {
    setModals({ crear: false, ver: false, editar: false });
    setEventoSeleccionado(null);
    resetForm();
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <button
          onClick={() => abrirModal("crear")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Nuevo Evento
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Correo</th>
              <th className="px-4 py-2 text-left">Teléfono</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {eventos.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No hay eventos registrados.
                </td>
              </tr>
            ) : (
              eventos.map((evento) => (
                <tr key={evento.id} className="border-t">
                  <td className="px-4 py-2">{evento.nombre}</td>
                  <td className="px-4 py-2">{evento.correo}</td>
                  <td className="px-4 py-2">{evento.telefono}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => abrirModal("ver", evento)}
                      className="text-blue-600 hover:underline"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => abrirModal("editar", evento)}
                      className="text-yellow-600 hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(evento.id)}
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
      {modals.crear && (
        <Modal titulo="Nuevo Evento" onClose={cerrarModal}>
          <FormularioEvento onSubmit={handleCrear} form={form} onChange={handleChange} onCancel={cerrarModal} />
        </Modal>
      )}

      {/* Modal Ver */}
      {modals.ver && eventoSeleccionado && (
        <Modal titulo="Detalle del Evento" onClose={cerrarModal}>
          <div className="space-y-2">
            <p><strong>Nombre:</strong> {eventoSeleccionado.nombre}</p>
            <p><strong>Correo:</strong> {eventoSeleccionado.correo}</p>
            <p><strong>Teléfono:</strong> {eventoSeleccionado.telefono}</p>
            <div className="text-right">
              <button onClick={cerrarModal} className="btn btn-secondary">
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal Editar */}
      {modals.editar && eventoSeleccionado && (
        <Modal titulo="Editar Evento" onClose={cerrarModal}>
          <FormularioEvento onSubmit={handleEditar} form={form} onChange={handleChange} onCancel={cerrarModal} />
        </Modal>
      )}
    </Layout>
  );
}

function Modal({ children, titulo, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 relative">
        <h2 className="text-xl font-semibold mb-4">{titulo}</h2>
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ×
        </button>
      </div>
    </div>
  );
}

function FormularioEvento({ form, onChange, onSubmit, onCancel }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={onChange}
        placeholder="Nombre"
        className="input"
        required
      />
      <input
        type="email"
        name="correo"
        value={form.correo}
        onChange={onChange}
        placeholder="Correo"
        className="input"
        required
      />
      <input
        type="text"
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        placeholder="Teléfono"
        className="input"
        required
      />
      <div className="flex justify-end space-x-2">
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancelar
        </button>
      </div>
    </form>
  );
}
