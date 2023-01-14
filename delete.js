const deleteFocus = document.getElementById("delete")

deleteFocus.addEventListener('click', () => {
    new_focus.style.display = "none"
    focus_container.style.display = "block"
    focus_input.value = ""
})