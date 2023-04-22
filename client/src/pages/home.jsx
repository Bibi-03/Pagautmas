import React from 'react';
// import ig1 from '././img/1.jpg';
import img1 from './img/imagen1.jpg';
import img2 from './img/imagen2.jpg'
import img3 from './img/imagen3.jpg'

function home() {
  return (
    <div>
      <div className='min-h-screen'>
      <h1 className='text-center text-5xl font-semibold text-sky-600 mt-8'>Pagos de Servicios Públicos</h1>
      <section className='pt-20 flex justify-center'>
        <div className='flex flex-wrap gap-1 justify-center px-4 w-screen max-w-4xl'>
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            {/* <img src={ig1}></img> */}
            <img src="https://i.pinimg.com/564x/d0/51/d3/d051d372416ae25eb939ceaff3065410.jpg" alt='imagen #1'/>
            <img src="https://i.pinimg.com/564x/8e/a0/2c/8ea02ce98d21c8fa8ae1f81e5112e9e5.jpg"/>
            <img src="https://i.pinimg.com/564x/56/96/44/569644ce3b83494573f035b57c42412b.jpg"/>
            
        </div>
      </section>
    </div>
    </div>
  )
}

export default home
