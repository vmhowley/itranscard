import { useState } from 'react'
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


export default function Sidebar() {
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
      <Card
        className={`fixed w-full md:overflow-y-auto md:fixed md:h-[calc(100%)]  sm:rounded-none  md:max-w-[220px] lg:max-w-[280px] z-50 shadow  shadow-white-900/5 transition-all   bg-background md:translate-x-0 `}
      >
        <div className={`flex justify-around items-center flex-row-reverse`} >

        <button
          className={` justify-center w-10 h-10  rounded  md:relative md:hidden duration-500 transition-all ease-in-out `}
          onClick={handleNav}
          >
          <Bars3BottomLeftIcon />
        </button>
        <div className={`flex gap-4 p-4 pb-5 mb-2`}>
          <img
            src='https://ibsystems.com.do/assets/images/logo-light.png'
            alt='brand'
            className='w-64'
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
                  onClick={handleNav}
                  className='text-sm font-semibold text-muted-foreground '
                >
                  <ListItemPrefix>
                    <HomeModernIcon className='w-5 h-5 text-primary' />
                  </ListItemPrefix>
                  Home
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
                    Modulo Seguridad
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
                      Modulo Lealtad
                    </ListItem>
                  </Link>
                  <Link to={'embozado'}>
                    <ListItem  onClick={handleNav} className='text-muted-foreground'>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                      </ListItemPrefix>
                      Sistema de Embozado
                    </ListItem>
                  </Link>
                  <Link to={'subagente'}>
                    <ListItem   onClick={handleNav} className='text-muted-foreground'>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                      </ListItemPrefix>
                      Sub-agentes
                    </ListItem>
                  </Link>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Modulo Caja
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Castigos y Descargos
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Pago Tarjeta
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Pago Prestamos
                  </ListItem>
                  <ListItem   onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Codigos de Prefijos
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Cheques Devueltos
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Cheques en transito
                  </ListItem>
                  <ListItem  onClick={handleNav} className='text-muted-foreground'>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='w-5 h-3' />
                    </ListItemPrefix>
                    Conexion Autorizador
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
          {/* <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="w-12 h-12 mb-4" />
        <Typography variant="h6" className="mb-1">
          Actualizar a Pro
          </Typography>
          <Typography variant="mdall" className="font-normal opacity-80">
          Actualiza tu Licencia a ItransCard PRO para tener acceso a los demas Modulos de ItransCard
          </Typography>
          <div className="flex gap-3 mt-4">
          <Typography
          as="a"
          href="#"
          variant="mdall"
          className="font-medium opacity-80"
          onClick={() => setOpenAlert(false)}
          >
          Cerrar
          </Typography>
          <Typography as="a" href="#" variant="mdall" className="font-medium">
          Actualizar ahora
          </Typography>
          </div>
      </Alert> */}
        </div>
      </Card>
      <div className='fixed z-50 justify-between hidden w-full p-1 font-semibold h-16 shadow-sm sm:flex text-foreground'>
        <div onClick={handleMenu}  className='fixed  flex items-center p-1 border border-red-700/20 rounded-full cursor-pointer right-3'>
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
    </>
  )
}
