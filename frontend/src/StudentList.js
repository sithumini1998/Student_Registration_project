import { useState } from "react"


import StudentRegistration from './StudentRegistration';
import { Link } from "react-router-dom";
import StudentPagination from "./StudentPagination";


export default function StudentList() {
  const [StudentList,SetStudentList]=useState([
    {StudentId:'soo1',Name:'rusiru',Address:'matara',Contact:'0916789009',ProgrameId:'SSE',RegisrationDate:'2/3/2023'},
    {StudentId:'soo2',Name:'saduni',Address:'galle',Contact:'0916789019',ProgrameId:'SS',RegisrationDate:'2/3/2023'},
    {StudentId:'soo3',Name:'kamal',Address:'colombo',Contact:'0916789509',ProgrameId:'SSE',RegisrationDate:'2/3/2023'}
   ]) 
  return (

    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
       <div className='w-50 bg-white rounded p-3'>
          <Link  to='/AddStudent' className='btn btn-success '>Add+</Link>
          <Link  to='/Programme' className='btn btn-secondary '>View Programme</Link>
          <table className='table'>
             <thead>
               <tr key={StudentList.StudentId}>
                  <th>StudentId</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>ProgrameId</th>
                  <th>RegisrationDate</th>
                  <th>Action</th>
               </tr>
             </thead>
             <tbody>
                  
                    {
                      StudentList.map(data=>(
                       <tr>
                           <StudentRegistration data={data} />
                       </tr>
                      ))
                    }
                 
                  
             </tbody>
          </table>
         
       </div>
      
    </div>
  
  )
}


