import {useState} from "react";
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
  Alert,
  Input,
} from "@material-tailwind/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
 


export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 const handleNav = () => {
  setNavOpen(!navOpen);
}

  return (
<>
    <Card className={`sm:h-[calc(100vh)]  rounded-none w-screen sm:w-full sm:max-w-[275px]  z-50 shadow-xl  shadow-white-900/5 transition-all  md:sticky sm:relative bg-background sm:translate-x-0 `}>
      <button className={`fixed justify-center w-8 bg-card rounded right-4 top-4 sm:relative md:hidden duration-500 ${!navOpen ? 'rotate-180 ':'block'}`} onClick={handleNav}><Bars3BottomLeftIcon/></button>
      <div className="flex items-center gap-4 p-4 mb-2">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="w-8 h-8 invert" />
        <Typography variant="h5" color="red">
          IBSYSTEMS
        </Typography>
      </div>
      <div className={` transition-all ease-in-out duration-300 ${navOpen ? 'visible h-screen opacity-100 ':'invisible opacity-0 h-0 -translate-y-96 md:visible md:opacity-100 md:translate-y-0'}`}>
      <div className="p-2 ">
        <Input icon={<MagnifyingGlassIcon className="w-5 h-5" />} label="Search" />
      </div>
      <List className="">
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform  ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem  className="p-0 " selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="p-3 border-b-0">
              <ListItemPrefix>
                <PresentationChartBarIcon color="red" className="w-5 h-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-semibold text-black dark:text-foreground">
                Modulo Lealtad
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className='text-muted-foreground'>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem className='text-muted-foreground'>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem className='text-muted-foreground'>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
          
        >
          
          <ListItem  className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="p-3 border-b-0">
              <ListItemPrefix>
                <ShoppingBagIcon  color="red" className="w-5 h-5 " />
              </ListItemPrefix>
              <Typography  className="mr-auto font-semibold text-black dark:text-white">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className='text-muted-foreground'>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem className='text-muted-foreground'>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-300" />
        <ListItem className='text-muted-foreground'>
          <ListItemPrefix>
            <InboxIcon color="red" className="w-5 h-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip  value="14" size="sm"  color="red" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className='text-muted-foreground'>
          <ListItemPrefix>
            <UserCircleIcon color="red" className="w-5 h-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className='text-muted-foreground'>
          <ListItemPrefix>
            <Cog6ToothIcon  color="red" className="w-5 h-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className='text-muted-foreground'>
          <ListItemPrefix>
            <PowerIcon color="red" className="w-5 h-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="w-12 h-12 mb-4" />
        <Typography variant="h6" className="mb-1">
          Actualizar a Pro
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Actualiza tu Licencia a ItransCard PRO para tener acceso a los demas Modulos de ItransCard
        </Typography>
        <div className="flex gap-3 mt-4">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Cerrar
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Actualizar ahora
          </Typography>
        </div>
      </Alert>
      </div>
    </Card>
    </>
  );
}