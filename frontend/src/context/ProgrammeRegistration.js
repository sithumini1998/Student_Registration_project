import React from 'react'
import { Link } from 'react-router-dom';


const ProgrammeRegistration=({data})=>{
    
 
        return (
         <>
         <td>{data.ProgrammeId}</td>
         <td>{data.Name}</td>
         
         <td>{data.Duration}</td>
         <td>{data.Cost}</td>
        
         <td>
         <Link to='/UpdateStudent' className='btn btn-danger  '>update</Link>
         <button className='btn btn-warning '>delete</button>
         </td>
         </>
         
        )
      }
      export default ProgrammeRegistration;


