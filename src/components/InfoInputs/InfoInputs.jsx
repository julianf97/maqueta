import React from 'react'

export default function InfoInputs() {
  return (
    <div className='flex w-11/12 flex-col sm:flex-col md:flex-col lg:h-24 items-center lg:flex-row lg:justify-center '>
      <div className='w-full max-w-md'>
        <div className='flex flex-col w-full items-center '>
          <label htmlFor="input_email" className="block mb-1 mt-4 text-sm self-start ml-5 font-medium text-gray-900 dark:text-white">Email</label>
          <input type="text" id="input_email" className="block w-11/12 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300" placeholder='Ingrese su email' required/>
        </div>
      </div>
      <div className='w-full max-w-md'>
        <div className='flex flex-col w-full items-center '>
          <label htmlFor="input_dni" className="block mb-1 mt-4 text-sm self-start ml-5 font-medium text-gray-900 dark:text-white">DNI</label>
          <input type="text" id="input_dni" className="block w-11/12 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300" placeholder='Ingrese su DNI' required/>
        </div>
      </div>
    </div>
  )
}
