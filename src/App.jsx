import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ContactPage } from './pages/ContactPage'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <div className=' max-w-2xl lg:max-w-xl mx-auto '>
        <NavBar/>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
    </div>
  )
}

export default App
