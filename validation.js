document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please fill out all required fields!');
        event.preventDefault();
    }
});
