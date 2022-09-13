import React from 'react'

export default function H1({sentences, fontr}) {
  return (
    <>
      {
        fontr ? <h1 className='font-londrinaS hover:font-londrina cursor-pointer ml-2 hover:text-pink-300'>{sentences}</h1> : <h1>{sentences}</h1>
      }
    </>
  )
}
