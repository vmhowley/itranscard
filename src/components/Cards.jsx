import BreadCrumb from '@/components/BreadCrumb'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cards({CardsData}) {

 
  return (
    <>
    <div className='grid sm:h-[calc(90%-2rem)] w-full xl:flex-wrap  xl:items-center gap-6 justify-center font-bold xl:flex  '>
      {CardsData.map((card)=>
        <Link key={card.id} to={'consultas'}>
        <Button className='flex items-center justify-center h-40 p-5 tracking-wider transition-all ease-in-out border text-foreground w-60 bg-card sm:w-40 rounded-xl hover:scale-125'>
            {card.name}
        </Button>
        </Link>
)}
    </div>
    </>
  )
}

export default Cards