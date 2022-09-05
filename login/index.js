// getting form in dom
const form = document.getElementById("form");
var flag = 0;
//Retriving Data from localStorage
const userdataS = localStorage.getItem("user");
const userdata =JSON.parse(userdataS)

// console.log(userid + password)


form.addEventListener("submit",(e)=>{
e.preventDefault();

// getting data from form
const email = document.getElementById("email").value;
const pwd =  document.getElementById("password").value;

for (let i = 0; i < userdata.length; i++) {
    var uid = userdata[i].userid;
    var psw = userdata[i].password;

    if (email==uid && pwd===psw) {
        localStorage.setItem("l-email",uid)
        localStorage.setItem("login","1")
        window.location.href = "../home/home.html"
    } 
    
}
if (localStorage.getItem("login")!=1) {
    document.getElementById("error").innerText = "Invalid !   UserID or Password "
} 
})

//password visiblity
let icon = document.getElementById("icon");
icon.addEventListener("click",()=>{
let pwd = document.getElementById("password");
   if (pwd.type=="password") {
      pwd.type="text"
      icon.classList.remove("fa-eye-slash")
      icon.classList.add("fa-eye")
   }else{
    pwd.type="password"
    icon.classList.remove("fa-eye")
    icon.classList.add("fa-eye-slash")
   }
})