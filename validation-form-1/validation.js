const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const tandc= document.getElementById("tc");


var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCpassword = false;
var isValidChecked = false;

uname.addEventListener('keyup', checkUserName);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validation();
});


isValidName = false;
isValidEmail = false;
isValidPassword = false;
isValidCpassword = false;
isValidChecked = false;

function validation(){
    let nameValue = uname.value.trim();
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();
    // let checkValue = check.value.trim();
    // checkUserName

    checkUserName()
    
    // checkEmail
    if(emailValue===''){
        setError(email,'the input email cannot be empty');
    }
    else if(!emailCheck(emailValue)){
        setError(email,'enter a valid email id');
    }
    else{
        setSuccess(email);
        isValidEmail = true;
    }
    // passwordcheck
    if(passwordValue===''){
        setError(password,'its cannot be empty');
    }
    else if(passwordValue.length<8){
        setError(password,'password must be conatain 8 characters');
    }
    else{
        setSuccess(password);
        isValidPassword = true;
    }
    // confirmpasswordcheck
    if(cpasswordValue===''){
        setError(cpassword,'cannot be empty');
    }
    else if(cpasswordValue !== passwordValue){
        setError(cpassword,'the passwords are mis matched');
    }
    else{
        setSuccess(cpassword)
    }

    // check terms and conditions
    console.log(tandc.checked);
    if(!tandc.checked){
        setError(tc,'click on agree terms checkbox');
    }
    else{
        setSuccess(tc);
        isValidCpassword = true;
    }
}
function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailReg.test(input);
}
function setError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    if (small) {
        small.innerText = message
    }
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccess(input){
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}

function checkUserName(){
    let nameValue = uname.value.trim()
    if(nameValue===''){
        setError(uname,'The input username cannot be empty');
    }
    else if(nameValue.length<5){
        setError(uname,'The username must be in 5 characters');
    }
    else{
        setSuccess(uname);
        isValidName = true;
    }
}
