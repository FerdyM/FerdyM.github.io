document.addEventListener("DOMContentLoaded", function(event) {
    navAnimation()
})

function navAnimation() {
    let mainNav = document.getElementById('drop-nav')
    let navBarToggle = document.getElementById('menu-logo')
    
    navBarToggle.addEventListener('click', function () {
        if(mainNav.classList.value === ""){
            mainNav.classList.toggle('drop-down')
        } else {
            mainNav.classList.toggle('not-drop')
            mainNav.classList.toggle('drop-down')
        }
    })
}