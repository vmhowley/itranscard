import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SideBar from './components/SideBar'
import Home from './routes/Home'
import AuthProvider from './hooks/Authprovider'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import BreadCrumb from './components/BreadCrumb'
import NotFound from './components/NotFound'
import Lealtad from './routes/Lealtad'
import Embozado from './routes/Embozado'


function App() {

  return (
    
    <Router>
      <AuthProvider>
      
        <SideBar/>
        <div className='sm:ml-[276px] flex flex-col  p-5'>
      <Routes > 
        <Route path='/login' element={<Login/>}/>
        {/* ----------------------------==Rutas privadas==---------------------------------- */}

        <Route element={<PrivateRoute/>}> 
        <Route path='/' element={<Home/>}/>
        <Route path='/mod_lealtad' element={<Lealtad/>}/>
        <Route path='/embozado' element={<Embozado/>}/>
        <Route path='/embozado/consultas' element={<Embozado/>}/>
        
        {/*-----------------------------------== Fin de rutas Privadas==-------------------- */}
        
        </Route>
        
        {/*----------------------------------== Otras Rutas==----------------------------- */}
        <Route path='*' element={<NotFound/>}/>

        {/*----------------------------------==Fin de Otras Rutas==----------------------------- */}
      </Routes>
        </div>
    </AuthProvider>
    </Router>
  )
}

export default App
