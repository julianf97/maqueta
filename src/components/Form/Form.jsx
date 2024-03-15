import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import LogoForm from '../LogoForm/LogoForm';
import FormTitle from '../FormTitle/FormTitle';
import NamesInputs from '../NamesInputs/NamesInputs';
import InfoInputs from '../InfoInputs/InfoInputs';
import FileButtonContainer from '../FileButton/FileButtonContainer/FileButtonContainer';
import SubmmitButton from '../SubmmitButton/SubmmitButton';
import allowedTypes from "../../data/allowedTypes"

export default function Form() {
  const { register, handleSubmit, formState: { errors }, setError, control, reset } = useForm(); 

  const selectedFile = useWatch({
    control, 
    name: 'archivo',
    defaultValue: [] 
  });


  const onSubmit = (data, event) => {
    if (selectedFile.length === 0) {
      setError("archivo", {
        type: "manual",
        message: "Debe seleccionar un archivo."
      });
      return;
    }

    if (!allowedTypes.includes(selectedFile[0].type)) {
      setError("archivo", {
        type: "manual",
        message: "El archivo debe ser PDF o una imagen."
      });
      return;
    }
  
    event.target.reset();

    console.log(data);
  };

  return (
    <form className='w-11/12 max-w-2xl rounded-lg bg-white h-auto mt-20 flex flex-col items-center max:sm:pt-8 max-sm:pb-8 pt-12 pb-12 shadow-md' onSubmit={handleSubmit(onSubmit)}>
      <LogoForm />
      <FormTitle />
      <NamesInputs register={register} errors={errors} />
      <InfoInputs register={register} errors={errors} />
      <FileButtonContainer register={register} errors={errors} selectedFile={selectedFile} />
      <SubmmitButton />
    </form>
  );
}
