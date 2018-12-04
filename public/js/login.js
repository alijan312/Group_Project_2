$(document).ready(function() {
    // Saving form and inputs into variables
    const loginForm = $("login-form");
    const emailInput = $("email-input");
    const passwordInput = $("password-input");

    // Validate email and password when form is submitted
    loginForm.on("submit", function(event) {
        event.preventDefault();
        let agencyData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!agencyData.email || !agencyData.password) {
            return;
        }

        // If email and password are valid we run the following function and clear the form
        loginUser(agencyData.email, agencyData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // Post request to api/login route
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function(data) {
                // If request is succesful redirect to the user page
                window.location.replace(data);
                // If there is an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});
