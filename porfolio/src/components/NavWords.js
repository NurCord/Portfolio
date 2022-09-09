import React from 'react'

export default function NavWords({word}) {
  return (
    <h1 className='text-center border-b-2 border-spacing-2 border-b-blueGreen-200'>{word}</h1>
  )
}

/* <div className='flex flex-wrap w-full h-full'>
        <div class={clsx(
        'bg-blueGreen-100 w-full h-96',
        'lg:-ml-10 lg: -skew-x-12 lg:w-1/3 lg:bg-blueGreen-100 lg:h-96',
        'dark:bg-gray-700',
        )}> */