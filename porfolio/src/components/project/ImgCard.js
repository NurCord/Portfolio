import React from 'react'

export default function ImgCard({image, url}) {
  return (
    <a href={url} className='m-4'>
      <img className='w-[40rem] border-[1px] rounded-sm border-pink-300 shadow-lg shadow-black hover:transition duration-300 hover:ease-in-out ease-out hover:transform hover:-translate-y-1 hover:scale-[1.02]' src={image} alt='Not found'/>
    </a>
  )
}
