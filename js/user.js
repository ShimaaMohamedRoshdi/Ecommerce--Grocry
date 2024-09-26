document.addEventListener("DOMContentLoaded", function() {
    let userNameElement = document.querySelector("#user-name");

    // Check if firstname is in localStorage
    if (localStorage.getItem("firstname")) {
        // Get the firstname from local storage
        let firstname = localStorage.getItem("firstname");
        
        // Display the firstname next to the user icon
        userNameElement.innerText = firstname; // Set the first name text
    }
});