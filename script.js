// script.js
function inquiry() {
  alert("Thank you for your interest. Please fill out the contact form below.");
}

document.getElementById('inquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Inquiry submitted. We will get back to you shortly.');
});
