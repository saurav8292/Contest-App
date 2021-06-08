import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./ChangePassword.css"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '450px',
  },
}));

export default function ChangePassword() {
  const classes1 = useStyles();
  const [values1, setValues1] = React.useState({
    password1: '',
    showPassword1: false,
  });
  const handleChange1 = (prop) => (event) => {
    setValues1({ ...values1, [prop]: event.target.value });
  };
  const handleClickShowPassword1 = () => {
    setValues1({ ...values1, showPassword1: !values1.showPassword1 });
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const classes2 = useStyles();
  const [values2, setValues2] = React.useState({
    password2: '',
    showPassword2: false,
  });
  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
  };
  const handleClickShowPassword2 = () => {
    setValues2({ ...values2, showPassword2: !values2.showPassword2 });
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root} style={{marginTop:"70px"}}>
      <div className="container">

      <div className="form-row frms">
        <FormControl className={clsx(classes1.margin, classes1.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password1">Current Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password1"
            type={values1.showPassword1 ? 'text' : 'password'}
            value={values1.password1}
            onChange={handleChange1('password1')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password1 visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {values1.showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={130}
          />
        </FormControl>
        </div>
          
        <div className="form-row frms">
        <FormControl className={clsx(classes2.margin, classes2.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password2">New Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password2"
          type={values2.showPassword2 ? 'text' : 'password'}
          value={values2.password2}
          onChange={handleChange2('password2')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password2 visibility"
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword2}
                edge="end"
              >
                {values2.showPassword2 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={110}
        />
      </FormControl>
      </div>
      
      <div className="form-row frms">
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={110}
      />
    </FormControl>
    </div>
      
    <div className="form-row submit">
    <Button variant="contained" style={{backgroundColor:"#CCCCFF"}}>Change Password</Button>
    </div>

      </div>
    </div>
  );
}
