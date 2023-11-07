const sidebar = document.querySelector('.side-bar')
const toggle = document.querySelector('.toggle')

toggle.addEventListener("click", function () {
    sidebar.classList.toggle("close")
})