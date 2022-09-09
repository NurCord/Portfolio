import React from 'react'
import name from '../nuria.png'
import NavWords from './NavWords'
export default function NavBar() {
  return (
    <div className='grid w-full h-20 grid-cols-6 '>
      <img src={name} alt='Not found' className='h-24 col-start-1 col-end-3 justify-self-end'/>
      <div className='grid content-center grid-cols-3 col-start-4 col-end-6 gap-4 justify-evenly'>
        <div>
          <NavWords word='Proyects'/>
        </div>
        <div>
          <NavWords word='Skills'/>
        </div>
        <div>
          <NavWords word='Contact'/>
        </div>
      </div>
      <div className='flex justify-self-center'>
        <button className='items-center border-2 rounded-full my-9 border-blueGreen-100'>noc/dia</button>
      </div>
    </div>
  )
}
