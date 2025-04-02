// User Registration component

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="surname" placeholder="Surname" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;