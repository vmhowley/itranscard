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
  const {pathname} = useLocation();
  const [path1, setPath1] = useState('Modulo Lealtad')
  const [path2, setPath2] = useState('Parametros')
  const [path3, setPath3] = useState('')


  useEffect(()=>{
    if (pathname === '/'){
      setPath1('home')
    }else{
      setPath1(pathname )
    }
  },[])

  return (
    <Breadcrumb className='fixed hidden top-10 md:flex p-4'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='#'>{path1}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={`${path2 ? '' : 'hidden'}`} />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='#'>{path2}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={`${path3 ? '' : 'hidden'}`} />
        <BreadcrumbItem>
          <BreadcrumbPage>{path3}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumb
