import React from 'react'
import { CheckCircle, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderConfirm = ({ deliveryDetails }) => {
  return (
    <>
      <div className="container mx-auto md:px-8 pt-12  ">
        <div className='p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700 text-white' >
          <CheckCircle className='w-22 h-22 text-green-500 mx-auto mb-4 drop-shadow-lg' />
          <h1 className='text-4xl font-bold text-white mb-4 ' >Order Confirmed!</h1>
          <p className='text-lg text-gray-300 mb-6' >
            Your transaction is completed. A confirmation email has been sent to your account.
          </p>
          <div className='p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm ' >
            <p className='font-semibold text-lg mb-1 ' >
              {deliveryDetails?.name}
            </p>
            <p>
              {deliveryDetails?.address}
            </p>
            <p>
              {deliveryDetails?.email}
            </p>
            <p>
              {deliveryDetails?.city},{deliveryDetails?.zip}
            </p>
          </div>
          <Link to={'/'} className=' mx-auto w-80 mt-10 px-4 py-4 bg-orange-600 text-white font-bold text-xl rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transfrom hover:ring-2 hover:ring-pink-950 uppercase tracking-wider' >
            <ShoppingBag className='w-5 h-5' /> <span className='font-bold' >Continue Shopping</span>
          </Link>
        </div>


      </div>
    </>
  )
}

export default OrderConfirm