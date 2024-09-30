import './App.css'
import FunctionComponent from './components/FunctionComponent'
import { HighOrderComponent } from './components/HighOrderComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import Dashboard from './routes/Dashboard'
import AuthProvider from './hooks/Authprovider'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Lealtad from './routes/Lealtad'
import Embozado from './routes/Embozado'
import ConsultaEmbozado from './components/ConsultaEmbozado'
import { AnimatePresence } from 'framer-motion'
import SubAgente from './routes/SubAgente'
import Banner from './components/Banner'
import { useTranslation } from 'react-i18next'
import Home from './routes/Home'

function App() {
  const { t } = useTranslation()
  return (
    <Router>
      <AuthProvider>
        <SideBar />
        <Banner />
        <div
          id='root'
          className='relative inset-0 flex justify-center gap-3 pt-36 overflow-auto   md:ml-72 '
        >
          <Routes>
              <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            {/* ----------------------------==Rutas privadas==---------------------------------- */}
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
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
    </Router>
  )
}
export default App
