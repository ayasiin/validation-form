function checkdata(){
const userName = document.getElementById('name')
const email_address = document.getElementById('email')
// check if username field is empty
if(userName.value ==''){
    alert ('please enter the name')
    userName.focus();
    return false
}
// check if email is empty
if (email_address == ''){
    alert('please enter your email')
    email_address.focus()
    return false
}
     return true;
}