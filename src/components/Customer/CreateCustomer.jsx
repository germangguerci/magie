import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from 'react-redux'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  first_name: yup
    .string('Enter your name')
    //.min(8, 'Password should be of minimum 8 characters length')
    .required('Name is required'),
  last_name: yup
  .string('Enter your last name')
  .required("Last name is required")
  .min(1, 'Please enter your last name'),
  user_name: yup
  .string('Enter your user name')
  .required('User name is required')
  .min(1, 'Please enter your last name'),
  company: yup
  .string('Enter your company name')
  .min(1, 'Please enter your last name'),
  adress_1: yup
  .string('Enter your adress')
  .required('You have to complete at least one adress')
  .min(1, 'Please enter your last name'),
  adress_2: yup
  .string('Secondary adress (optional)'),
  city: yup
  .string('Enter your city')
  .required('City is required')
  .min(1, 'Please enter your city'),
  state: yup
  .string('Enter your state')
  .required('State is required')
  .min(1, 'Please enter your state'),
  postcode: yup
  .string('Enter your postcode')
  .required('Postcode is required')
  .min(1, 'Please enter your postcode'),
  country: yup
  .string('Enter your country')
  .required('Country is required')
  .min(1, 'Please enter your country')

});


export const CreateCustomer = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      first_name: 'Pedro',
      last_name: 'Caballero',
      user_name: 'pedrocaballero',
      company: '',
      adress_1: '969 market',
      adress_2: '',
      city: '',
      state: '',
      postcode: '',
      country: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //dispatch(getToken(values.email, values.password));
      //setTimeout(function(){ window.location.reload(); }, 2000);
      console.log(values)
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="first_name"
          name="first_name"
          label="First Name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name && formik.errors.first_name}
        />
         <TextField
          fullWidth
          id="last_name"
          name="last_name"
          label="Last Name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
        />
         <TextField
          fullWidth
          id="user_name"
          name="user_name"
          label="User Name"
          value={formik.values.user_name}
          onChange={formik.handleChange}
          error={formik.touched.user_name && Boolean(formik.errors.user_name)}
          helperText={formik.touched.user_name && formik.errors.user_name}
        />
        <TextField
          fullWidth
          id="company"
          name="company"
          label="Company"
          value={formik.values.company}
          onChange={formik.handleChange}
          error={formik.touched.company && Boolean(formik.errors.company)}
          helperText={formik.touched.company && formik.errors.company}
        />
        <TextField
          fullWidth
          id="adress_1"
          name="adress_1"
          label="Adress 1"
          value={formik.values.adress_1}
          onChange={formik.handleChange}
          error={formik.touched.adress_1 && Boolean(formik.errors.adress_1)}
          helperText={formik.touched.adress_1 && formik.errors.adress_1}
        />
        <TextField
          fullWidth
          id="adress_2"
          name="adress_2"
          label="Adress 2"
          value={formik.values.adress_2}
          onChange={formik.handleChange}
          error={formik.touched.adress_2 && Boolean(formik.errors.adress_2)}
          helperText={formik.touched.adress_2 && formik.errors.adress_2}
        />
          <TextField
          fullWidth
          id="city"
          name="city"
          label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
          <TextField
          fullWidth
          id="state"
          name="state"
          label="State"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        />
          <TextField
          fullWidth
          id="postcode"
          name="postcode"
          label="Postcode"
          value={formik.values.postcode}
          onChange={formik.handleChange}
          error={formik.touched.postcode && Boolean(formik.errors.postcode)}
          helperText={formik.touched.postcode && formik.errors.postcode}
        />
          <TextField
          fullWidth
          id="country"
          name="country"
          label="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};


