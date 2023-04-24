import {createContext, useEffect, useState} from 'react';
export const StudentContext = createContext()
const StudentContextProvider  = (props) => {
    
    const [StudentList,SetStudentList]=useState([
        {StudentId:'soo1',Name:'rusiru',Address:'matara',Contact:'0916789009',ProgrameId:'SSE',RegisrationDate:'2/3/2023'},
        {StudentId:'soo2',Name:'saduni',Address:'galle',Contact:'0916789019',ProgrameId:'SS',RegisrationDate:'2/3/2023'},
        {StudentId:'soo3',Name:'kamal',Address:'colombo',Contact:'0916789509',ProgrameId:'SSE',RegisrationDate:'2/3/2023'}
       ])
    return <StudentContext.provider values={{SetStudentList}}>
         
        {props.children}
    </StudentContext.provider>
}
export default StudentContextProvider;

