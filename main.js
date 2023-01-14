

const name_heading = document.getElementById("name-heading");
const email_heading = document.getElementById("email-heading");
const name_input = document.getElementById("name-input");
const email_input = document.getElementById("email-input");
const name_button = document.getElementById("nameBtn");
const email_button = document.getElementById("emailBtn");
const homeCont = document.getElementById("home-container")
const mainCont = document.getElementById("main-container")
const todoBtn = document.getElementById("todo"),
    focus_container = document.getElementById("new-focus-container"),
    focus_input = document.getElementById("dos-today"),
    focus_text = document.getElementById("focus-text"),
    new_focus = document.getElementById("new-focus"),
    quotesText = document.getElementById("quotes"),
    addTodoText = document.getElementById("addTodoText"),
    todoContainer = document.getElementById("todo-container"),
    new_todo_btn = document.getElementById("newTodoBtn"),
    new_todo_input = document.getElementById("new-todo-input")

name_input.addEventListener("keyup", function(event){
    event.preventDefault();

    if (event.keyCode === 13) {
        
        if (name_input.value === "") {
            alert('Please enter your name.')
            return
        }

        homeCont.style.display = "none";
        mainCont.style.display = "flex";
        todoBtn.style.display = "block"
        quotesText.style.display = "block"

        focus_input.setAttribute('autofocus', 'autofocus')
    }
        
})

focus_input.addEventListener("keyup", function(event){
    event.preventDefault();

    if (event.keyCode === 13) {
        
        if (focus_input.value === "") {
            return
        }

        focus_container.style.display = "none";
        new_focus.style.display = "block"
        focus_text.innerHTML = focus_input.value;
    }
        
})

new_todo_btn.addEventListener("click", () => {
    new_todo_input.style.visibility = "visible"
    new_todo_btn.style.display = "none"
})

todoBtn.addEventListener("click", () => {

    if (todoContainer.style.display != "grid") {

        todoContainer.style.display = "grid"

    } else {

        todoContainer.style.display = "none"

    }

})

window.addEventListener('click', (e) => {

    if (e.target.id !== 'todo-container' && e.target.id !== 'todo' 
        && e.target.id !== 'addTodoText'
        && e.target.id !== 'newTodoBtn'
        && e.target.id !== 'list-container'
        && e.target.id !== 'new-todo-input'
        && e.target.id !== 'content'
        && e.target.id !== 'item-checkbox'
        && e.target.id !== 'updateTodo'
        && e.target.id !== 'deleteTodo'
        && e.target.id !== 'item-div') {
        
        todoContainer.style.display = "none"
    } else {
        todoContainer.style.display = "grid"
    }
})





