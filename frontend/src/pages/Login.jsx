import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = useAuthStore((state) => state.login)
  const error = useAuthStore((state) => state.error)
  const loading = useAuthStore((state) => state.loading)

  const handleLogin = async (e) => {
    e.preventDefault()
    const success = await login({ email, password })
    if (success) {
      navigate('/dashboard') // ✅ Redirigir si login fue exitoso
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
        </form>
        <p className="text-center mt-4">
          ¿No tienes cuenta? <a href="/register" className="text-blue-500">Registrarse</a>
        </p>
      </div>
    </div>
  )
}

export default Login
