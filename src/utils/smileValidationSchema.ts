import * as yup from 'yup';

const smileValidationSchema = () =>
  yup.object().shape({
    smilePic: yup.string()
      .matches(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/gu, 'Invalid smile input',)
      .required('Field is required'),
    smileText: yup.string().required('Field is required'),
  });

export default smileValidationSchema;
