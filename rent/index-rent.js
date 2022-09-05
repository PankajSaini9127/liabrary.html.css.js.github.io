
const email = document.getElementById("navemail");
const form = document.getElementById("form");
const bookName = document.getElementById("bookname");
const issuedate = document.getElementById("issuedate") ;
const returndate = document.getElementById("returndate") ;
const contact = document.getElementById("contactno") ;

//accout info section me email 
email.innerHTML= localStorage.getItem("l-email")

//logout
let logoutbtn = document.getElementById("logoutbtn");
 
logoutbtn.addEventListener("click",()=>{
   window.location.href="../login/index.html"
   localStorage.setItem("login",0);
   
})
if (localStorage.getItem("login")!=1) {
   window.location.href="../login/index.html"
}

form.addEventListener("submit",(e)=>{
   e.preventDefault();
    
   var data = new Array();
   data = JSON.parse(localStorage.getItem("rent"))?JSON.parse(localStorage.getItem("rent")):[];
      
   data.push(
    {
       "BookName": bookName.value,
       "Issuedate": issuedate.value,
       "returndate": returndate.value,
       "contact": contact.value
   }
   )
   localStorage.setItem("rent",JSON.stringify(data))
});
