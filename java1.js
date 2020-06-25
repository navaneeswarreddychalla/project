function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var ulname = document.registration.lastname;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var uphone=document.registration.phone;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;
if(userid_validation(uid,6,15))
{
if(passid_validation(passid,6,12))
{
if(allLetter(uname))
{
if(allLetter1(ulname))
{
if(alphanumeric(uadd))
{ 
if(ValidateEmail(uemail))
{
if(allnumeric(uphone))
{
if(validsex(umsex,ufsex))
{
}
} 
}
}
}
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
function passid_validation(inputtxt) 
{ 
var passw=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z](?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
if(inputtxt.value.match(passw)) 
{ 
return true;
}
else
{ 
alert('password must contain one capital letter ,one small letter,onespecialcharacter,one number,length betwwen 7 to 12 digits and start with a character')
inputtxt.focus();
return false;
}
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Firstname must have alphabet characters only');
uname.focus();
return false;
}
}
function allLetter1(ulname)
{ 
var letters = /^[A-Za-z]+$/;
if(ulname.value.match(letters))
{
return true;
}
else
{
alert('Lastname must have alphabet characters only');
ulname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z ]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
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
function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
return true;
}
}
