// @ts-nocheck
import React from 'react'

const SearchBar = ({searchTerm, onSearchChange}) => {
  return (
      <>
          <div className="mb-6">
              <input type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder='Search cryptocurrencies...' className='w-full md:w-96 px-6 py-4 bg-gray-200 border border-green-600 rounded-lg shadow-md focus:outline-none focus:border-blue-500 text-white' />
        </div>
      </>
  )
}

export default SearchBar