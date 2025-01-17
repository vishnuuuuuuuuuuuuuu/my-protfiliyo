// Form submission handling with simple validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      document.getElementById("response").classList.remove("hidden");
      document.getElementById("response").textContent = "Thank you for reaching out!";
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  