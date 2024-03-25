function Showbtn(){
    pswd = document.getElementById("pass").type="text";
    document.getElementById("show").style.display="none";
    document.getElementById("hide").style.display="inline";

}
function Hidebtn(){
    document.getElementById("pass").type="password";
    document.getElementById("show").style.display="inline";
    document.getElementById("hide").style.display="none";
}
function show(){
    pswd = document.getElementById("confirm").type="text";
    document.getElementById("showbtn").style.display="none";
    document.getElementById("hidebtn").style.display="inline";

}
function hide(){
    document.getElementById("confirm").type="password";
    document.getElementById("showbtn").style.display="inline";
    document.getElementById("hidebtn").style.display="none";
}
function eye(){
    document.getElementById('show').style.display = "inline";
}
function Eye(){
    document.getElementById('showbtn').style.display="inline";
}
function message(){
    var pswd = document.getElementById('pass').value;
    var confirm =document.getElementById("confirm").value;
    var email =document.getElementById("email").value;
    if(email == "" || pswd == "" || confirm == ""){
        window.alert("Please enter the credentials correctly.");
    }
    else if(pswd == confirm){
        alert("Congratulations! Account created successfully.");
    }
    else if(pswd != confirm){
        window.alert("Passwords did not match. Please try again.");
    }
    else{
        alert("Please enter the credentials correctly.")
    }
};
