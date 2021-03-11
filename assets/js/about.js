$(document).ready(function() {
    const animateNavToggler = document.getElementById('nav-toggler');
    const navTogglerIcons = document.querySelectorAll('.nav-toggler-icon');

    // Custom nav toggler icon animation on click - code block adapted from https://www.youtube.com/watch?v=g7v4BB9IMRw
    $(animateNavToggler).click(function() {
        $(navTogglerIcons).toggleClass('active');
        $(animateNavToggler).toggleClass('no-border');
    });
    $('.dropdown-toggle').click(function() {
        if (this.classList.contains('clicked')) {
            $(this).removeClass('clicked');
        } else {
            $('.clicked').toggleClass('clicked');
            $(this).addClass('clicked');
        }
    });
    $("#content-main").click(function() {
        $('.dropdown-toggle').removeClass('clicked');
    });
});