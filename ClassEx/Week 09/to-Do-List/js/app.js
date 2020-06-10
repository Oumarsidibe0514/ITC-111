// Selecting Elements In variables
const clear = document.querySelector(".clear"); // select the clear button 
const dateElement = document.getElementById("date"); // shows todays date 
const list = document.getElementById("list"); // where item live
const input = document.getElementById("input"); // get user input

// classes Names 
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "ineThrough";

// Variables

let LIST, id;

// Get intem from localStorage

let data = localStorage.getItem("TODO");

// Check if data is empty 

if (data) {
    LIST = JSON.parse(data);
    id = LIST.length // set the id to last in list
    loadList(LIST);

} else {
    // if data is not empty 
    LIST = [];
    id = 0;
}

// load item into user interface
function loadList(array){
    array.forEach*(function(item) {
        addTDo(item.name, item.id, item.done, item.trash)
    });

}

//Clear item from user interface

clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})

