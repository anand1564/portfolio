
import './App.css'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Footer from './pages/Footer'
function App() {

  return (
    <div className='font-poppins'>
    <h1 className='text-4xl text-center text-blue-500 mt-5'>Welcome to my portfolio</h1>
    <About />
      <Portfolio />
      <TechStack />
      <Footer />
      </div>
  )
}

export default App
