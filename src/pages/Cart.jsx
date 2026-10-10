import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ShoppingCart, ChevronLeft, Zap } from 'lucide-react'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart()
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8 ">

        <div className="flex items-center mb-6  ">
          <Link to={'/'} className='flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-semibold text-lg' >
            <ChevronLeft className='w-6 h-6 mr-1' />
            <span>Back to Store</span>
          </Link>
        </div>

        <h2 className='text-4xl font-bold text-white mb-7 tracking-tight' >Shopping Cart ({cartCount}) </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => <CartItem key={item.id} item={item} />)}
          </div>

          <div className='lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-gray-800 ' >
            <h3 className='text-3xl font-extrabold text-white mb-4 border-b border-y-gray-700 pb-3 flex items-center space-x-2' >
              <div className='flex item-center gap-5 ' >
                <span className='w-6 h-6 text-orange-400 ' >Rs</span>
                <span>Order Total </span>
              </div>
            </h3>
            <div className='space-y-4 text-gray-400 ' >
              <div className='flex justify-between text-xl ' >
                <span>SubTotal :</span>
                <span className='font-semibold text-white' >Rs {cartTotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-xl ' >
                <span>Shipping (Express) :</span>
                <span className='font-semibold text-green-400' >Free</span>
              </div>
              <div className='flex justify-between pt-5 border-t border-gray-700  ' >
                <span className='text-2xl font-bold text-white block' >Estimated Total:</span>
                <span className=' text-2xl font-bold text-orange-400 ' >Rs.{cartTotal.toFixed(2)}</span>
              </div>
              <Link to={'/checkout'} className=' w-full mt-8 py-4 bg-orange-600 text-white font-bold text-xl rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transfrom hover:ring-2 hover:ring-pink-950 uppercase tracking-wider' >
                <Zap className='w-5 h-5' /> <span className='font-bold' >Proceed Securely</span>
              </Link>
              <p className='text-xs text-gray-500 text-center mt-5' >All transactions are encrypted and secure.</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart