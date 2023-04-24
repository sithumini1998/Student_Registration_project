function validation(values){
    let error ={}
    const  email_pattern=/\S+@\S+\.\S+/
    const password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(values.name === ""){
        error.name="Name is required"
     }
     else{
        error.name="";
     }
    if(values.email === ""){
       error.email="Email is required"
    }
    else if(!email_pattern.test(values.email)){
       error.email ="Invalid email"
    }else{
       error.email="";
    }
    if(values.password === ""){
       error.password="password is required"
    }
    else if(!password_pattern.test(values.password)){
       error.password ="Invalid password"
    }else{
       error.password="";
    }
    return error;
   }
   export default validation;