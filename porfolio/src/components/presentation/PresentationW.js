import React from 'react'
export default function H1({sentences, fontr}) {
  return (
    <>
      {
        fontr ? <h1 className='ml-2 cursor-pointer font-londrinaS hover:font-londrina hover:text-pink-300'>{sentences}</h1> : <h1>{sentences}</h1>
      }
    </>
  )
}
