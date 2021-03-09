$(document).ready(function() {
    $('#nav-toggler').click(function() {
        $('.nav-toggler-icon').toggleClass('active');
        $('#nav-toggler').toggleClass('no-border');
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