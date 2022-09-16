import React from 'react'
import imgs from '../../access/imgs.jpeg'

export default function Image() {
  return (
    <div>
        <img src={imgs} alt='Not found' className='w-40 h-auto rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]'/>
    </div>
  )
}
