
jQuery(function () {
    $(document).ready(function(){

        $("button").click(function(){

            console.log($("#lName"));
        });
    
  });
});

function addUser(){

    

    console.log('in function');
    var table = document.getElementById("tBody");
    console.log('in function');
    console.log(table);

    table.insertRow(0).innerHTML = document.getElementById("fName");
    // cell.innerHTML = tableCount;
    table.insertRow(1);
    table.insertRow(2);
    table.insertRow(3);

    // cell.innerHTML = tableCount;
}
    