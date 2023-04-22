import React from 'react'
import {MdElectricBolt, MdSignalWifiStatusbarConnectedNoInternet4} from 'react-icons/md'
import {BsPhoneFlip} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Pagos() {
  return (
    <div className='min-h-screen'>
      <h1 className='text-center text-5xl font-semibold text-sky-600 mt-8'>Pagos de Servicios</h1>
      <section className='pt-20 flex justify-center'>
        <div className='flex flex-wrap gap-1 justify-center px-4 w-screen max-w-4xl'>
            <Link to="/Servicios/Electricidad">
                <div className='bg-sky-500 flex flex-col items-center justify-center w-screen h-40 sm:w-[300px] md:w-[280px] transition-colors hover:bg-sky-600'>
                    <MdElectricBolt className='text-stone-50 text-6xl'/>
                    <h4 className='text-stone-50 text-lg mt-3'>Electricidad</h4>
                </div>
            </Link>
            <Link to="/Servicios/Telefonica">
                <div className='bg-sky-500 flex flex-col items-center justify-center w-screen h-40 sm:w-[300px] md:w-[280px] hover:bg-sky-600'>
                    <BsPhoneFlip className='text-stone-50 text-6xl'/>
                    <h4 className='text-stone-50 text-lg mt-3'>Telefonica</h4>
                </div>
            </Link>
            <Link to="/Servicios/Internet">
                <div className='bg-sky-500 flex flex-col items-center justify-center w-screen h-40 sm:w-[300px] md:w-[280px] hover:bg-sky-600'>
                    <MdSignalWifiStatusbarConnectedNoInternet4 className='text-stone-50 text-6xl'/>
                    <h4 className='text-stone-50 text-lg mt-3'>Internet</h4>
                </div>
            </Link>
            
        </div>
      </section>
    </div>
  )
}

export default Pagos
