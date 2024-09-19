import BreadCrumb from '@/components/BreadCrumb'
import Cards from '@/components/Cards'
import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Opacity } from '@mui/icons-material'
function Embozado() {
  const crumbsData = [
    {
        id:"1",
        name:"Sistema de Embozado",
    },
]

  const CardsData = [
    {
      id: 1,
      name: 'Consultar',
      path:"consultas",
      desc:"Gestione todos los embozos realizados.",
      button:"Iniciar"
    },
    {
      id: 2,
      name: 'Procesos',
      path:"procesos",
      desc:"Iniciar el proceso de embozado",
      button:"Iniciar"

    },
    {
      id: 3,
      name: 'Mantenimiento',
      path:"mantenimiento",
      desc:"",
      button:""

    },

  ]

  return (
    <>
      <BreadCrumb  crumbsData={crumbsData}/>
    <motion.div className='flex  justify-center pt-10'
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}>
      <Cards CardsData={CardsData} />
    </motion.div>
    </>
  )
}

export default Embozado
