import { useState, useEffect } from 'react'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Alert,
} from '@material-tailwind/react'
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  Bars3BottomLeftIcon,
  HomeModernIcon,
  XMarkIcon,
  CubeTransparentIcon,

} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'

import logo from '../assets/logo.png'
import { AccordionDetails } from '@mui/material'
import LangButton from './LangButton'
import { motion } from 'framer-motion'
export default function Sidebar() {

  const { t, i18next } = useTranslation();

  const [open, setOpen] = useState(true)
  const [navOpen, setNavOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(true)


 
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }
  const handleNav = () => {
    setNavOpen(!navOpen)
  }



  return (
    <>
      <motion.Card
        className={`fixed overflow-scroll w-full md:overflow-y-auto md:fixed md:h-[calc(100%)]  sm:rounded-none  md:max-w-[220px] lg:max-w-[280px] z-30 shadow  shadow-white-900/5 transition-all   bg-background md:translate-x-0 `}
        initial={{opacity: 100}}
        animate={{ opacity: 0 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      >
        <div className={`flex justify-around items-center flex-row-reverse`} >

        <button
          className={` justify-center w-12 h-12   p-2  md:relative md:hidden   `}
          onClick={handleNav}
          >
            {navOpen ?  <XMarkIcon className={`duration-1000 transition-all ease-in-out delay-200 ${navOpen ? "visible opacity-100 ":"invisible opacity-0  "}`}/> : <Bars3BottomLeftIcon className={`delay-500 duration-500 transition-all ease-in-out ${navOpen ? "opacity-0 invisible" :"opacity-100 visible"}`}/>}
        </button>
        
        <div className={`flex gap-4 p-4 pb-5 mb-2`}>
          <img
            src='https://ibsystems.com.do/assets/images/logo-light.png'
            alt='brand'
            className='w-64 dark:hidden block'
            />
          <img
            src={logo}
            alt='brand'
            className='w-64 hidden dark:block'
            />
        </div>
            </div>
        

        <div
          className={` transition-all ease-in-out duration-300  ${
            navOpen
              ? '   opacity-100  h-screen'
              : 'opacity-0 h-0 -translate-x-96  md:opacity-100 md:translate-x-0'
          }`}
        >
          <div className='p-2 '>
            <Input
              icon={<MagnifyingGlassIcon className='w-5 h-5' />}
              label='Search'
            />
          </div>
          <List className='text-sm'>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform   ${
                    open === 1 ? 'rotate-180' : ''
                  }`}
                />
              }
            >
              <Link to={'/'}>
                <ListItem
                  className='text-sm font-semibold text-muted-foreground '
                >
                  <ListItemPrefix>
                    <HomeModernIcon className='w-5 h-5 text-primary' />
                  </ListItemPrefix>
                  {t('Inicio')}
                </ListItem>
              </Link>
              <ListItem  className='p-0 ' selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className='p-3 border-b-0 text-muted-foreground'
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className='w-5 h-5 text-primary' />
                  </ListItemPrefix>
                  <Typography className='mr-auto text-sm font-semibold text-muted-foreground'>
                    {t('Modulo Seguridad')}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className='py-1'>
                <List className='p-0'>
                  <Link to={'mod_lealtad'}>
                    <ListItem  onClick={handleNav} className='text-sm text-muted-foreground'>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                      </ListItemPrefix>
                      {t('Sistema de Lealtad')}
                      </ListItem>
                  </Link>
                  <Link to={'embozado'}>
                    <ListItem  onClick={handleNav} className='text-muted-foreground'>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                      </ListItemPrefix>
                      {t('Sistema de Embozado')}
                    </ListItem>
                  </Link>
                  <Link to={'subagente'}>
                    <ListItem   onClick={handleNav} className='text-muted-foreground'>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                      </ListItemPrefix>
                      {t('Sub-agentes')}
                    </ListItem>
                  </Link>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t('Modulo Caja')}
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t('Castigos y Descargos')}
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t('Pago Tarjeta')}
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t('Pago Prestamos')}
                  </ListItem>
                  <ListItem   onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t('Codigos de Prefijos')}
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t('Cheques Devueltos')}
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t('Cheques en transito')}
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    {t("Conexion Autorizador")}
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? 'rotate-180' : ''
                  }`}
                />
              }
            >
              <ListItem className='p-0' selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className='p-3 border-b-0 text-muted-foreground'
                >
                  <ListItemPrefix>
                    <ShoppingBagIcon className='w-5 h-5 text-primary ' />
                  </ListItemPrefix>
                  <Typography className='mr-auto text-sm font-semibold '>
                    E-Commerce
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className='py-1'>
                <List className='p-0'>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <div className='sm:hidden'>

            <hr className='my-2 border-blue-gray-300' />
            <ListItem className='text-muted-foreground'>
              <ListItemPrefix>
                <InboxIcon className='w-5 h-5 text-primary' />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value='14'
                  size='md'
                  className='rounded-full bg-primary'
                  />
              </ListItemSuffix>
            </ListItem>
            <ListItem className='text-muted-foreground'>
              <ListItemPrefix>
                <UserCircleIcon className='w-5 h-5 text-primary' />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem className='text-muted-foreground'>
              <ListItemPrefix>
                <Cog6ToothIcon className='w-5 h-5 text-primary' />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem className='text-muted-foreground'>
              <ListItemPrefix>
                <PowerIcon className='w-5 h-5 text-primary' />
              </ListItemPrefix>
              Log Out
            </ListItem>
            </div>
          </List>
        </div>
          {/* <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          IBSYSTEMS ADS
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          En este apartado se representaran anuncios IBSYSTEMS  y o actualizaciones del sistema 
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Declinar
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Actualizar
          </Typography>
        </div>
      </Alert> */}
      </motion.Card>
      <div className='fixed  z-20 bg-background justify-between hidden w-full p-1 font-semibold h-16 shadow-sm sm:flex text-foreground'>
        <div className='fixed right-16 items-center font-semibold h-16 shadow-sm sm:flex text-foreground p-1'>
        <LangButton/>
        <div onClick={handleMenu}  className='fixed flex items-center p-1 border border-red-700/20 rounded-full cursor-pointer right-3'>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="https://ai-avatar-generator.com/avatars/1930.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
              
            </DropdownMenuTrigger>
          
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
        </div>
        </div>
      </div>
    </>
  )
}
