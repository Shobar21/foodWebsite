import './App.css'
import AboutUs from './components/About/AboutUs'
import Navbar from './components/Home/Navbar'
import Footer from './Pages/Footer'
import Form from './Pages/Form'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Reviews from './Pages/Reviews'

function App() {
  return (
    <>
      <Navbar />
      <div id='home'>
        <Home />
      </div>
      <div id='menu'>
        <Menu />
      </div>
      <div id='about'>
        <AboutUs />
      </div>
      <div id='reviews'>
        <Reviews />
      </div>
      <div id='contact'>
        <Form />
      </div>
      <Footer />
    </>
  )
}

export default App
