const 
    focus_checkbox = document.getElementById("focus-chckbx"),
    itemCheckbox = document.getElementById("updateTodo")

focus_checkbox.addEventListener('click', () => {

    if (focus_checkbox.checked == true) {
        focus_text.style.textDecoration = "line-through"
    } else {
        focus_text.style.textDecoration = "none"
    }
})

itemChckbx.addEventListener('click', () => {

    if (itemCheckbox.checked == true) {
        itemCheckbox.style.textDecoration = "line-through"
    } else {
        itemCheckbox.style.textDecoration = "none"
    }
})
