import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginValidation';
import validation from './LoginValidation'




export default function Login() {
    const [values, setValues]=useState({
        email: '',
        password:''
    })
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name ]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }
  return (
   
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white  p-3 rounded w-25'>
            <h2>Sign-In</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='email1 mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id="email" placeholder='Enter Your Email' onChange={handleInput}  className='form-control rounded-0' name='email'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span> }
                </div>
                <div className='pw1 mb-3'>
                    <label htmlFor='pw'>Password</label>
                    <input type="password" id="pw" placeholder='Enter Your Password' onChange={handleInput}  className='form-control rounded-0' name='password'/>
                    {errors.password && <span className='text-danger'> {errors.password}</span> }
                </div>
                <Link  to="/StudentList"className='btn w-100 btn-success rounded-0'>Log in</Link>
                <p>you agree to our terms and conditions</p>
                <Link  to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}
