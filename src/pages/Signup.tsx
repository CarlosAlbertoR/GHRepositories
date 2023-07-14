import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
// import { Transition } from "@headlessui/react";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleToggleCard = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isLogin) {
      // Lógica de inicio de sesión
      console.log("Inicio de sesión:", username, password);
    } else {
      // Lógica de registro
      console.log("Registro:", name, username, password);
    }
  };

  const handleGoogleLogin = () => {
    // Lógica de inicio de sesión con Google
    console.log("Inicio de sesión con Google");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="username" className="text-sm font-medium">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full font-semibold"
          >
            {isLogin ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm">
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
          </span>{" "}
          <button
            onClick={handleToggleCard}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? "Regístrate" : "Inicia Sesión"}
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center bg-red-500 text-white rounded-md px-4 py-2 w-full font-semibold"
          >
            <FaGoogle className="mr-2 text-xl" />
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
