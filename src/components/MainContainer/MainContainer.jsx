import React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import ImgContainer from '../ImgContainer/ImgContainer';

export default function MainContainer() {
  return (
    <main className='flex w-full h-screen overflow-hidden'>
      <FormContainer />
      <ImgContainer />
    </main>
  );
}
