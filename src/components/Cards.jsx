import  { useState } from 'react'
import { Link } from 'react-router-dom'

function Cards({CardsData, ubi}) {

  return (
    <>
    <div className={`grid  gap-6  ${ubi === 'vertical' ? 'xl:grid' : 'xl:flex'} `}>
      {CardsData.map((card)=>
        <div key={card.id}
        className={`items-center grid justify-center p-1 h-40  transition-all ease-in-out border text-foreground min-w-40  min-h-32 md:max-w-56   xl:w-60 xl:h-40   bg-card ${ubi === 'vertical' ? 'sm:w-60 h-24':'sm:w-40'} rounded-xl `}>
            <h1 className='grid justify-center items-center font-bold content-center text-center'>{card.name}</h1>
            <h1 className='grid justify-center items-center content-center text-center text-sm text-muted-foreground '>{card.desc}</h1>
            <Link to={card.path} className='text-white dark:text-black bg-primary justify-center flex rounded-xl content-center p-1'><button className='w-16'>
            {card.button}</button></Link>
        </div>
)}
    </div>
    </>
  )
}

export default Cards