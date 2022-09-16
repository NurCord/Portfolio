import React, { useState } from 'react'
import name from '../../access/nuria.png'
import NavWords from './NavWords'
import clsx from 'clsx'
import { UilBars } from '@iconscout/react-unicons'
export default function NavBar() {
    const [variable, setVariable] = useState('hidden')
    function handleOnClick(){
      setVariable(variable === 'hidden' ? '' : 'hidden')
    }
    function modeDark(){
      document.documentElement.classList.toggle('dark')
    }
    return (
      <div className={clsx(
        'mobile:flex dark:mobile:bg-blueGreen-400 mobile:bg-blueGreen-200 mobile:justify-between mobile:p-2 mobile:w-full mobile:h-20',
        'desktop:grid desktop:grid-cols-6 desktop:bg-transparent desktop:p-0'
        )}>
          <img src={name} alt='Not found' className={clsx(
            'mobile:h-20 col-start-1 col-end-3 justify-self-end',
            'desktop:h-24'
            )}/>
        {
          window.matchMedia("(min-width: 700px)").matches ? 
          <>
            <div className='grid content-center grid-cols-3 col-start-4 col-end-6 gap-4 cursor-pointer justify-evenly'>
              <a href='#project' className='content-center'>
                <NavWords word='Projects'/>
              </a>
              <a href='#skills' className='content-center'>
                <NavWords word='Skills'/>
              </a>
              <a href='#contact' className='content-center'>
                <NavWords word='Contact'/>
              </a>
            </div>
            <div className='flex items-center justify-self-center'>
              <button onClick={modeDark} type="button" data-toggle-dark="dark" className="flex items-center w-8 h-8 px-2 text-xs font-medium text-gray-700 bg-pink-100 border border-gray-500 rounded-lg hover:bg-pink-200 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg aria-hidden="true" data-toggle-icon="moon" className="hidden w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                <svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
                <span className="sr-only">Toggle dark/light mode</span>
              </button>
            </div> 
          </>
        : 
        <div className='flex'>
          <div className='flex items-center justify-center mr-4'>
          <button onClick={modeDark} type="button" data-toggle-dark="dark" className="flex items-center w-10 h-10 px-2 text-xs font-medium text-gray-700 bg-pink-100 border border-gray-500 rounded-lg hover:bg-pink-200 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg aria-hidden="true" data-toggle-icon="moon" className="hidden w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg aria-hidden="true" data-toggle-icon="sun" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
              <span className="sr-only">Toggle dark/light mode</span>
            </button>
          </div>
          <button onClick={() => handleOnClick()} className="inline-flex flex-col items-center w-12 h-12 p-3 text-white bg-pink-300 rounded-lg dark:bg-pink-600 " type="button"><UilBars/></button>
          <div id="dropdown" className={`${variable} z-10 h-auto absolute right-16 top-2 dark:bg-pink-600 bg-pink-300 rounded divide-y divide-pink-300 shadow`}>
              <ul className="py-1 text-sm text-white" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#project" className="block px-4 py-2 hover:bg-pink-200">Projects</a>
                </li>
                <li>
                  <a href="#skills" className="block px-4 py-2 hover:bg-pink-200">Skills</a>
                </li>
                <li>
                  <a href="#contact" className="block px-4 py-2 hover:bg-pink-200">Contact</a>
                </li>
              </ul>
          </div>
        </div>
        }
      </div>
  )
}
/* */