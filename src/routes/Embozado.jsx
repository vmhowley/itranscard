import BreadCrumb from '@/components/BreadCrumb'
import Cards from '@/components/Cards'
import { CarouselSpacing } from '@/components/CarouselSpacing'
import { motion } from 'framer-motion'
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
      desc:"Modifica Los procesos de embozado ",
      button:"Iniciar"

    },

  ]
  return (
    <>
      <BreadCrumb  crumbsData={crumbsData}/>
    <motion.div className=''
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}>
      <CarouselSpacing CardsData={CardsData} />
     
    </motion.div>
    </>
  )
}

export default Embozado
