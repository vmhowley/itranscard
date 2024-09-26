import BreadCrumb from '@/components/BreadCrumb'
import Cards from '@/components/Cards'
import { CarouselSpacing } from '@/components/CarouselSpacing'
import { motion } from 'framer-motion'
const crumbsData = [
  {
    id: '1',
    name: 'Sistema de SubAgente',
  },
]

const CardsData = [
  {
    id: 1,
    name: 'Pago de tarjeta',
    path: 'pagotc',
    desc:"Realiza pagos de tarjeta de credito",
    button:"Iniciar"
  },
  {
    id: 2,
    name: 'Pago de Prestamos',
    path: 'pagoprest',
    desc:"Gestiona tus prestamos activos",
    button:"Iniciar"

  },
  {
    id: 3,
    name: 'Retiros',
    path: 'Retiros',
    desc:"Consulta retiros de efectivo",
    button:"Iniciar"

  },
  {
    id: 4,
    name: 'Compras',
    path: 'compras',
    desc:"Consulta tus ultimas transacciones",
    button:"Iniciar"

  },
]
const CardsData2 = [
  {
    id: 1,
    name: 'Prestamos',
    path: 'prestamos',
    desc:"Consulta tus ultimas Transacciones",
    button:"Acceder",
  },
  {
    id: 2,
    name: 'Tarjeta de Credito',
    path: 'pagotc',
    desc:"Consulta tus ultimas Transacciones",
    button:"Acceder",

  },
  {
    id: 3,
    name: 'Cuenta de Ahorros',
    path: 'pagodb',
    desc:"Consulta tus ultimas Transacciones",
    button:"Acceder"
  },
]

function SubAgente() {
  

  return (
    <>
    <BreadCrumb crumbsData={crumbsData} />
    <motion.div
      className='w-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
      <div className='flex gap-8 sm:grid sm:justify-center sm:gap-20 '>
        <div className='sm:justify-center sm:grid sm:w-full'>
          <div className='pb-6 text-xl font-bold md:text-center text-muted-foreground'>
            Transacciones
          </div>
          <CarouselSpacing CardsData={CardsData} />
        </div>
        <div className=' sm:justify-center sm:grid sm:w-full'>
          <div className='pb-6 font-bold text-xl md:text-center text-muted-foreground'>
            Consultas
          </div>
          <CarouselSpacing CardsData={CardsData2} />

          {/* <Cards CardsData={CardsData2} ubi={''} /> */}
        </div>
      </div>
    </motion.div>
      </>
  )
}

export default SubAgente
