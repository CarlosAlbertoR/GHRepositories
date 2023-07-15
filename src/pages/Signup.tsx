import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  loginWithEmailAndPassword,
  loginWithGithub,
  loginWithGoogle,
  signUpWithEmailAndPassword,
} from "../store/slices/user";
import { AppDispatch } from "../store/store";

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggleCard = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginWithEmailAndPassword(email, password)).then(() => {
        navigate("/home");
      });
    } else {
      dispatch(signUpWithEmailAndPassword(email, password)).then(() => {
        navigate("/home");
      });
    }
  };

  const handleGoogleLogin = async () => {
    dispatch(loginWithGoogle()).then(() => {
      navigate("/home");
    });
  };

  const handleGitHubLogin = async () => {
    dispatch(loginWithGithub()).then(() => {
      navigate("/my-repositories");
    });
  };

  return (
    <div className="flex items-center justify-center my-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <button
            onClick={handleGitHubLogin}
            className="flex items-center justify-center bg-gray-800 text-white rounded-md px-4 py-2 w-full mt-2 font-semibold"
          >
            <FaGithub className="mr-2 text-xl" />
            Continuar con GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
