let users = [];

// let User = {
//     fName: "",
//     lName: "",
//     address: "",
//     email: ""
// }




// jQuery(function () {
//     $(document).ready(function(){

//         $("button").click(function(){

//             console.log($("#lName"));
//         });
    
//   });
// });

function addUser(){

    //let user = new User();
    let user = new Object();
    user.fName = document.getElementById("fname").value;
    user.lName = document.getElementById("lname").value;
    user.address = document.getElementById("address").value;
    user.email = document.getElementById("email").value;

    let table = document.getElementById("tbody");

    let row = table.insertRow();


    // for(var attr in user.value){
    //     let cell = row.insertCell();
    //     console.log(attr);
    //     cell.innerHTML = attr;
    // }
    
    
    let cell = row.insertCell();
    cell.innerHTML = document.getElementById("fname").value;
    cell = row.insertCell();
    cell.innerHTML = document.getElementById("lname").value;
    cell = row.insertCell(2);
    cell.innerHTML = document.getElementById("address").value;
    cell = row.insertCell(3);
    cell.innerHTML = document.getElementById("email").value;
}
    
function loadDoc() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "todo.json", true);
  
    //xhr.open("GET", "https://restcountries.com/v3.1/all", true);
    xhr.onreadystatechange = function() {
      if (this.status == 200) {
        let countries = JSON.parse(this.response);
        alert(countries[0].text);
        console.log(countries);
      }
    };
    xhr.send();
  }
  loadDoc();