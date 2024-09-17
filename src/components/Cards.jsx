import BreadCrumb from '@/components/BreadCrumb'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cards({CardsData, ubi}) {

 console.log(ubi)
  return (
    <>
    <div className={`grid xl:flex-wrap gap-6 font-bold ${ubi === 'vertical' ? 'xl:grid' : 'xl:flex'} `}>
      {CardsData.map((card)=>
        <Link   key={card.id} to={card.path}>
        <Button 
        className={`items-center flex justify-center p-5 tracking-wider transition-all ease-in-out border text-foreground min-w-40  min-h-32 md:max-w-36   xl:w-60 xl:h-40   bg-card ${ubi === 'vertical' ? 'sm:w-60 h-24':'sm:w-40'} rounded-xl hover:scale-125`}>
            {card.name}
        </Button>
        </Link>
)}
    </div>
    </>
  )
}

export default Cards