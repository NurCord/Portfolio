import React from 'react'

export default function CardSkill({name, img, url}) {
  return (
    <a href={url}>
      <div className="card">
          <div className='face dark:bg-pink-500 front'>
            <h1>{name}</h1>
          </div>
          <div className='face back'>
            <img src={img} alt='Not found'/>
          </div>
      </div>
    </a>
  )
}
