
const email = document.getElementById("navemail"); 
const listbtn = document.getElementById("booklistbtn");
const table = document.getElementById("table");
const footer = document.getElementById("footer");
const tablehead = document.getElementById("tablerow")
const spiner = document.getElementById("spiner");

//populet book list
listbtn.addEventListener("click",getdata);

//accout info section me email 
email.innerHTML= localStorage.getItem("l-email")


// logout function
function logout() {
  localStorage.setItem("login", 0)  //set value of login = 0
  window.location.href="../login/index.html"      //location after logout
}

//book rent btn
function bookrent() {
  window.location.href="../rent/index-rent.html";
}

// for check that user are login or not  
const login = localStorage.getItem("login");
  if (login!= 1)     // login == 1 for user login
   {
    window.location.href="../login/index.html"        //user login ni hua to uski location
    }

//Api call
async function getdata() {
  spiner.innerHTML = `
                <h3>Loading..</h3>
                `
  const response = await fetch(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ygQyy3feO2aazG50Tn3UDo37uTbG7AF2"
  );
  
  const data = await response.json();
  return showdata(data)
};

//for data render in dom
function showdata(data){

      tablehead.classList.add("tablerow2")
       let ary = data.results.books;
    
    for (let i = 0; i < ary.length; i++) {
      spiner.innerHTML =``
     table.innerHTML += `
                  <tr id="dyanamicdata">
                        <td>${data.results.books[i].rank}</td>
                        <td><img src="${data.results.books[i].book_image}" alt="" srcset="" height="250px" ></td>
                        <td>${data.results.books[i].author}</td>
                        <td>${data.results.books[i].title}</td>
                        <td>${data.results.books[i].description} </td>
                        <td><a href="${data.results.books[i].buy_links[0].url}" target="_blank">${data.results.books[i].buy_links[0].name}</a></td>
                    </tr>
        `
        
}
     footer.classList.add("footer2")
     footer.innerHTML = `
     <h3>${data.copyright}</h3>
     `
}