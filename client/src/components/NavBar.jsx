import React from 'react'
import { Link } from 'react-router-dom'

const Options = [
    {
        'id': '1',
        'to': '/servicios',
        'value': 'Servicios'
    },
    {
        'id': '2',
        'to': '/servicios',
        'value': 'Servicios'
    }
]

function NavBar() {
  return (
    <header className='bg-sky-600 h-20 flex justify-between py-2 px-4 items-center relative'> 
        <h4 className='text-xl font-bold text-stone-50'>LOGO</h4>
        <label for="toggle" className='text-4xl text-stone-50 cursor-pointer md:hidden'>&#9776;</label>
        <input type="checkbox" id="toggle" className='hidden'></input>
        <ul className='flex flex-col px-3 py-4 gap-6 absolute top-20 -left-full bg-sky-800 w-56 min-h-screen md:bg-sky-600 md:flex-row md:relative md:min-h-full md:top-0 transition-all'>
            {Options.map(({id, to, value}) => {
                return (
                    <li key={id} className='text-stone-50 text-lg transition-colors hover:text-stone-200'>
                        <Link to={to}>{value}</Link>
                    </li>
                )
            })}
        </ul>
    </header>
  )
}

export default NavBar
