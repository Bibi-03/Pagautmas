import ScrollToTop from './components/ScrollToTop'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import InicioBanco from './pages/InicioBanco'
import Login from './pages/login'
import Register from './pages/register'
import ErrorPage from './pages/404'
import CambiarContrasena from './pages/CambiarContrasena'
import NavBar from './components/NavBar'
import Pagos from './pages/Pagos'
import Electricidad from './pages/Electricidad'
import Telefonica from './pages/Telefonica'
import Internet from './pages/Internet'
import PagoTelefonico from './pages/PagoTelefonico'
import PagoElectricidad from './pages/PagoElectricidad'
import PagoInternet from './pages/PagoInternet'
import { useAuthContext } from './context/AuthContext'


const WithoutNavBar = [
  "/Login", "/Registro", "/CambiarContrasena"
]

function App() {

  const { currentUser } = useAuthContext()

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/Login' />
  }

  const location = useLocation()
  return (
    <div className='flex flex-col min-h-full bg-stone-50'>
      <div className='flex-1'>
        {!WithoutNavBar.includes(location.pathname) && <NavBar/>}
        
        <div className='pt-10'>
          <ScrollToTop>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/Login' element={<Login />} />
              <Route exact path='/Registro' element={<Register />} />
              <Route exact path='/Inicio' element={<RequiredAuth><InicioBanco /></RequiredAuth>} />
              <Route exact path='/CambiarContrasena' element={<CambiarContrasena />} />
              <Route exact path='/Pagos' element={<RequiredAuth><Pagos /></RequiredAuth>} />
              <Route exact path='/Servicios/Electricidad' element={<RequiredAuth><Electricidad /></RequiredAuth>} />
              <Route exact path='/Servicios/Telefonica' element={<RequiredAuth><Telefonica /></RequiredAuth>} />
              <Route exact path='/Servicios/Internet' element={<RequiredAuth><Internet /></RequiredAuth>} />
              <Route exact path='/Servicios/Electricidad/:id' element={<RequiredAuth><PagoElectricidad /></RequiredAuth>} />
              <Route exact path='/Servicios/Telefonica/:id' element={<RequiredAuth><PagoTelefonico /></RequiredAuth>} />
              <Route exact path='/Servicios/Internet/:id' element={<RequiredAuth><PagoInternet /></RequiredAuth>} />
              <Route exact path='/Servicios/Electricidad/:id/:numCuenta' element={<RequiredAuth><PagoElectricidad /></RequiredAuth>} />
              <Route exact path='/Servicios/Telefonica/:id/:numCuenta' element={<RequiredAuth><PagoTelefonico /></RequiredAuth>} />
              <Route exact path='/Servicios/Internet/:id/:numCuenta' element={<RequiredAuth><PagoInternet /></RequiredAuth>} />
              <Route exact path='*' element={<ErrorPage />} />
            </Routes>
          </ScrollToTop>
        </div>
      </div>
    </div>
  )
}

export default App
