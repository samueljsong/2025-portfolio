import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ContactPage } from './pages/ContactPage'
import { InformationPage } from './pages/InformationPage'
import { PastProjects } from './pages/PastProjects'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className=' max-w-2xl lg:max-w-xl mx-auto px-4 md:px-0'>
        <NavBar/>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/information' element={<InformationPage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
            <Route path='/projects' element={<PastProjects/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
