import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion} from 'framer-motion'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
export function CarouselSpacing({CardsData, ubi}) {
  const longi = CardsData.length
  const {t} = useTranslation()
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <>
    
    <Carousel className="w-full max-w-full"
    animate={container}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }} 
    >
      <CarouselContent className="-ml-1">
      {CardsData.map((card,index)=>
          <CarouselItem key={index} className={`pl-1 md:basis-1/4 lg:basis-1/3 basis-2/3`}>
            <div className="p-1">
        <motion.div key={card.id}
        initial={{x:0}}
    animate={{ x: -100 }}
    exit={{x:100}}
    transition={{ delay: 1 }}
 className={`items-center grid justify-center p-1 h-40 transition-all ease-in-out border text-foreground xl:w-60 xl:h-40 bg-card ${ubi === 'vertical' ? 'sm:w-60 h-24':'sm:w-40'} rounded-xl `}>
            <h1 className='grid justify-center items-center font-bold content-center text-center'>{t(card.name)}</h1>
            <h1 className='grid justify-center items-center content-center text-center text-sm text-muted-foreground'>{t(card.desc)}</h1>
            <Link to={card.path} className='text-white dark:text-black bg-primary justify-center flex rounded-xl content-center p-1'><button className='w-16'>
            {t(card.button)}</button></Link>
        </motion.div>
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
