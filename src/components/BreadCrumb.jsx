import { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { HomeIcon } from '@heroicons/react/24/outline';
function BreadCrumb({crumbsData}) {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = event => {
    setScrollTop(window.scrollY);
  };
  window.addEventListener('scroll', handleScroll);    

  return (
    <Breadcrumb className={`fixed z-50  pb-6 left-80 top-6 hidden md:flex duration-300 delay-100 ${scrollY >= 10 ? '-translate-y-5': 'md:flex' }`}>
      <BreadcrumbList >
      <BreadcrumbItem>
      <BreadcrumbItem>
          <BreadcrumbLink className='capitalize' asChild>
            <HomeIcon className='w-4'/>
          </BreadcrumbLink>
        </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
      {crumbsData.map((data)=>
       
       <BreadcrumbItem  key={data.id} >
          <BreadcrumbLink className='capitalize' >
            {data.name}
          </BreadcrumbLink>
      
          <BreadcrumbSeparator className={`${!data.name ? 'hidden':'block'}`}/>
        </BreadcrumbItem>
      
    )}

      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumb
