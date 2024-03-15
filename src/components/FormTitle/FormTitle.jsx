import React from 'react';
import { titleForm } from '../../constants/textConstants';

export default function FormTitle() {
  return (
    <div className='w-full h-auto flex justify-center items-center pt-8 pb-4'>
      <h1 className=' text-2xl font-bold text-[#303030] text-center select-none'>{ titleForm }</h1>
    </div>
  );
}
