import React, { useState } from 'react';
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
    <React.StrictMode>
    <Breadcrumb className={`fixed z-50  pb-6 left-80 top-6 hidden md:flex duration-300 delay-100 ${scrollY >= 10 ? '-translate-y-5': 'md:flex' }`}>
      <BreadcrumbList >
      <BreadcrumbItem>
          <BreadcrumbLink className='capitalize' asChild>
            <HomeIcon className='w-4'/>
          </BreadcrumbLink>
        </BreadcrumbItem>
          <BreadcrumbSeparator />
      {crumbsData.map((data)=>
      <div className='flex items-center content-center' key={data.id}>
       <BreadcrumbItem   >
            {data.name}
            <BreadcrumbLink className='capitalize' >
          </BreadcrumbLink>
        </BreadcrumbItem>
          <BreadcrumbSeparator className={`${!data.name ? 'hidden':'block'}`}/>
      </div>
    )}

      </BreadcrumbList>
    </Breadcrumb>
    </React.StrictMode>
  )
}
export default BreadCrumb
