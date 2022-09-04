/*Login page js*/
var attempt = 3;/*Attempts set to three*/
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Stance" && password == "stance123"){
        alert ("Login successfully");
        window.location = "index.html";
        return false;
    }/*If function to determine whether the user details much to the stored ones*/
    else{
        attempt --;
        alert("Incorrect login details,You have left "+attempt+" attempt;");
    if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
    }
}