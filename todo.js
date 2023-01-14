const list_container = document.getElementById('list-container')

new_todo_input.addEventListener("keyup", function(event){
    event.preventDefault();
    

    if (event.keyCode === 13) {

        if (new_todo_input.value === "")
        {
            console.log('required')
            return

        } else {

            addTodoText.style.display = 'none'
            todoContainer.style.minHeight = 'auto'
        
            const newTodo = new_todo_input.value
                
            const itemDiv = document.createElement('div')

            const content = document.createElement('input')
            const itemChckbx = document.createElement('input')
            const actionUpdate = document.createElement('i')
            const actionDelete = document.createElement('i')

            itemDiv.classList.add('todos')
            itemDiv.classList.add('todo-items')
            itemDiv.id ='item-div'

            content.type = 'text'
            content.classList.add('content')
            content.id = 'content'
            content.setAttribute('readonly', 'readonly')
            content.value = newTodo

            itemChckbx.setAttribute('type', 'checkbox')
            itemChckbx.id = 'item-checkbox'

            actionUpdate.classList.add('fa-regular')
            actionUpdate.classList.add('fa-pen-to-square')
            actionUpdate.id = 'updateTodo'

            actionDelete.classList.add('fa-solid')
            actionDelete.classList.add('fa-x')
            actionDelete.id = 'deleteTodo'

            itemDiv.appendChild(itemChckbx)
            itemDiv.appendChild(content)
            itemDiv.appendChild(actionUpdate)
            itemDiv.appendChild(actionDelete)

            list_container.appendChild(itemDiv)

            new_todo_input.value = ""

            itemChckbx.addEventListener('click', () => {

                if (itemChckbx.checked == true) {

                    content.style.textDecoration = "line-through"
                    content.style.color = "gray"
                } else {
                    content.style.textDecoration = "none"
                    content.style.color = "white"
                }
            })

            actionUpdate.addEventListener('click', () => {
                content.removeAttribute('readonly')
                content.focus()

                content.addEventListener("keyup", function(event){
                    event.preventDefault();

                    if (event.keyCode === 13) {

                        content.setAttribute('readonly', 'readonly')

                    }
                })
            })

            actionDelete.addEventListener('click', () => {

                list_container.removeChild(itemDiv)
            })

        }
        
    }
})
// todos = JSON.parse(localStorage.getItem('todos')) || [];

// window.addEventListener('load', () => {

//     new_todo_input.addEventListener("keyup", (e) => {
//         e.preventDefault()

//         if (event.keyCode === 13) {

//             let newTodo = e.target.value
//             todos.push(newTodo)

//             localStorage.setItem('todos', JSON.stringify(todos))

//             e.target.value = ''

//             displayTodo()
//         } 

//     })
    
//     displayTodo()

// })

// displayTodo()

// function displayTodo () {

//     list_container.innerHTML = ''

//     todos.forEach(todo => {
//         console.log(todo)
//     });
// }

// const todoItems = []

// new_todo_input.addEventListener("keyup", function(event){
//     event.preventDefault();
    

//     if (event.keyCode === 13) {

//         const newTodo = new_todo_input.value
//         todoItems.push(newTodo)
//         new_todo_input.value = ""
        
        
//     }
// })


// function displayTodo () {
//     const listContainer = document.getElementById("list-container")
    
//     console.log(todoItems)
//     todoItems.forEach(todo => {
//         const todoDiv = document.createElement("div")
//         todoDiv.innerHTML = todo

//         listContainer.appendChild(todoDiv)

//         console.log(todo)
//     })

    
// }

// while (todoItems.length !== 0) {
//     displayTodo()
// }




