window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 1009) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    } else {
        navbar.style.position = 'static';
    }
});