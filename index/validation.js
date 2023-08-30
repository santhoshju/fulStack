const email = document.getElementById('email');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const mblNum = document.getElementById('mblNum');
const dob = document.getElementById('dob');
const address = document.getElementById('address');

emailValidation = () => {
event.preventDefault();
const emailErr = document.getElementById('emailErr');
 const emailInput = email.value;
 console.log(emailInput);
 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 if(!emailPattern.test(emailInput)){
    emailErr.textContent = "Invalid email address";
    return false;
 }else{
    emailErr.textContent = "";
 }

        return true;    
}


mblValidation = () =>{
    
    const mblErr = document.getElementById('mblErr');
    const mblInput = mblNum.value;
    var mobilePattern = /^\d{10}$/;

    if (!mobilePattern.test(mblInput)) {
      mblErr.textContent = "Invalid mobile number (10 digits required)";
      return false;
    } else {
      mblErr.textContent = "";
    }
    return true;
}


