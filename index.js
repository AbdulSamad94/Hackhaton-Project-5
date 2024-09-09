var form = document.getElementById('detailsForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education1 = document.getElementById('education1').value;
    var education2 = document.getElementById('education2').value;
    var experience1 = document.getElementById('experience1').value;
    var experience2 = document.getElementById('experience2').value;
    var skills = document.getElementById('skills').value;
    var userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
        education: [education1, education2],
        experience: [experience1, experience2],
        skills: skills,
    };
    // Saving the dataa bhai so when reloads the page ye disspaer na ho
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
   // dosre page ke luiye
    window.location.href = "main.html";
});
