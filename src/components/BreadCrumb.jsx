import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function BreadCrumb() {
  const location = useLocation();
  const [pathName, setPathName] = useState()

  useEffect(()=>{
    if (location.pathname === '/') {
      setPathName('Inicio')
    }else{
      const firstLetter = location.pathname.substring(1,2)
      const cap = firstLetter.toUpperCase()
      const last = location.pathname.substring(2)
      const capitalize = cap + last
    setPathName(capitalize)
    }
  },[])

  return (
    <Breadcrumb className='fixed hidden top-10 md:flex'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='#'>{pathName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='#'>Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Edit Product</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumb
