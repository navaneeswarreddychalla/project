function formValidation()
{
var uid = document.registration.userid;
var uemail = document.registration.email;
var uphone=document.registration.phone;
if(userid_validation(uid,6,15))
{
if(ValidateEmail(uemail))
{
if(allnumeric(uphone))
{
}
}
}
return false;
}
 function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function allnumeric(uphone)
{
var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(uphone.value.match(phoneNum)) 
{
return true;
}
else
{
alert("phone number must contain numbers only!");
uphone.focus();
return false;
}
}
