<script>
    function navbar
    let mainNav = document.getElementById('drop-nav');
    let navBarToggle = document.getElementById('menu-logo');
    navBarToggle.addEventListener('click', function () {
        mainNav.classList.toggle('not-drop');
        mainNav.classList.toggle('scale-in-top');
        mainNav.classList.toggle('drop-down');
    });
</script>