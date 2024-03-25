import React from 'react';
import './SmileAdd.css';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import smileValidationSchema from '../../utils/smileValidationSchema';

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
    <div className='form-adder'>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input
          className="input-adder"
          type="text"
          placeholder=""
          {...register('smilePic')}
        />
        <input
          className="input-adder"
          type="text"
          placeholder=""
          {...register('smileText')}
        />
        {errors.smilePic && <p>{errors}</p>}
        <button>Server add</button>
      </form>
    </div>
  )
}

export default SmileAdd;
