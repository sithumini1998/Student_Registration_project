import React from 'react'
import { Link } from 'react-router-dom';


const StudentRegistration=({data})=>{
    
 
        return (
         <>
         <td>{data.StudentId}</td>
         <td>{data.Name}</td>
         <td>{data.Address}</td>
         <td>{data.Contact}</td>
         <td>{data.ProgrameId}</td>
         <td>{data.RegisrationDate}</td>
         <td>
         <Link to='/UpdateStudent' className='btn btn-danger  '>update</Link>
         <button className='btn btn-warning '>delete</button>
         </td>
         </>
         
        )
      }
      export default StudentRegistration;


