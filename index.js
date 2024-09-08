var form = document.getElementById('detailsForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education1 = document.getElementById('education1').value;
    var education2 = document.getElementById('education2').value;
    var experience1 = document.getElementById('experience1').value;
    var experience2 = document.getElementById('experience2').value;
    var skills = document.getElementById('skills').value;
    // Create an object to store the form data
    var userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
        education: [education1, education2],
        experience: [experience1, experience2],
        skills: skills,
    };
    // Save the data in localStorage to retrieve on the other page
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    // Redirect the user to the display page
    window.location.href = "main.html";
});
