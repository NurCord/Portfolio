import React from 'react'
import Image from './Image';
import H1 from './PresentationW';
import clsx from 'clsx';
export default function about() {
  return (
    <div className={clsx(
      'mobile:bg-blueGreen-200 dark:mobile:bg-blueGreen-400 desktop:bg-transparent mobile:relative mobile:h-96')}>
        <div className={clsx(
          'mobile:left-1/4 mobile:top-0',
          'absolute desktop:left-20'
          )}>
          <Image />
        </div>
        <div className={clsx(
          'mobile:absolute mobile:border-none mobile:-z-10',
          'desktop:bg-blueGreen-200 dark:bg-blueGreen-400 desktop:bottom-0 desktop:left-0 w-full desktop:border-t-0 desktop:border-r-0 desktop:border-solid desktop:border-l-100 desktop:border-b-10 desktop:border-t-transparent desktop:border-r-transparent desktop:border-b-pink-100 dark:desktop:border-b-pink-500 desktop:border-l-transparent ')}>
        </div>
        <div className={clsx(
          'mobile:text-2xl mobile:top-44 mobile:left-6',
          'absolute desktop:text-4xl font-normal desktop:left-1/2 desktop:top-10')}>
            <div className='flex'>
              <H1 sentences={'Hola mi nombre es '}/><H1 sentences={'Nuria.'} fontr='true'></H1>
            </div>
            <H1 sentences={'Soy Full-Stack Developer'}/>
            <H1 sentences={'Me gusta estar en constante aprendizaje'}/>
            <H1 sentences={'y trabajando en grupo.'}/>
        </div>
      </div>
  )
}
