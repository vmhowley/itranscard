import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SideBar from './components/SideBar'
import Home from './routes/Home'
import AuthProvider from './hooks/Authprovider'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import BreadCrumb from './components/BreadCrumb'

function App() {

  return (
    
    <Router>
      <AuthProvider>
      <div className='grid sm:flex'>
        <SideBar/>
        <div className='p-5 sm:pt-40'>
        <BreadCrumb/>
      <Routes > 
        <Route path='/login' element={<Login/>}/>
        <Route element={<PrivateRoute/>}> 
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Home/>}/>
        </Route>
        <Route path='*' element={<div className='bg-white inset-0 fixed z-50 flex place-content-center place-items-center  '> <div className='bg-black text-red-900 font-bold '><Link to={'/'}>Ir Inicio</Link></div></div>}/>
      </Routes>
        </div>
      </div>
    </AuthProvider>
    </Router>
  )
}

export default App
