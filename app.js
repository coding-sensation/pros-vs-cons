// const title = prompt("Enter the title of the table:");
//  document.querySelector("h1").innerHTML = title;

//  do{

//  const prosInput = prompt("Enter the pro you wish to add:");
//  const consInput = prompt("Enter the con you wish to add:");
//  document.querySelector("table").innerHTML += '<tr><td><h4>'+prosInput+'</h4></td><td><h4>'+consInput+'</h4></td></tr>';

 
// }while(consInput !=="");

function submitTitle(){
    let titleInput = document.getElementById("title").value;
    let title = document.createElement("h1");
    title.innerHTML = titleInput;
}

function addPro(){
    let prosInput = document.getElementById("pro").value;
    document.querySelector("table").innerHTML += '<tr><td><h4>'+prosInput+'</h4></td>';

}

function addCon(){
    let consInput = document.getElementById("con").value;
    document.querySelector("table").innerHTML += '<td><h4>'+consInput+'</h4></td></tr>';

}