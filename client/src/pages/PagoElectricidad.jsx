import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Inputs } from '../assets/InputsPago'
import { proveedores } from '../assets/Proveedores'
import {getVerificarNumCuentaRequest} from '../api/VarificarNumCuenta.api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RealizarPagoRequest } from '../api/RealizarPago.api'
import { useAuthContext } from '../context/AuthContext'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function PagoElectricidad() {
    const { id, numCuenta } = useParams();
    const navigate = useNavigate()
    const {currentUser} = useAuthContext()
    const [nCuenta, setNCuenta] = useState()
    const [pagar, setPagar] = useState(true)
    const [data, setData] = useState({monto: 12312, proveedor: proveedores[id-1], servicio: 'Electricidad'})
    
    useEffect(() => {
      const Verificar = async () => {
        try {
          const response = await getVerificarNumCuentaRequest(numCuenta, 1, id);
          setData({monto: response.data.Tasa, proveedor: proveedores[id-1], servicio: 'Electricidad'})
        } catch (error) {
          setPagar(false)
        }
        
      }

      if (numCuenta) Verificar()
    
    }, [])
    

    const handleClickNext = (e) => {
      e.preventDefault()
      navigate(`/Servicios/Electricidad/${id}/${nCuenta}`)
    }

    const notify = () => toast.success("Pago realizado", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const notifyError = () => toast.warn("Algo ha salido mal", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const HandleClickPagar = async (e) => {
      e.preventDefault()
      try {
        await RealizarPagoRequest({numCuenta, Proveedor: id, Servicio: 1, emailUser: currentUser.response.email, monto: data.monto})
        notify()
        await sleep(5000);
        navigate('/Inicio')
      } catch (error) {
        notifyError()
      }
    }
    
    return (
      <>
        {numCuenta ? !pagar ? 
            <div className="px-5 py-8 flex items-center flex-col">
            <h1 className="text-center text-sky-600 text-2xl font-semibold">
              No tiene pagos pendientes
            </h1>
            </div>
            :
        (
          <div className="px-5 py-8 flex items-center flex-col">
            <h1 className="text-center text-sky-600 text-2xl font-semibold">
              Electricidad
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
                <button onClick={HandleClickPagar} className="w-full bg-sky-500 text-stone-50 px-5 py-2 rounded-md mt-5 md:w-52 hover:bg-sky-600 transition-colors">
                  Pagar
                </button>
              </div>
            </form>
            <ToastContainer 
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        ) : (
          <div className="px-5 py-8 flex items-center flex-col">
            <h1 className="text-center text-sky-600 text-2xl font-semibold">
              Electricidad
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
                        onChange={(e) => setNCuenta(e.target.value)}
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
                        required
                      />
                    )}
                  </div>
                );
              })}
              <div className="md:w-full flex justify-center">
                <button onClick={handleClickNext} className="w-full bg-sky-500 text-stone-50 px-5 py-2 rounded-md mt-5 md:w-52 hover:bg-sky-600 transition-colors">
                  Continuar
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    );
}

export default PagoElectricidad
