import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import handSwipe from '../assets/handswipe.gif'
export function CarouselSpacing({CardsData, ubi}) {
  const {t} = useTranslation()
 
  return (
    <>
    <Carousel className=" max-w-full">
      <CarouselContent className="-ml-1">
      {CardsData.map((card,index)=>
          <CarouselItem key={index} className={`pl-1 ${CardsData.length > 3 ? 'md:basis-1/3 lg:basis-1/3':'md:basis-1/4 lg:basis-1/4'}  `}>
            <div className="p-1">
        <div key={card.id}
 className={`items-center grid justify-center p-1 h-40 transition-all ease-in-out border text-foreground xl:w-60 xl:h-40 bg-card ${ubi === 'vertical' ? 'sm:w-60 h-24':'sm:w-40'} rounded-xl `}>
            <h1 className='grid justify-center items-center font-bold content-center text-center'>{t(card.name)}</h1>
            <h1 className='grid justify-center items-center content-center text-center text-sm text-muted-foreground'>{t(card.desc)}</h1>
            <Link to={card.path} className='text-white dark:text-black bg-primary justify-center flex rounded-xl content-center p-1'><button className='w-16'>
            {t(card.button)}</button></Link>
        </div>
            </div>
          </CarouselItem>
)}
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   
</>
  )
}
