import React from "react";
import { Link } from "react-router-dom";

function Electricidad() {
  return (
    <div className=" flex justify-center gap-9 p-8 flex-wrap ">
      <img
        src="/imagen.jpg"
        alt="Servicios"
        className="w-96 rounded-md h-80 object-cover hidden md:flex"
      />

      <div className="w-96 h-auto">
        <h4 className="text-xl font-semibold text-sky-600">Proveedores</h4>
        <ul className="list-disc pl-5 mt-5">
          <li>
            <Link
              to="1"
              className="text-sky-700 hover:text-sky-600 transition-colors cursor-pointer font-medium"
            >
              CNTEL
            </Link>
          </li>
          <li>
            <Link
              to="2"
              className="text-sky-700 hover:text-sky-600 transition-colors cursor-pointer font-medium"
            >
              JASEC
            </Link>
          </li>
          <li>
            <Link
              to="3"
              className="text-sky-700 hover:text-sky-600 transition-colors cursor-pointer font-medium"
            >
              SPA
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Electricidad;
