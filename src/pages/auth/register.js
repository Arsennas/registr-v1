import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Btn from '../../components/btn';
import { Link } from 'react-router-dom';

const defultState = {
  username: '',
  phone_number: '',
  password: ''
}
const Register = (props) => {

  const [form, setForm] = useState(defultState)

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const hanlderSubmit = async (e) => {
    e.preventDefault()
    await props.registerPost({ ...form })
  }


  return (
    <form onSubmit={hanlderSubmit} className='auth'>
      <TextField
        onChange={handlerChange}
        value={form.username}
        name={'username'}
        id="outlined-basic"
        label="username" variant="outlined" />
      <TextField
        onChange={handlerChange}
        value={form.phone_number}
        name={'phone_number'}
        id="outlined-basic"
        label="phone_number" variant="outlined" />
      <TextField
        onChange={handlerChange}
        value={form.password}
        name={'password'}
        id="outlined-basic"
        label="password" variant="outlined" />
      <Btn type="submit">register</Btn>
      <Link to='/auth/login'>login</Link>
    </form>
  );
};

export default Register;