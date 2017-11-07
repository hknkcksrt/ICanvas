function validateForm(){
    var nameRegex = /^[a-zA-Z\-]+$/;
    var inputPassword = document.frm.firstName.value.match(nameRegex);
    if(inputPassword == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.frm.firstName.focus();
        return false;
    }
}