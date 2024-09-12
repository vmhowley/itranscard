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
import { HomeIcon } from '@heroicons/react/24/outline';
import { Home } from 'lucide-react';
function BreadCrumb({path1,path2,path3}) {
  const {pathname} = useLocation();
  const myArray = pathname.split("/")
  
  return (
    <Breadcrumb className='hidden pb-6 md:flex '>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className='capitalize' asChild>
            <Link to='/'><HomeIcon className='w-4'/></Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className='capitalize' asChild>
            <Link href='#'>{path2}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={`${path2 ? '' : 'hidden'}`} />
        <BreadcrumbItem className='capitalize'>
          <BreadcrumbPage>{myArray[3]}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumb
