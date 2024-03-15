import React from 'react';
import InputEmailContainer from '../Inputs/EmailInput/InputEmailContainer/InputEmailContainer';
import InputDniContainer from '../Inputs/InputDNI/InputDniContainer/InputDniContainer';

export default function InfoInputs({ register, errors }) {
  return (
    <div className='w-5/6 h-auto max-sm:ml-0 ml-2 flex justify-center max-sm:items-center max-sm:flex-col'>
      <InputEmailContainer  register={register} errors={errors}/>
      <InputDniContainer register={register} errors={errors}/>
    </div>
  );
}
