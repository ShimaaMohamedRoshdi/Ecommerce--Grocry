// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get values from input fields
//     const firstname = document.getElementById('firstname').value;
//     const lastname = document.getElementById('lastname').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Store values in local storage
//     localStorage.setItem('firstname', firstname);
//     localStorage.setItem('lastname', lastname);
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);

//     // Optionally redirect to the login page or show a success message
//     alert('Registration successful!');
//     window.location.href = './login.html'; // Redirect to login page
// });


    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let register_btn = document.querySelector("#Register");

    register_btn.addEventListener("click", function () {
        if (firstname.value === "" || lastname.value === "" || email.value === "" || password.value === "") {
            alert("Please fill in all fields");
        } else {
            localStorage.setItem("firstname", firstname.value);
            localStorage.setItem("lastname", lastname.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value);  

            alert("Registration successful!"); // Added alert for success
            
            setTimeout(() => {
                window.location = "login.html"; // Redirect after storing
            }, 1500);
        }
    });

