import React from 'react'

export default function AddStudent() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white  p-3 rounded w-25'>
            <h2>Add Student</h2>
            <form >
                <div className='name1 mb-3'>
                    <label htmlFor='name'>Student Id</label>
                    <input type="text" id="name"   className='form-control rounded-0' name='name'/>
                   
                </div>
                <div className='name2 mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name"   className='form-control rounded-0' name='name'/>
                   
                </div>
                <div className='email1 mb-3'>
                    <label htmlFor='email'>Address</label>
                    <input type="text" id="email" placeholder='Enter Your Email'  className='form-control rounded-0' name='email'/>
                  
                </div>
                <div className='pw1 mb-3'>
                    <label htmlFor='pw'>Contact</label>
                    <input type="text" id="pw" placeholder='Enter Your Password'  className='form-control rounded-0' name='password'/>
                  
                </div>
                <div className='pw1 mb-3'>
                    <label htmlFor='pw'>Programe Id</label>
                    <input type="text" id="pw" placeholder='Enter Your Password'  className='form-control rounded-0' name='password'/>
                  
                </div>
                <div className='pw1 mb-3'>
                    <label htmlFor='pw'>RegisrationDate</label>
                    <input type="text" id="pw" placeholder='Enter Your Password'  className='form-control rounded-0' name='password'/>
                  
                </div>
                <button type='submit' className='btn w-100 btn-success rounded-0'>Submit</button>
                
            </form>
        </div>
    </div>
  )
}
