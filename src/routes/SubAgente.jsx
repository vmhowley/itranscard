import BreadCrumb from '@/components/BreadCrumb'
import Cards from '@/components/Cards'
import { motion } from 'framer-motion'
function SubAgente() {
  const crumbsData = [
    {
        id:"1",
        name:"Sistema de SubAgente",
    },
]

  const CardsData = [
    {
      id: 1,
      name: 'Pagos',
      path:"pagos"

    },
    {
      id: 2,
      name: 'Compras',
      path:"compras"

    },
    {
      id: 3,
      name: 'Retiros',
      path:"retiros"

    },

  ]
  const CardsData2 = [
    {
      id: 1,
      name: 'Prestamos',
      path:"prestamos"

    },
    {
      id: 2,
      name: 'Tc Credito',
      path:"pagotc"

    },
    {
      id: 3,
      name: 'Cuenta de Debito',
      path:"pagodb"

    },

  ]

  return (
    <div className='h-full '>
      <BreadCrumb crumbsData={crumbsData} />
    <motion.div className='grid grid-flow-col'
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}>
        <div className='grid gap-6'>
        <h1 className='flex text-xl font-bold bg-black text-muted-foreground min-h-14'>Transacciones de Tarjeta</h1>
        <Cards CardsData={CardsData} ubi={''} />
        </div>
        <div className='grid gap-6 h-14'>
        <h1 className='text-xl font-bold bg-black text-muted-foreground min-h-14'>Consultas</h1>
        <Cards CardsData={CardsData2} ubi={''} />
        </div>

    </motion.div>
    </div>
  )
}

export default SubAgente
