import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
export function CarouselSpacing({CardsData, ubi}) {
  const longi = CardsData.length
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="-ml-1">
      {CardsData.map((card,index)=>
          <CarouselItem key={index} className={`pl-1 md:basis-1/4 lg:basis-1/${longi}`}>
            <div className="p-1">
        <div key={card.id}
        className={`items-center grid justify-center p-1 h-40 transition-all ease-in-out border text-foreground xl:w-60 xl:h-40 bg-card ${ubi === 'vertical' ? 'sm:w-60 h-24':'sm:w-40'} rounded-xl `}>
            <h1 className='grid justify-center items-center font-bold content-center text-center'>{card.name}</h1>
            <h1 className='grid justify-center items-center content-center text-center text-sm text-muted-foreground'>{card.desc}</h1>
            <Link to={card.path} className='text-white dark:text-black bg-primary justify-center flex rounded-xl content-center p-1'><button className='w-16'>
            {card.button}</button></Link>
        </div>
            </div>
          </CarouselItem>
)}
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
