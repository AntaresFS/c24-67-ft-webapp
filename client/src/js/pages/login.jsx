import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  // Estado para controlar si se muestra el formulario de login o registro
  const [isLogin, setIsLogin] = useState(true);
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // Estado para errores
  const [error, setError] = useState('');

  // Maneja los cambios en los inputs
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Selecciona el endpoint según el modo
      const endpoint = isLogin ? '/api/login' : '/api/register';
      const { data } = await axios.post(endpoint, formData);
      console.log('Respuesta del servidor:', data);
      // Aquí podrías, por ejemplo, guardar el token recibido o redirigir al usuario
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setError('Ocurrió un error, por favor intente nuevamente.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit}>
        {/* En el modo de registro se solicita el nombre de usuario */}
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">
          {isLogin ? 'Ingresar' : 'Registrarse'}
        </button>
      </form>
      <p>
        {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{' '}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
        </button>
      </p>
    </div>
  );
};

export default Login;
