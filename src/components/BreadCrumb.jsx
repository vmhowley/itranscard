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
  const [pathName1, setPathName1] = useState()
  const [pathName2, setPathName2] = useState()
  const [pathName3, setPathName3] = useState()
  const [pathName4, setPathName4] = useState()

  useEffect(()=>{
   
      const pathname = location.pathname.substring()
      const firstLetter = pathname.substring(1,2)
      const position2 = pathname.substring(1).search("/")
      const cap = firstLetter.toUpperCase()
      const last = pathname.substring(2, position2+1 )
      const capitalize = cap + last 
      setPathName1(capitalize)
   
      const pathname2 = pathname.substring(position2)
      const firstLetter2 = pathname2.substring(2, 3)
      console.log(firstLetter2)
      const position3 = pathname2.search("/")
      const cap2 = firstLetter2.toUpperCase()
      const last2 = pathname2.substring(3, position2-1)
      const capitalize2 = cap2 + last2
      console.log(last2)
      setPathName2(capitalize2)
   
      // const pathname3 = pathname2.substring(position3)
      // const firstLetter3 = pathname3.substring(1,2)
      // const position4 = pathname3.substring(1).search("/")
      // const cap3 = firstLetter3.toUpperCase()
      // const last3 = pathname3.substring(2, position3)
      // const capitalize3 = cap3 + last3
      // setPathName3(capitalize3)
 
  },[])

  return (
    <Breadcrumb className='fixed hidden top-10 md:flex'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='#'>{pathName1}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='#'>{pathName2}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pathName3}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumb
