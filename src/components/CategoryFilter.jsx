import React from 'react'
import { initialProducts } from '../data/product'
import { Tag } from 'lucide-react'

const availableCategoies = [
  "All", ...new Set(initialProducts.map(p => p.category))
]


const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {

  return (
    <>
      <div className='flex flex-wrap gap-3 border border-gray-800 pb-6  rounded-2xl' >
        <Tag className='w-6 h-7  text-orange-500 mt-7 mr-2 ml-4 hidden sm:block' />
        {availableCategoies.map((category) => (
          <button key={category}
            onClick={() => setSelectedCategory(category)}
            className={` mt-6 px-5 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md ${selectedCategory === category ? 'bg-orange-600 text-white shadow-orange-800/50' : 'bg-gray-800 text-gray-300  hover:bg-gray-700 hover:text-orange-400 border border-gray-700  '}`}  >{category}</button>
        ))}

      </div>
    </>
  )
}

export default CategoryFilter