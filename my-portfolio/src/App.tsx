
import './App.css'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import { useRef } from 'react'
function App() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const contactRef=useRef<HTMLDivElement>(null);
  return (
    <div className='font-poppins'>
      <Navbar portfolioRef={portfolioRef} techStackRef={techStackRef} contactRef={contactRef}/>
      <About />
      <Portfolio ref={portfolioRef}/>
      <TechStack ref={techStackRef}/>
      <Footer ref={contactRef}/>
      </div>
  )
}

export default App
