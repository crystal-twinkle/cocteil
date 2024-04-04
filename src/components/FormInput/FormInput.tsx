import './FormInput.css'
import {DeepMap, FieldValues, UseFormRegister} from 'react-hook-form';
import {IRegister} from '../../models/models';


interface IFormInput {
  type: string;
  errors?: DeepMap<FieldValues, FieldValues>;
  register: UseFormRegister<IRegister>;
  naming: string;
  add: keyof IRegister;
}

const FormInput = ({type, errors, register, naming, add}: IFormInput) => {
  return (
    <div>
      <p className="input_naming after">
        {naming}
      </p>
      <input
        className="input-adder"
        type={type}
        {...register(add)}
      />
      <p className="input_error">
        {errors?.message && errors.message}
      </p>
    </div>
  );
};

export default FormInput;
