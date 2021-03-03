$(document).ready(function() {
    $('#nav-toggler').click(function() {
        $('.nav-toggler-icon').toggleClass('active');
        $('#nav-toggler').toggleClass('no-border');
    });
});