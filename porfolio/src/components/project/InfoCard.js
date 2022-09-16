import React from 'react'

export default function InfoCard({name, description, url}) {
  return (
    <div className='w-[20rem] px-3'>
            <h3 className='py-2 text-3xl underline decoration-wavy hover:decoration-pink-300 decoration-2 decoration-blueGreen-200 dark:decoration-blueGreen-400'>{name}</h3>
            <p>{description}</p>
            <a href={url}>
              <button className='px-5 py-1 mt-4 duration-300 ease-out border-2 rounded-full bg-gradient-to-r hover:from-pink-100 dark:from-blueGreen-400 dark:border-black dark:hover:from-pink-600 hover:to-pink-300 from-blueGreen-200 to-pink-100 hover:transition hover:ease-in-out hover:transform hover:-translate-y-1 hover:scale-105'>Git Hub</button>
            </a>
    </div>
  )
}
