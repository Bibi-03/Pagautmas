import ScrollToTop from './components/ScrollToTop'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import InicioBanco from './pages/InicioBanco'
import Login from './pages/login'
import Register from './pages/register'
import ErrorPage from './pages/404'
import CambiarContrasena from './pages/CambiarContrasena'
import NavBar from './components/NavBar'

const WithoutNavBar = [
  "/Login", "/Registro", "/CambiarContrasena"
]

function App() {

  const location = useLocation()
  return (
    <div className='flex flex-col min-h-full bg-stone-50'>
      <div className='flex-1'>
        {!WithoutNavBar.includes(location.pathname) && <NavBar/>}
        
        <div className='mt-20 '>
          <ScrollToTop>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/Login' element={<Login />} />
              <Route exact path='/Registro' element={<Register />} />
              <Route exact path='/Inicio' element={<InicioBanco />} />
              <Route exact path='/CambiarContrasena' element={<CambiarContrasena />} />
              <Route exact path='*' element={<ErrorPage />} />
            </Routes>
          </ScrollToTop>
        </div>
      </div>
    </div>
  )
}

export default App
