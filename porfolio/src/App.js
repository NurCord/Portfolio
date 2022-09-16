import NavBar from './components/navBar/NavBar';
import Cards from './components/project/Cards';
import Footer from './components/Footer';
import Skills from './components/skills/Skills'
import About from './components/presentation/About';
export default function App() {
  return (
    <div className='w-full h-screen'>
      <NavBar/>
      <About/>
      <Skills/>
      <Cards />
      <Footer/>
    </div>
  )
}

