import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import Home from './routes/Home'
import AuthProvider from './hooks/Authprovider'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import BreadCrumb from './components/BreadCrumb'
import NotFound from './components/NotFound'
import Lealtad from './routes/Lealtad'
import Embozado from './routes/Embozado'
import ConsultaEmbozado from './components/ConsultaEmbozado'
import { AnimatePresence } from 'framer-motion'
import SubAgente from './routes/SubAgente'

function App() {
  return (
    <Router>
      <AnimatePresence>
        <AuthProvider>
          <SideBar />
          <div className='fixed inset-0 z-0 flex justify-center gap-3 p-5 overflow-auto items pt-28 md:fixed md:pl-80 '>
            <Routes>
              <Route path='/login' element={<Login />} />
              {/* ----------------------------==Rutas privadas==---------------------------------- */}
              <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
                <Route path='/mod_lealtad' element={<Lealtad />} />
                <Route path='/embozado' element={<Embozado />} />
                <Route path='/subagente' element={<SubAgente />} />
                <Route
                  path='/embozado/consultas'
                  element={<ConsultaEmbozado />}
                />
                {/*-----------------------------------== Fin de rutas Privadas==-------------------- */}
              </Route>
              {/*----------------------------------== Otras Rutas==----------------------------- */}
              <Route path='*' element={<NotFound />} />
              {/*----------------------------------==Fin de Otras Rutas==----------------------------- */}
            </Routes>
          </div>
        </AuthProvider>
      </AnimatePresence>
    </Router>
  )
}
export default App
