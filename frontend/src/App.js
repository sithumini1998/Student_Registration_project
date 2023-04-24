import React from 'react';
import './App.css';
import Login from './Login';
import {BrowserRouter , Routes, Route,} from "react-router-dom";
import Signup from './Signup';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import Programme from './Programme';
import AddProgramme from './AddProgramme';



function App() {
  return (
    
     
    < BrowserRouter>
    <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/StudentList' element={<StudentList/>}></Route>
       <Route path='/AddStudent' element={<AddStudent/>}></Route>
       <Route path='/UpdateStudent' element={<UpdateStudent/>}></Route>
       <Route path='/Programme' element={<Programme/>}></Route>
       <Route path='/AddProgramme' element={<AddProgramme/>}></Route>
    </Routes>
    
   
 </BrowserRouter>
  
   
	   
  );
}

export default App;
