import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hook"
// import { fetchProducts } from "../features/product/productThunk"
import { Loader2 } from "lucide-react"
import { useGetAllProductsQuery } from "../features/product/productThunk"

const Product = () => {
    // const dispatch=useAppDispatch()
    // const {products,loading}=useAppSelector((state)=>state.product)
     const {data,isLoading}=useGetAllProductsQuery()

    // useEffect(()=>{
    //     dispatch(fetchProducts())
    // },[])
    if(isLoading){
        return (
    <div className=" w-10 h-10  rounded-full">
      <Loader2 className="animate-spin"/>
    </div>)}
  return (
    <div className="grid grid-cols-4 gap-2" >
        {data?.map((product)=>{
            return (
                <div key={product.id} className='border border-gray-200 shadow-md rounded-md  flex justify-center items-center'>
            <div className='min-h-[400px] min-w-[250px] text-center'>
        <div className='w-[180px] mx-auto py-2'>

        <img src={product.image} alt="parrot" width={200} height={200}/>
        </div>
      <h2>{product.title}</h2>
      {/* <p>description</p> */}
      </div>
      </div> )
        })}
          {/* <div className='min-h-[400px] min-w-[250px] text-center'>
        <div className='w-[180px] mx-auto py-2'>

        <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" alt="parrot" width={200} height={200}/>
        </div>
      <h2>Name</h2>
      <p>description</p>
      </div> */}
    </div>
  )
}

export default Product