import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import Home from './routes/Home'
import AuthProvider from './hooks/Authprovider'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <AuthProvider>
      <div className='grid sm:flex'>
        <SideBar/>
        <div className='p-4 sm:pt-16'>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route element={<PrivateRoute/>}> 
        <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
        </div>
      </div>
    </AuthProvider>
    </Router>
  )
}

export default App
