import BreadCrumb from '@/components/BreadCrumb'
import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Embozado() {
  return (
    <>
            <BreadCrumb path2={'Sistema de Embozado'} />
    <div className='grid sm:h-[calc(90%-2rem)] w-full xl:flex-wrap  xl:items-center gap-6 justify-center font-bold xl:flex  '>
        <Link to={'consultas'}>
        <Button className='flex items-center justify-center h-40 p-5 tracking-wider transition-all ease-in-out border text-foreground w-60 bg-card sm:w-40 rounded-xl hover:scale-125'>
            Consultas
        </Button>
        </Link>
        <Button className='flex items-center justify-center h-40 p-5 tracking-wider transition-all ease-in-out border sm:w-40 w-60 rounded-xl hover:scale-125 bg-card text-foreground'>
            Mantenimiento
        </Button>
        <Button className='flex items-center justify-center h-40 p-5 tracking-wider transition-all ease-in-out border w-60 sm:w-40 rounded-xl hover:scale-125 bg-card text-foreground'>
            Procesos
        </Button>
    </div>
    </>
  )
}

export default Embozado