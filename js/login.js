// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get values from input fields
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     // Get stored data from local storage
//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');

//     // Verify credentials
//     if (email === storedEmail && password === storedPassword) {
//         alert('Login successful!');
//         // Redirect to a welcome page or dashboard
//         window.location.href = '../index.html'; // Replace with your welcome page
//     } else {
//         alert('Invalid email or password. Please try again.');
//     }
// });

// let email = document.querySelector("#email")
// let password = document.querySelector("#password")

// let loginBtn = document.querySelector("#submit")

// let getemail = localStorage.getItem("email")
// let getPassword = localStorage.getItem("password")

// loginBtn.addEventListener ("click" , function(e){
//     e.preventDefault()
//     if (email.value==="" || password.value===""){
//         alert("please fill data ")
//     } else {
//         if ( (getemail && getemail.trim() === getemail.value.trim() && getPassword && getPassword === password.value )  )
//         {
//             setTimeout ( () => {
//                 window.location = "index.html"
//             } , 1500)
//         } else {
//             console.log("username or password is wrong ")
//         }
//     }
// })
let email = document.querySelector(".input[type='email']");
let password = document.querySelector(".input[type='password']");
let loginBtn = document.querySelector("#submit");

let getemail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
    } else {
        if (getemail && getemail.trim() === email.value.trim() && getPassword && getPassword === password.value) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1500);
        } else {
            alert("Username or password is wrong");
        }
    }
});



