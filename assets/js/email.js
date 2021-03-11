window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
        var emailAlert = '';
        var isEmailValid = document.getElementById('input-email').value;
        if (isEmailValid == '') {
            emailAlert += "<div class='alert alert-warning text-center' role='alert'><span class='icon icon-warning'></span><br><p class='alert-para'>You forgot to enter your email address!</p><p class='alert-para'>Please try again.</p></div>";
            document.getElementById('error-message-email').innerHTML = emailAlert;
            return false;
        } else if (!isEmail(isEmailValid)) {
            emailAlert += "<div class='alert alert-warning text-center' role='alert'><span class='icon icon-warning'></span><br><p class='alert-para'>Please enter a <span class='underline'>valid</span> email address!</p><p class='alert-para'>e.g. <span class='emphasise'>yourname@gmail.com</span></p></div>";
            document.getElementById('error-message-email').innerHTML = emailAlert;
            return false;
        };
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('gmail', 'contactform', this)
            .then(function(response) {
                document.getElementById('error-message-email').innerHTML = '';
                document.getElementById('input-email').value = '';
                $('#modal-submit').modal();
            }, function(error) {
                setTimeout(() => {
                    document.getElementById('error-message-email').innerHTML = "<div class='alert alert-danger text-center' role='alert'><span class='icon icon-warning'></span><br><p class='alert-para'>We're sorry, but something's gone wrong.</p><p class='alert-para'>Please refresh the page and try again!</p></div>";
                    document.getElementById('input-email').value = '';
                }, 3000);
            });
    });
}