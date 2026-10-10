import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { initialProducts } from '../data/product'
import { ChevronLeft, Tag, Zap, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'



const ProductDetail = () => {

  const { id } = useParams()
  const [product, setproduct] = useState()

  const { addToCart } = useCart()

  console.log("URL ID:", id)
  console.log("All products:", initialProducts)
  console.log("Matching product:", initialProducts.find(
    (data) => String(data.id) === String(id)
  ))

  useEffect(() => {
    setproduct(initialProducts.find((data) => String(data.id) === String(id)))
  }, [id])

  return (
    <>
      <div className="container w-285 mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800 ">
        <Link to={"/"} >
          <button className=' cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg' >
            <ChevronLeft className='w-6 h-6 mr-1' />
            <span>Back to home</span>
          </button>
        </Link>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1' >
          <div className='w-full ' >
            <img src={product?.image}
              alt={product?.name} className="w-[300px] h-[300px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800" />
          </div>
          <div className='flex flex-col justify-between ' >
            <div>
              <h1 className='text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter ' >{product?.name}</h1>
            </div>
            <p className='text-3xl font-bold text-orange-400 mb-4' >Rs {product?.price.toFixed(2)}</p>
            <h2 className='text-xl font-bold text-gray-200 mb-2 border-b border-e-orange-900/50 pb-2 flex items-center space-x-2' >
              <Tag className='w-5 h-5 text-orange-500 ' />
              <span>Product Overview</span>
            </h2>

            <p className='text-gray-500y text-lg leading-relaxed mb-3' >{product?.description}</p>
            <ul className='space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700' >
              <li className='flex items-center space-x-3 text-lg '>
                <Zap className='w-5 h-5 text-orange-500' />
                <span >High-Quality, Professional Grade Material</span>
              </li>
              <li className='flex items-center space-x-3 text-lg '>
                <Zap className='w-5 h-5 text-orange-500' />
                <span >Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
              <li className='flex items-center space-x-3 text-lg '>
                <Zap className='w-5 h-5 text-orange-500' />
                <span >Immediate Shopping for in-Stock items</span>
              </li>
            </ul>

            <div className='mt-5 space-y-4 flex justify-center items-center flex-col' >
              <button onClick={() => addToCart(product)} className=' w-full py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transfrom hover:ring-2 hover:ring-pink-950 uppercase tracking-wider' >
                <ShoppingCart className='w-5 h-5' /> <span>Add to cart</span>
              </button>
              <Link to={'/'} className=' w-full py-3 border-2  border-orange-600 text-orange-400 font-semibold rounded-full  cursor-pointer hover:bg-orange-600/30 hover:text-orange-400 transition duration-300 flex items-center justify-center space-x-2 transfrom uppercase tracking-wider' >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail