import BreadCrumb from '@/components/BreadCrumb'
import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Embozado() {
  return (
    <div    className='sm:h-screen'>
            <BreadCrumb path2={'Sistema de Embozado'} />
    <div className='grid flex-wrap items-center justify-center h-full gap-6 font-bold sm:flex '>
        <Link to={'consultas'}>
        <Button className='flex items-center justify-center h-40 p-5 transition-all ease-in-out border w-60 sm:w-40 rounded-xl hover:scale-125'>
            Consultas
        </Button>
        </Link>
        <Button className='flex items-center justify-center h-40 p-5 transition-all ease-in-out border sm:w-40 w-60 rounded-xl hover:scale-125'>
            Mantenimiento
        </Button>
        <Button className='flex items-center justify-center h-40 p-5 transition-all ease-in-out border w-60 sm:w-40 rounded-xl hover:scale-125'>
            Procesos
        </Button>
       
       
        
    </div>
    </div>
  )
}

export default Embozado