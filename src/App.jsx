import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
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
        <Route path='login' element={<Login/>}/>
        <Route element={<PrivateRoute/>}> 
        <Route path='Dashboard' element={<Home/>}/>
        </Route>
      </Routes>
        </div>
      </div>
    </AuthProvider>
    </Router>
  )
}

export default App
