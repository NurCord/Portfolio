import './App.css';
import clsx from 'clsx';
import Image from './components/Image';
import NavBar from './components/NavBar';
import H1 from './components/PresentationW';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Skills from './components/Skills'

export default function App() {
  return (
    <div className='w-full h-screen'>
    
      <NavBar/>

      <div className='relative h-80'>
        <div className='absolute left-20'>
          <Image />
        </div>
        <div className='absolute bottom-0 left-0 w-full border-t-0 border-r-0 border-solid border-l-100 border-b-10 border-t-transparent border-r-transparent border-b-pink-100 border-l-transparent bg-blueGreen-100 -z-10'>
        </div>
        <div className='absolute left-1/2 top-1/4'>
            <H1 sentences={'Hola mi nombre es Nuria.'}/>
            <H1 sentences={'Me gusta estar en constante aprendizaje,'}/>
            <H1 sentences={'y trabajando en grupo'}/>
        </div>
      </div>

      <div className='relative flex items-center w-full truncate bg-pink-300 h-96 wrap'>
            <Skills/>
      </div>
      
      <div className='relative w-full'>
        <div className='top-0 left-0 bg-pink-200 border-b-0 border-r-0 border-solid border-l-200 border-t-20 border-t-pink-300 border-r-transparent border-b-transparent border-l-transparent'>
        </div>
         <div className='z-0 flex w-full py-8 bg-pink-200 h-96'>
          <Cards />
        </div> 
      </div>

      <div class={clsx(
        'bg-blueGreen-200 w-full h-96',
        'lg:bg-blueGreen-200 lg:h-60 lg:flex',
      )}>
      <Footer/>
      </div>
    </div>
  )
}

