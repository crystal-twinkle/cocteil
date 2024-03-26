import React from 'react';
import './FormInput.css'

const FormInput = ({type,error, register, naming}) => {
  return (
    <div>
      <p className="input_naming after">
        {naming}
      </p>
      <input
        className="input-adder"
        type={type}
        {...register}
      />
      <p className="input_error">
        {error?.message && error.message}
      </p>
    </div>
  );
};

export default FormInput;
