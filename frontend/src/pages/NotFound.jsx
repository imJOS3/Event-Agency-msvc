import React from "react";
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react"; // ícono simpático

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      <Ghost className="w-20 h-20 text-blue-600 mb-4" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6 text-center">
        Oops! La página que buscas se ha perdido en una fiesta.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
