import React from 'react'
import county from '../access/country.PNG'
import food from '../access/food.PNG'
import findbook from '../access/findbook.PNG'

let arr = [
  {
    'id': 1,
    'name': 'Search Country',
    'description': 'Pagina Web de countries. Hecho con React, Styled Components, graphql, Apollo Client',
    'image': county
  },
  {
    'id': 2,
    'name': 'Henry Food',
    'description': 'Pagina Web de recetas, donde se consume la API externa spoonacular. Hecho con React, Redux, Styled Components, Express, PostgreSQL, Sequelize',
    'image': food
  },
  {
    'id': 3,
    'name': 'Find Book',
    'description': 'E-Commerce de compra y venta de libros en formato digital. Hecho con React, Redux, Tailwind, Express, PostgreSQL, Sequelize, TypeScript entre otros.',
    'image': findbook
  },
]
export default function Cards() {
  return (
    <div className='w-full my-8 flex justify-center items-center'>
      <div>
        <h3 className='text-4xl w-1/3'>Find Book</h3>

      </div>
      <div>
        <img className='w-[40rem]' src={findbook}/>
      </div>
    </div>
  )
}