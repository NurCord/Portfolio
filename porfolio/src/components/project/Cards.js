import React from 'react'
import ImgCard from './ImgCard'
import InfoCard from './InfoCard'
import {arr} from './projectInfo'
import clsx from 'clsx'

export default function Cards() {
  return (
    <div className='relative w-full'>
      {
        window.matchMedia("(min-width: 700px)").matches ? 
      <div className='top-0 left-0 bg-pink-200 border-b-0 border-r-0 border-solid dark:bg-pink-500 border-l-200 border-t-20 border-t-pink-300 dark:border-t-pink-600 border-r-transparent border-b-transparent border-l-transparent'></div> : null
      }
      <div className='z-0 flex flex-col items-center w-full h-auto py-8 bg-pink-200 dark:bg-pink-500'>
        <h2 className={clsx(
          'mobile:text-3xl',
          'w-1/3 desktop:text-5xl font-normal text-center'
          )} id='project'>Projects</h2>
        {
          arr.map(project => 
          <div key={project.id}>
            <div className={clsx(
              'mobile:flex-col',
              'flex desktop:flex-row items-center justify-center w-full my-8')}>
              {
                window.matchMedia("(min-width: 700px)").matches ? project.id % 2 !== 0 ? 
                <>
                  <InfoCard name={project.name} url={project.urlGit} description={project.description}/>
                  <ImgCard image={project.image} url={project.url}/>
                </> : 
                <>
                  <ImgCard image={project.image} url={project.url}/>
                  <InfoCard name={project.name} url={project.urlGit} description={project.description}/>
                </> : 
                <>
                <ImgCard image={project.image} url={project.url}/>
                <InfoCard name={project.name} url={project.urlGit} description={project.description}/>
                </>
              }
            </div>
          { 
            project.id !== arr.length ? <div className='border-b-2'></div> : null
          }
          </div>  
          )
        }
      </div> 
    </div>
  )
}