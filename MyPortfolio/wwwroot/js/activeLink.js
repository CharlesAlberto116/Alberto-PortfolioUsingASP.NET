const links = document.querySelectorAll('.top-nav a');

links.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active class from all links
        links.forEach(l => l.classList.remove('nav-active'));
        // Add the oval class to the clicked link
        this.classList.add('nav-active');
    });
});