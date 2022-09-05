// getting form in dom
const form = document.getElementById("form");

//form data
const uname = document.getElementById("name");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const cpwd = document.getElementById("cpassword");

var flag = 0;  
 


//password visiblity
let icon = document.getElementById("icon");
icon.addEventListener("click",()=>{
    if(pwd.type=="password"){
        pwd.type="text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash")
    }else{
        pwd.type="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
})

function check() {
    if(cpwd.value.length>0){
           if(pwd.value != cpwd.value){
                document.getElementById("error").innerText = "Password not matched"
                flag = 0
            }else{
                 document.getElementById("error").innerText = ""
                 flag = 1
             }
           
      }else{
        document.getElementById("error").innerText = "Enter Password"
        flag = 0
      }
}





form.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    //getting data from dom
    const uname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("password").value;
    const cpwd = document.getElementById("cpassword").value;
  
    //push data onlocal 
    var formdata = new Array();
    formdata = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[];
    
    formdata.push({
        "name": uname,
        "userid": email,
       "password": pwd
     })
     localStorage.setItem("user",JSON.stringify(formdata));
})

function validate() {
    if (flag==1) {
        window.location.href="../login/index.html"
        return true;
    }else{
        return false
    }
    
}