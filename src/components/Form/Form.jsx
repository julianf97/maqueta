import React from 'react';
import LogoForm from '../LogoForm/LogoForm';
import FormTitle from '../FormTitle/FormTitle';

export default function Form() {
  return (
    <form className='w-11/12 rounded-lg bg-white h-auto mt-16 flex flex-col items-center pt-8 pb-8 shadow-md'>
      <LogoForm />
      <FormTitle />
      <div className='w-5/6 h-auto max-sm:mt-0 max-sm:ml-0 ml-2 mt-4 flex justify-center max-sm:items-center max-sm:flex-col'>
        <div className=' max-sm:ml-0 flex flex-col'>
          <label htmlFor="input_nombre" className="block text-sm max-sm:ml-1  self-start font-medium text-gray-900 dark:text-white">Nombre</label>
          <input type="text" id="input_nombre" className="rounded block max-sm:ml-1 max-sm:w-64 w-48 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300" placeholder='Ingrese su nombre' required/>
        </div>
        <div className=' flex flex-col max-sm:mt-3'>
          <label htmlFor="input_apellido" className="block text-sm max-sm:ml-1 ml-6 self-start font-medium text-gray-900 dark:text-white">Apellido</label>
          <input type="text" id="input_apellido" className="rounded block ml-6 max-sm:ml-1 max-sm:w-64 w-48 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300" placeholder='Ingrese su apellido' required/>
        </div>
      </div>
      <div className='w-5/6 h-auto max-sm:mt-0 mt-8 max-sm:ml-0 ml-2 flex justify-center max-sm:items-center max-sm:flex-col'>
        <div className=' max-sm:ml-0 flex flex-col'>
          <label htmlFor="input_nombre" className="block text-sm max-sm:ml-1  self-start font-medium text-gray-900 dark:text-white">Nombre</label>
          <input type="text" id="input_nombre" className="rounded block max-sm:ml-1 max-sm:w-64 w-48 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300" placeholder='Ingrese su nombre' required/>
        </div>
        <div className=' flex flex-col max-sm:mt-3'>
          <label htmlFor="input_apellido" className="block text-sm max-sm:ml-1 ml-6 self-start font-medium text-gray-900 dark:text-white">Apellido</label>
          <input type="text" id="input_apellido" className="rounded block ml-6 max-sm:ml-1 max-sm:w-64 w-48 p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none transition-all duration-300" placeholder='Ingrese su apellido' required/>
        </div>
      </div>
      <div className='w-5/6 h-20 flex justify-center items-center'>
        <label>Selecciona archivo</label>
        <button className='w-20 ml-2 h-6 rounded flex justify-center items-center border-gray-300 border-2 bg-gray-50'>PDF</button>
      </div>
      <div className='w-5/6 h-10 flex justify-center items-center '>
        <button class="max-sm:w-5/6 w-96 h-full rounded bg-red-400 text-white transition-colors duration-300 hover:bg-red-500">Solicitar Carnet</button>
      </div>
    </form>
  );
}
