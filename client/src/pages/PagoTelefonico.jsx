import React, { useState } from "react";
import {useParams } from "react-router-dom";
import { proveedores } from "../assets/Proveedores";
import { Inputs } from "../assets/InputsPago";


function PagoTelefonico() {
  const { id, numCuenta } = useParams();
  const [data, setData] = useState({monto: 12312, proveedor: proveedores[id-1], servicio: 'Telefónico'})
  return (
    <>
      {numCuenta ? (
        <div className="px-5 py-8 flex items-center flex-col">
          <h1 className="text-center text-sky-600 text-2xl font-semibold">
            Telefónico
          </h1>
          <h2 className="text-center text-sky-600 text-xl font-semibold">
            Pago de servicios
          </h2>
          <form action="" className="w-full mt-10 md:w-[500px]">
            <div className="flex flex-col mb-2 md:flex-row md:w-full md:justify-between">
              <label className="px-2">Número de cuenta:</label>
              <input
                type="text"
                value={numCuenta}
                disabled
                className="px-5 py-2 border-2 border-sky-600 outline-none"
              />
            </div>
            <div className="flex flex-col mb-2 md:flex-row md:w-full md:justify-between">
              <label className="px-2">Monto a cancelar:</label>
              <input
                type="text"
                value={data.monto}
                disabled
                className="px-5 py-2 border-2 border-sky-600 outline-none"
              />
            </div>
            <div className="flex flex-col mb-2 md:flex-row md:w-full md:justify-between">
              <label className="px-2">Proveedor:</label>
              <input
                type="text"
                value={data.proveedor}
                disabled
                className="px-5 py-2 border-2 border-sky-600 outline-none"
              />
            </div>
            <div className="flex flex-col mb-2 md:flex-row md:w-full md:justify-between">
              <label className="px-2">Servicio:</label>
              <input
                type="text"
                value={data.servicio}
                disabled
                className="px-5 py-2 border-2 border-sky-600 outline-none"
              />
            </div>


            <div className="md:w-full flex justify-center">
              <button className="w-full bg-sky-500 text-stone-50 px-5 py-2 rounded-md mt-5 md:w-52 hover:bg-sky-600 transition-colors">
                Pagar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="px-5 py-8 flex items-center flex-col">
          <h1 className="text-center text-sky-600 text-2xl font-semibold">
            Telefónico
          </h1>
          <h2 className="text-center text-sky-600 text-xl font-semibold">
            Pago de servicios
          </h2>
          <form action="" className="w-full mt-10 md:w-[500px]">
            {Inputs.map(({ label, inputType, value, indentify, disable }) => {
              return (
                <div
                  key={indentify}
                  className="flex flex-col mb-2 md:flex-row md:w-full md:justify-between"
                >
                  <label className="px-2">{label}</label>
                  {value === "" ? (
                    <input
                      type={inputType}
                      disabled={disable}
                      className="px-5 py-2 border-2 border-sky-600 outline-none"
                    />
                  ) : (
                    <input
                      type={inputType}
                      value={value}
                      disabled={disable}
                      className="px-5 py-2 border-2 border-sky-600 outline-none"
                    />
                  )}
                </div>
              );
            })}
            <div className="md:w-full flex justify-center">
              <button className="w-full bg-sky-500 text-stone-50 px-5 py-2 rounded-md mt-5 md:w-52 hover:bg-sky-600 transition-colors">
                Continuar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default PagoTelefonico;
