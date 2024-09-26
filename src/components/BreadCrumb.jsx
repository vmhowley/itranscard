import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { HomeIcon } from '@heroicons/react/24/outline';
function BreadCrumb({crumbsData}) {
  return (
    <Breadcrumb className='fixed z-50 hidden pb-6 left-80 top-6 md:flex'>
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
