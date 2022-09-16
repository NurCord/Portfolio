import React from "react";
import {images} from './image'
import CardSkill from "./CardSkill";
import clsx from "clsx";

export default function Skills() {
  return (
    <div className={clsx(
      'mobile:flex-col mobile:pt-6 mobile:h-[45rem]',
      'relative flex desktop:flex-col items-center w-full truncate dark:bg-pink-600 bg-pink-300 desktop:h-[35rem]'
      )}>
      <h2 className={clsx(
          'mobile:text-3xl',
          'w-1/3 desktop:text-5xl font-normal text-center'
          )} id='skills'>Skills</h2>
      <div className={clsx(
        'mobile:grid-cols-3 mobile:justify-items-center',
        'grid w-full h-full desktop:grid-cols-4 py-8'
        )}>
        {
          images.map(e => <CardSkill name={e.name} img={e.img} url={e.url}/>)
        }
      </div>
    </div>

  );
}
