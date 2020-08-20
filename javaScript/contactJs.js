function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    var a = document.getElementById("phonenumber").value;
    var res;
    if(a==""){
       alert("** Please Fill Mobile Number..")
        return false;
    }
    if(isNaN(a)){
        alert("** Number Must Contain Digits(0-9)");
        return false;
    }
    if(a.length< 10){
        alert("** Mobile Number Must be 10 digit");
        return false;
    }

    if((a.charAt(0)!=9) && (a.charAt(0)!=8) && (a.charAt(0)!=7)){
        alert("** Invalid Number");
        return false;
    }

    document.form1.text1.focus();
    return true;
}
else
{

    if(inputText.value == ""){
        alert("Please Fill all Details..");
        document.form1.text1.focus();
        return false;
      }
      else{
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;}
}

}