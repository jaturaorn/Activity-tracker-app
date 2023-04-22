import React from 'react'

function Button( {children} ) {
  return (
    <button className='bg-white border-solid h-40px border-2 border-indigo-600 rounded-full font-semibold py-1 px-3 hover:bg-main-pink'>
        {children}
    </button>
  )
}

export default Button