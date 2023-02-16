document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("todo-input");
    const addTodo = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");
    
    addTodo.addEventListener("click", function() {
        const todo = todoInput.value;
        if (!todo) return;
      
        const todoItem = document.createElement("li");
        todoItem.classList.add("list-group-item");
      
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-right");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            todoItem.remove();
        });
      
        todoItem.innerHTML = todo + " ";
        todoItem.appendChild(deleteButton);
      
        todoList.appendChild(todoItem);
        todoInput.value = "";
    });



    todoInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const todo = todoInput.value;
            if (!todo) return;
          
            const todoItem = document.createElement("li");
            todoItem.classList.add("list-group-item");
            todoItem.innerHTML = todo;
          
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-right");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            todoItem.remove();
        });
      
        todoItem.innerHTML = todo + " ";
        todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);
            todoInput.value = "";
        }
    });


    const showRandomTodo = document.getElementById("show-random-todo");
    showRandomTodo.addEventListener("click", function() {
      const todoList = document.querySelectorAll("#todo-list li");
      const todoListArray = Array.from(todoList);
      
      const randomIndex = Math.floor(Math.random() * todoListArray.length);
      const selectedTodo = todoListArray[randomIndex];
      
      todoListArray.forEach(function(todo) {
        if (todo !== selectedTodo) {
          todo.remove();
        }
      });
    });
});


const quoteDisplay = document.getElementById("quote-of-the-day");
const refreshQuote = function() {
var category = 'happiness';
$.ajax({
method: 'GET',
url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
headers: { 'X-Api-Key': 'uP40lh/wenPlJPt0hKovWA==mx10FGayl1XTNgTo'},
contentType: 'application/json',
success: function(result) {
console.log(result);
if (result.length > 0) {
const quoteDisplay = document.getElementById("quote-of-the-day");
quoteDisplay.innerText = result[0].quote;
} else {
console.error("No quotes found");
}
},
error: function ajaxError(jqXHR) {
console.error('Error: ', jqXHR.responseText);
}
});

}

refreshQuote();


