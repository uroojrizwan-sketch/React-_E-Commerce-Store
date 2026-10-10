import React, { useState } from 'react'
import { Package, MapPin, HandCoins, Zap } from 'lucide-react'
import { useCart } from '../context/CartContext'
import OrderConfirm from './OrderConfirm'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart()
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    email: "",
    city: "",
    zip: ""
  })

  const [isConfirm, setIsConfirm] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setDeliveryDetails(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    clearCart()
    setIsConfirm(true)
  }
  if (isConfirm) return <OrderConfirm deliveryDetails={deliveryDetails} />

  return (
    <>
      <div className="container mx-auto  px-4 md:px-8 pt-8 ">
        <h2 className='text-5xl font-bold text-white mb-10 tracking-tight ' >
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className='lg:col-span-2 p-8 bg-gray-900 rounded-2xl border border-gray-800' >
            <h3 className='text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4' >
              <MapPin className='w-7 h-7 text-orange-500' />
              <span>Shipping Information</span>
            </h3>
            <form className='space-y-6' onSubmit={handleSubmit} >
              {Object.keys(deliveryDetails).map(key =>
                <div key={key} >
                  <label htmlFor={key} className='block text-sm font-semibold text-gray-300 capitalize mb-1' >
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    className='mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-500'
                  />
                </div>
              )}

              <div className='pt-6 ' >
                <button
                  type='submit' className=' w-full  py-4 bg-orange-600 text-white font-bold text-xl rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transfrom hover:ring-2 hover:ring-pink-950 uppercase tracking-wider' >
                  <HandCoins className='w-6 h-6' />
                  <span className='font-bold ' >Pay and Confirm Order (Rs {cartTotal.toFixed(2)}) </span>
                </button>
              </div>
            </form>
          </div>
          {/* order summary */}
          <div className='lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-gray-800 ' >

            <h3 className='text-3xl font-extrabold text-white mb-4 border-b border-y-gray-700 pb-3 flex items-center space-x-2' >


              <Package className='w-7 h-9 text-orange-400' />
              <span>Order Summary </span>

            </h3>
            <div className='space-y-4 text-gray-400 ' >
              {cart.map(item =>
                <div key={item.id} className='flex justify-between text-base border-b border-gray-800 pb-2' >
                  <span className=' text-gray-300 truncate line-clamp-1' >{item.name}</span>
                  <span className='font-medium text-orange-300' >Rs.{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              )}

              <div className='space-y-4 text-gray-400 ' >
                <div className='flex justify-between text-xl mt-4 ' >
                  <span>SubTotal :</span>
                  <span className='font-semibold text-white' >Rs {cartTotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-xl ' >
                  <span>Shipping (Express) :</span>
                  <span className='font-semibold text-green-400' >Free</span>
                </div>
                <div className='flex justify-between pt-5 border-t border-gray-700  ' >
                  <span className='text-3xl font-bold text-white block' >Total Due:</span>
                  <span className=' text-2xl font-bold text-orange-400 ' >Rs.{cartTotal.toFixed(2)}</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout