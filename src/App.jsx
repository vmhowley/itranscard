import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import Home from './routes/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='flex gap-2'>
        <SideBar/>
        <div className='p-4 pt-24'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
