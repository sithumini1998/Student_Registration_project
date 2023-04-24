import { useState } from "react"
import ProgrammeRegistration from "./context/ProgrammeRegistration"
import { Link } from "react-router-dom"

export default function Programme() {
    const [ProgrammetList,SetProgrammetList]=useState([
        {ProgrammeId:'se1',Name:'se',Duration:'1 year',Cost:'2000000'},
        {ProgrammeId:'ss1',Name:'it',Duration:'1 year',Cost:'2000000'},
       
       ]) 
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
       <div className='w-50 bg-white rounded p-3'>
       <Link  to='/AddProgramme' className='btn btn-success '>Add+</Link>
          <table className='table'>
             <thead>
               <tr key={ProgrammetList.StudentId}>
                  <th>ProgrammeId</th>
                  <th>Name</th>
               
                  <th>Duration</th>
                  <th>Cost</th>
               
                  <th>Action</th>
               </tr>
             </thead>
             <tbody>
                  
                    {
                      ProgrammetList.map(data=>(
                       <tr>
                           <ProgrammeRegistration data={data} />
                       </tr>
                      ))
                    }
                 
                  
             </tbody>
          </table>
         
       </div>
      
    </div>
  )
}
