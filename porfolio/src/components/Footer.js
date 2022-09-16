import React from 'react'
import clsx from 'clsx';
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilWhatsappAlt } from '@iconscout/react-unicons'
import { UilInstagramAlt } from '@iconscout/react-unicons'

export default function Footer() {
  return (
      <div class={clsx(
        'bg-blueGreen-200 dark:bg-blueGreen-400 mobile:h-52 w-full',
        'desktop:h-60 desktop:flex desktop:flex-row',
      )} id='contact'>
        <div className={clsx(
          'mobile:justify-around mobile:w-full mobile:pt-4',
          'flex items-center desktop:justify-center desktop:w-72 desktop:pt-0'
          )}>
          <button className='h-10 px-5 py-2 duration-300 ease-out border-2 rounded-full bg-gradient-to-r dark:from-blueGreen-300 dark:border-black dark:hover:from-pink-600 hover:from-pink-100 hover:to-pink-300 from-blueGreen-200 to-pink-100 hover:transition hover:ease-in-out hover:transform hover:-translate-y-1 hover:scale-105'>
            <a href='https://drive.google.com/file/d/1ULOGUED6EKTXP55S8NhPk8_FdWff_pG4/view?usp=sharing' download='CV PDF'>Descargar CV</a>
          </button>
        {
          !window.matchMedia("(min-width: 700px)").matches ?
            <button className='h-10 px-5 py-2 duration-300 ease-out border-2 rounded-full dark:from-blueGreen-400 dark:border-black dark:hover:from-pink-600 bg-gradient-to-r hover:from-pink-100 hover:to-pink-300 from-blueGreen-200 to-pink-100 hover:transition hover:ease-in-out hover:transform hover:-translate-y-1 hover:scale-105'>
              <a href='mailto:nunyypin@gmail.com'>
                Contactarme
              </a>
            </button>
          : null
        }
        </div>
        <div className='flex flex-col items-center justify-center h-32 m-auto'>
          <div className='grid content-center h-20 grid-cols-5 gap-4'>
            <a href='https://www.linkedin.com/in/nuria-candela-cordoba-a14135224/' className='hover:text-pink-200'>
              <UilLinkedin size="35" />
            </a>
            <a href='https://github.com/NurCord' className='hover:text-pink-200'>
              <UilGithub size="35" />
            </a>
            <a href='https://twitter.com/NuriaCordoba2' className='hover:text-pink-200'>
              <UilTwitter size="35" />
            </a>
            <a href='https://wa.me/+5493484360123' className='hover:text-pink-200'>
              <UilWhatsappAlt size="35" />
            </a>
            <a href='https://www.instagram.com/nunycord_20/' className='hover:text-pink-200'>
              <UilInstagramAlt size="35" />
            </a>
          </div>
          <p>Diseñado y construido por <b className='font-bold'>Córdoba Nuria</b></p>
          <p>© copyright 2022 Todos los derechos reservados</p>
        </div>
        {
          window.matchMedia("(min-width: 700px)").matches ?
          <div className='flex items-center justify-center w-72'>
            <button className='h-10 px-5 py-2 duration-300 ease-out border-2 rounded-full dark:from-blueGreen-300 dark:border-black dark:hover:from-pink-600 bg-gradient-to-r hover:from-pink-100 hover:to-pink-300 from-blueGreen-200 to-pink-100 hover:transition hover:ease-in-out hover:transform hover:-translate-y-1 hover:scale-105'>
              <a href='mailto:nunyypin@gmail.com'>
                Contactarme
              </a>
            </button>
          </div> : null
        }
      </div>
  )
}
