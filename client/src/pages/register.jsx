import React from 'react'

function register() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center mt-[-80px] bg-sky-900'>
        <div className='bg-stone-50 px-4 py-7 rounded-md w-72 '>
        <h1 className='text-center text-2xl font-semibold text-sky-900 mb-4'>Registro</h1>
        <form action="" className='flex flex-col '>
            <label className='text-base text-sky-900 font-medium'>Nombre</label>
            <input type="text" required placeholder='Nombre Completo' className='w-full px-2 py-2 rounded-sm outline-none border-2 border-gray-400 bg-sky-50 mb-5' />
            <label className='text-base text-sky-900 font-medium'>Apellidos</label>
            <input type="text" required placeholder='Dos apellidos' className='w-full px-2 py-2 rounded-sm outline-none border-2 border-gray-400 bg-sky-50 mb-5' />
            <label className='text-base text-sky-900 font-medium'>Correo Electrónico</label>
            <input type="email" required placeholder='Correo de usuario' className='w-full px-2 py-2 rounded-sm outline-none border-2 border-gray-400 bg-sky-50 mb-5' />
            <label className='text-base text-sky-900 font-medium'>Teléfono</label>
            <input type="text" required placeholder='Número de teléfono' className='w-full px-2 py-2 rounded-sm outline-none border-2 border-gray-400 bg-sky-50 mb-5' />
            <label className='text-base text-sky-900 font-medium'>Contraseña</label>
            <input type="password" required className='w-full px-2 py-2 rounded-sm outline-none border-2 border-gray-400 bg-sky-50 mb-5'/>
            <button className='text-lg text-stone-50 bg-sky-500 outline-none border-0 py-2 rounded-md cursor-pointer transition-colors hover:bg-sky-600'>Registro</button>
        </form>
        </div>
        
    </div>
  )
}

export default register
