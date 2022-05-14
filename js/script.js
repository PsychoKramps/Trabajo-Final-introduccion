

document.getElementById('btn_register') .addEventListener("click", link_register);
document.getElementById('link_log') .addEventListener("click", link_login);


//Variables
var container_form = document.querySelector("container");
var form_login = document.querySelector(".form_login");
var form_register = document.querySelector(".form_register");

function link_register(event){
    event.preventDefault()
    form_register.style.display = "block";
    form_login.style.display = "none";
    
}

function link_login(event){
    event.preventDefault()
    form_register.style.display = "none";
    form_login.style.display = "block";
}

