const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpass=document.getElementById('confirm-password');
const submit=document.getElementById('btn');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});

const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emialValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmpassValue=confirmpass.value.trim();

    const setError=(element,message)=>{
        const inputcontrol=element.parentElement;
        // console.log(inputcontrol)
        const errorDisplay=inputcontrol.querySelector('.error')
        errorDisplay.innerText=message;
        inputcontrol.classList.add('error')
        inputcontrol.classList.remove('success')
    }

    const setSuccess = element => {
        const inputcontrol=element.parentElement;
        const errorDisplay=inputcontrol.querySelector('.error')
        errorDisplay.innerText='';
        inputcontrol.classList.add('success')
        inputcontrol.classList.remove('error')
        
    };

    function isValidEmail(e) {
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(e);
     }
    

    if(usernameValue===''){
        setError(username,'Username id Required');
}
    else{
        setSuccess(username);
    }

    if(emialValue===''){
        setError(email,'Email is required');

    }
    else if(!isValidEmail(emialValue)){
        setError(email,'Provide valid email address');

    }
    else{
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }


    if(confirmpassValue === '') {
        setError(confirmpass, 'Please confirm your password');
    } else if (confirmpassValue !== passwordValue) {
        setError(confirmpass, "Passwords doesn't match");
    } else {
        setSuccess(confirmpass);
    }
   

}

