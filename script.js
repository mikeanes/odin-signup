const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');
const afterText = document.getElementById('after-text');

function comparePassword(){
    if(password.value === confPassword.value){
        afterText.classList.remove("after-text");
        password.classList.remove("error");
        confPassword.classList.remove("error");
    }else{
        afterText.classList.add("after-text");
        password.classList.add("error");
        confPassword.classList.add("error");
    }
}

password.addEventListener("input", comparePassword);
confPassword.addEventListener("input", comparePassword);