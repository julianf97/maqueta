import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import ErrorsInputDNI from '../InputDniErrors/ErrorInputDNI';

export default function InputDniContainer({ register, errors }) {
  return (
    <div className='flex flex-col'>
      <LabelAndInput register={register} errors={errors}/>
      <ErrorsInputDNI errors={errors} />
    </div>
  );
}
