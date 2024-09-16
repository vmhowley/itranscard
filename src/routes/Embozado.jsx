import BreadCrumb from '@/components/BreadCrumb'
import Cards from '@/components/Cards'
import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

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
    },
    {
      id: 2,
      name: 'Procesos',
    },
    {
      id: 3,
      name: 'Mantenimiento',
    },

  ]

  return (
    <>
      <BreadCrumb crumbsData={crumbsData}/>
      <Cards CardsData={CardsData} />
    </>
  )
}

export default Embozado
