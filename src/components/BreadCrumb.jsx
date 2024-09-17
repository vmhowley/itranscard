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
function BreadCrumb({crumbsData}) {
  const {pathname} = useLocation();
  const data = crumbsData
  console.log(data)
  return (
    <Breadcrumb className='fixed z-50 hidden pb-6 left-80 top-6 md:flex'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className='capitalize' asChild>
            <Link to='/'><HomeIcon className='w-4'/></Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      {crumbsData.map((data)=> 
        <BreadcrumbItem key={data.id}>
          <BreadcrumbLink className='capitalize' asChild>
            <Link href='#'>{data.name}</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator className={`${data.name ? 'flex' : 'hidden'}`}/>
        </BreadcrumbItem>
      )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumb
