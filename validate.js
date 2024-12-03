function validate() {
  
   const email = document.getElementById("email").value;
   const emailError = document.getElementById("emailError");
   let emailstatus  = false;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/; 

   const password = document.getElementById("password").value; 
   const passwordError = document.getElementById("passwordError");
   let passwordstatus = false;
   const  passwordRegex = /^[a-zA-Z0-9-.]/;
  
  //email validation
   if (email === "") {
      emailError.innerHTML = "Email is mandatory";
    } else {
     if (email.match(emailRegex)) {
       emailError.innerHTML = "" ;
       emailstatus = true;
     } else {
       emailError.innerHTML = "Invalid Email";
     }
    }

    //password validate
    if(password === "") {
        passwordError.innerHTML = "password is Mandatory";
       } else {
        if (password.match(passwordRegex)) {  
          passwordError.innerHTML = "" ; 
          passwordstatus = true;
         } else{
           passwordError.innerHTML = "invalid address" ;
        } 
       } 
       //return
   if(emailstatus && passwordstatus){
     return true;
    } else{
      return false; 
    } 
  }  
  