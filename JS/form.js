let users = [];

function addUser(){
  console.log("in add user");

  let table = document.getElementById("thead");
  let row = table.insertRow();

    Object.keys(users[0]).forEach(attr => {
      let cell = row.insertCell();
      cell.innerHTML = attr;
    });

  table = document.getElementById("tbody");

  Object.values(users).forEach(element => {
    row = table.insertRow();
    Object.values(element).forEach(attr => {
      console.log(attr);
      let cell = row.insertCell();
      cell.innerHTML = attr;
    });
  });



}
    
function loadDoc() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "todo.json", true);
    xhr.onreadystatechange = function() {
      if (this.status == 200) {
        users = JSON.parse(this.response);
        console.log(this);
      }
    };
    xhr.send();
  }
