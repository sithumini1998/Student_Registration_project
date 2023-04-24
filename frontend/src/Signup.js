import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignupValidation'
import axios from 'axios'


export default function Signup() {
  const [values,setValues]=useState({
    name:'',
    email: '',
    password:''
  })
  const navigate = useNavigate();
  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name ]:[event.target.value]}))
}
const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
       axios.post('http://localhost:8081/login',values)
       .then(res=>{
            navigate('/');
       })
       .catch(err=>console.log(err));
    }
}
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white  p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='name1 mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" placeholder='Enter Your Name'  onChange={handleInput} className='form-control rounded-0' name='name'/>
                    {errors.name && <span className='text-danger'> {errors.name}</span> }
                </div>
                <div className='email1 mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id="email" placeholder='Enter Your Email'  onChange={handleInput} className='form-control rounded-0' name='email'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span> }
                </div>
                <div className='pw1 mb-3'>
                    <label htmlFor='pw'>Password</label>
                    <input type="password" id="pw" placeholder='Enter Your Password'  onChange={handleInput} className='form-control rounded-0' name='password'/>
                    {errors.password && <span className='text-danger'> {errors.password}</span> }
                </div>
                <button type='submit' className='btn w-100 btn-success rounded-0'>Sign Up</button>
                <p>you agree to our terms and conditions</p>
                <Link  to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log in</Link>
            </form>
        </div>
    </div>
  )
}
