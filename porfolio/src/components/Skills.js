import React from "react";
import css from '../access/css.png'
import express from '../access/express.png'
import graphQL from '../access/graphQL.png'
import html from '../access/html.png'
import js from '../access/javaScript.png'
import node from '../access/nodejs.png'
import posgreSQL from '../access/postgreSQL.png'
import react from '../access/react.png'
import redux from '../access/redux.png'
import sequelize from '../access/sequelize.png'
import tailwind from '../access/tailwind.png'

// import required modules
let images = [
  {
    'name': 'CSS',
    'img': css
  }, 
  {
    'name': 'Express',
    'img': express
  },
  {
    'name': 'HTML',
    'img': html
  }, 
  {
    'name': 'JavaScript',
    'img': js
  },  
  {
    'name': 'NodeJS',
    'img': node
  }, 
  {
    'name': 'React',
    'img': react
  }, 
  {
    'name': 'Redux',
    'img': redux
  }, 
  {
    'name': 'Sequelize',
    'img': sequelize
  }, 
  {
    'name': 'GraphQL',
    'img': graphQL
  },
  {
    'name': 'PosgreSQL',
    'img': posgreSQL
  }
  ,{
    'name': 'Tailwind CSS',
    'img': tailwind
  },
  ]

export default function App() {
  return (
    <div className='w-full grid grid-cols-4 py-8 h-full'>
      {
        images.map(e => 
          <div className="card">
            <div className='face front'>
              <h1>{e.name}</h1>
            </div>
            <div className='face back'>
              <img src={e.img} alt='Not found'/>
            </div>
          </div>
        )
      }
    </div>
  );
}
