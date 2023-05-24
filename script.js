const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');
const afterText = document.getElementById('after-text');

function comparePassword(){
    if(password.value === confPassword.value){
        afterText.classList.remove("after-text");
        password.classList.remove("error");
        confPassword.classList.remove("error");

        password.setCustomValidity("");
    }else{
        afterText.classList.add("after-text");
        password.classList.add("error");
        confPassword.classList.add("error");
        
        password.setCustomValidity("Passwords don't match");
    }
}

password.addEventListener("input", comparePassword);
confPassword.addEventListener("input", comparePassword);




//To check if input fields are invalid and then change border to red
const inputFields = document.querySelectorAll('input');

inputFields.forEach(function(inputField) {
  inputField.addEventListener('invalid', function(event) {
    event.preventDefault();
    inputField.classList.add('error');
  });
});

inputFields.forEach(function(inputField){
    inputField.addEventListener('input', function(){
        if(inputField.id === 'password' || inputField.id === 'conf-password'){
            return;
        }else{
        inputField.classList.remove('error');
        }
    });
});

