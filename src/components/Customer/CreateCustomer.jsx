import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import {postCustomer} from './postCustomer'
import * as yup from 'yup';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CreateCustomer = () => {
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
      postCustomer(values)
    },
  })
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="user_name"
                variant="outlined"
                required
                fullWidth
                id="user_name"
                label="Username"
                value={formik.values.user_name}
                onChange={formik.handleChange}
                error={formik.touched.user_name && Boolean(formik.errors.user_name)}
                helperText={formik.touched.user_name && formik.errors.user_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="company"
                label="Company"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="adress_1"
                variant="outlined"
                required
                fullWidth
                id="adress_1"
                label="Adress 1"
                value={formik.values.adress_1}
                onChange={formik.handleChange}
                error={formik.touched.adress_1 && Boolean(formik.errors.adress_1)}
                helperText={formik.touched.adress_1 && formik.errors.adress_1}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="adress_2"
                label="Adress 2"
                name="adress_2"
                value={formik.values.adress_2}
                onChange={formik.handleChange}
                error={formik.touched.adress_2 && Boolean(formik.errors.adress_2)}
                helperText={formik.touched.adress_2 && formik.errors.adress_2}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="state"
                label="State"
                name="state"
                required
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="postcode"
                variant="outlined"
                required
                fullWidth
                id="postcode"
                label="Postcode"
                value={formik.values.postcode}
                onChange={formik.handleChange}
                error={formik.touched.postcode && Boolean(formik.errors.postcode)}
                helperText={formik.touched.postcode && formik.errors.postcode}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="country"
                label="Country"
                name="country"
                required
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}

export default CreateCustomer;