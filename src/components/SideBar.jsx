import { useState } from 'react'
import {
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
  GlobeAltIcon,

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
import LangButton from './LangButton'
import { motion } from 'framer-motion'
import ThemeButton from './ThemeButton'
export default function Sidebar() {

  const { t } = useTranslation();

  const [open, setOpen] = useState(true)
  const [navOpen, setNavOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(true)
  const [scrollTop, setScrollTop] = useState(0);

  
  const handleScroll = event => {
    setScrollTop(window.scrollY);
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }
  const handleNav = () => {
    setNavOpen(!navOpen)
  }
  
  window.addEventListener('scroll', handleScroll);    console.log(scrollY);


  return (
    <div >
    {location.pathname != '/' ?  
    <>
          <div
        className={`fixed overflow-scroll w-full md:overflow-y-auto md:fixed md:h-[calc(100%)]  sm:rounded-none  md:max-w-[220px] lg:max-w-[280px] z-30 shadow  shadow-white-900/5 transition-all   bg-background duration-75 md:translate-x-0 `}
      >
        
        <div className={`flex sm:justify-center pl-6 sm:p-0 justify-between items-center  flex-row-reverse`} >
<div className='flex flex-row-reverse items-center'>

        <button
          className={` justify-center w-12 h-12   p-2  md:relative md:hidden   `}
          onClick={handleNav}
          >
            {navOpen ? <XMarkIcon className={` transition-all   ${navOpen ? "visible opacity-100 ":"invisible opacity-0  "}`}/> : <Bars3BottomLeftIcon className={` transition-all ease-in-out ${navOpen ? "opacity-0 invisible" :"opacity-100 visible"}`}/>}
        </button>
        <div className='flex gap-2 sm:hidden  h-max  '>
        <ThemeButton/>
        <LangButton />
        </div>
            </div>
        <div className={`flex gap-4 sm:pb-4 sm:pt-4 mb-2`}>
          <img
            src='https://ibsystems.com.do/assets/images/logo-light.png'
            alt='brand'
            className='w-40 sm:w-56 dark:hidden block'
            />
          <img
            src={logo}
            alt='brand'
            className='w-40 sm:w-56 hidden dark:block'
            />
        </div>
            </div>
        

        <div
          className={` transition-all ease-in-out duration-300   ${
            navOpen
              ? '   opacity-100  '
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
              <Link to={'/dashboard'}>
                <ListItem
                  className='text-sm font-semibold text-muted-foreground '
                >
                  <ListItemPrefix>
                    <HomeModernIcon className='w-5 h-5 text-primary' />
                  </ListItemPrefix>
                  {t('Escritorio')}
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
      </div>
      <div className={`shadow hidden md:block w-full bg-background h-14 fixed z-20 transition-all duration-300 delay-100 ${scrollY >= 100 ? '-translate-y-4' : '-translate-x-0'} `}>
        <div className={`fixed  right-2 items-center justify-center font-semibold   sm:flex text-foreground p-2 transition-all duration-300 delay-100 gap-2 ${scrollY >= 100 ? 'translate-y-2 ' : '-translate-x-0'} `}>
        <div className='flex gap-2  '>
          <ThemeButton/>
        <LangButton />
          </div>
        <div onClick={handleMenu}  className={` flex items-center border border-red-700/20 rounded-full cursor-pointer right-3 ${scrollY >= 10 ? 'p-0  ':'p-1'} `}>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="https://ai-avatar-generator.com/avatars/1930.jpg"
                  width={scrollY >= 100  ? '30' :'36'}
                  height={scrollY >= 100  ? '30' :'36'}
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
   :''  }
  </div>
  )
}
