import React from 'react';
import './SmileAdd.css';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import smileValidationSchema from '../../utils/smileValidationSchema';
import FormInput from '../FormInput/FormInput';
import Button from '../UI/Button';

function SmileAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(smileValidationSchema()),
  });

  const onSubmitForm = async (formData) => {
    const newData = {
      name: formData.smilePic,
      pic: formData.smileText
    }

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((r) => console.log(r.json()));
  };

  return (
    <div className='form-wrap'>
      <form className='form-adder' onSubmit={handleSubmit(onSubmitForm)}>
        <FormInput type={"text"} error={errors.smilePic} register={register('smilePic')} naming={'smiley display'}/>
        <FormInput type={"text"} error={errors.smileText} register={register('smileText')} naming={'smiley text'}/>
        <Button>Add new smile</Button>
      </form>
    </div>
  )
}

export default SmileAdd;
