window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('gmail', 'contact_form', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.querySelector('input[name="email"]').value = '';
            }, function(error) {
                console.log('FAILED...', error);
            });
        $('#modal-submit').modal();
    });
}