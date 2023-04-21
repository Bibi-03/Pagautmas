import React from 'react'
import { Link } from 'react-router-dom'

function login() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center mt-[-80px] bg-sky-900'>
        <div className='flex flex-col '>
            <form action="" className='flex flex-col bg-stone-50 px-4 py-7 rounded-md w-72'>
                <h1 className='text-center text-2xl font-semibold text-sky-900 mb-4'>Sign In</h1>
                <label className='text-base text-sky-900 font-medium'>Correo electrónico</label>
                <input type="email" required placeholder='Correo de usuario' className='w-full px-2 py-2 rounded-sm outline-none border-2 border-gray-400 bg-sky-50 mb-5' />
                <label className='text-base text-sky-900 font-medium'>Contraseña</label>
                <input type="password" required className='w-full px-2 py-2 rounded-sm outline-none border-2 border-gray-400 bg-sky-50 mb-5'/>
                <button className='text-lg text-stone-50 bg-sky-500 outline-none border-0 py-2 rounded-md cursor-pointer transition-colors hover:bg-sky-600'>Login</button>
                <div className='w-full mt-6 flex justify-end'>
                    <Link to="/CambiarContrasena" className='text-sm text-sky-700 font-medium'>Olvidó su contraseña?</Link>
                </div>
            </form>
            <div className='mt-10 border-t-2 pt-3  flex'>
                <p className='text-sm text-stone-200'>No tienes una cuenta </p>
            </div>
                <Link to="/Registro" className='text-lg text-stone-50 hover:text-stone-200 transition-colors'>Registrarse</Link>
        </div>
    </div>
  )
}

export default login
