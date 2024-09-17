import BreadCrumb from '@/components/BreadCrumb'

function Lealtad() {
  const crumbsData = [
    {
        id:"1",
        name:"Modulo de Lealtad",
    },
    
]
  return (
    <> 
    <BreadCrumb crumbsData={crumbsData}/>
    <div className='flex '>Lealtad</div>
    </>
  )
}

export default Lealtad