
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#addInput");
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#filterForm");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    // filterInput.addEventListener("keyup", filter);
}

// Yoxlanilir
function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach((function (todo) {
        addNewTodo(todo);
    }));
}

// Yeni todo
function addTodo(e) {
    e.preventDefault();
    let inputText = addInput.value.trim();
    if (inputText === "" || inputText === null) {
        alert("Bir değer girin");
    } else {
        addNewTodo(inputText);
        addTodoToStorage(inputText);
    }
    
}

// Elementin yaradılması
function addNewTodo(newTodo) {
    const li = document.createElement("li");
    const i = document.createElement("i");
    li.className = "myLi";
    li.textContent = newTodo;
    i.className = "fa-solid fa-trash";
    document.getElementsByTagName("ol")[0].appendChild(li);
    document.getElementsByTagName("ol")[0].appendChild(i);
    addInput.value = "";
    // document.querySelector(".fa-solid.fa-trash").addEventListener("click",oneClearStorage);
    // function oneClearStorage(params) {
    //     li.remove();
    //     i.remove();
    // }
}





// Local storege atmaq
function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Todo li yoxlama
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

// Clear all Storage
clearButton.addEventListener("click",clearAllStorage);
function clearAllStorage(params) {
    localStorage.clear();    
}



// function filter(e) {
    
// }




