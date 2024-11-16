document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation
    if (name && email && message) {
        alert("Thank you, " + name + ". Your message has been sent!");
        // You can replace this with actual form submission logic or email API integration
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});