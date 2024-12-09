import React, { createContext, useState, useContext } from 'react'
import axios from 'axios';
 export const PassContext = createContext();

 const PassProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      const { token, email } = response.data;
      setToken(token);
      setEmail(email);
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      return response;
    } catch (error) {
      throw new Error("Error al iniciar sesión");
      console.log(error)
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await axios.post('/api/auth/register', { username, email, password });
      const { token, email: userEmail } = response.data;
      setToken(token);
      setEmail(userEmail);
      localStorage.setItem('token', token);
      localStorage.setItem('email', userEmail);
      return response;
    } catch (error) {
      throw new Error("Error al registrar usuario");
      console.log(error)
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  const getUserProfile = async () => {
    try {
      const response = await axios.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener el perfil");
      console.log(error)
    }
  };

  return (
    <PassContext.Provider value={{ token, email, login, register, logout, getUserProfile }}>
      {children}
    </PassContext.Provider>
  );
};

export  default PassProvider
