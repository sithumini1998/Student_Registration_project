import React from 'react'

export default function AddProgramme() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white  p-3 rounded w-25'>
            <h2>Add Programme</h2>
            <form >
                <div className='name1 mb-3'>
                    <label htmlFor='name'>Programme Name</label>
                    <input type="text" id="name"   className='form-control rounded-0' name='name'/>
                   
                </div>
                <div className='name2 mb-3'>
                    <label htmlFor='name'>Duration</label>
                    <input type="text" id="name"   className='form-control rounded-0' name='name'/>
                   
                </div>
                <div className='email1 mb-3'>
                    <label htmlFor='email'>Cost</label>
                    <input type="text" id="email" placeholder='Enter Your Email'  className='form-control rounded-0' name='email'/>
                  
                </div>
                
                <button type='submit' className='btn w-100 btn-success rounded-0'>Submit</button>
                
            </form>
        </div>
    </div>
  )
}
