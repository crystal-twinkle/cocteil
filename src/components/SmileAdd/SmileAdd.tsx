import './SmileAdd.css';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import smileValidationSchema from '../../utils/smileValidationSchema';
import FormInput from '../FormInput/FormInput';
import Button from '../UI/Button';
import {IRegister} from '../../models/models';

function SmileAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(smileValidationSchema()),
  });

  const onSubmitForm = async (formData: IRegister) => {
    const newData = {
      name: formData.smileText,
      pic: formData.smilePic
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
        <FormInput type={"text"} errors={errors.smilePic} register={register} naming={'smiley display'} add={'smilePic'}/>
        <FormInput type={"text"} errors={errors.smileText} register={register} naming={'smiley text'} add={'smileText'}/>
        <Button>Add new smile</Button>
      </form>
    </div>
  )
}

export default SmileAdd;
