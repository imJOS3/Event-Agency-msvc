// src/components/ListaClientes.jsx
import React, { useEffect } from 'react'
import { useClientesStore } from '../store/useClientesStore'

const ListaClientes = () => {
  const { clientes, fetchClientes, loading, error } = useClientesStore()

  useEffect(() => {
    fetchClientes()
  }, [])

  if (loading) return <p>Cargando clientes...</p>
  if (error) return <p>Error al cargar clientes</p>

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map((c) => (
          <li key={c.id}>{c.nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaClientes
