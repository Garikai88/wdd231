document.getElementById("registrationForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for registering! We look forward to celebrating Valentine's Day with you.");
  
  const formData = {
    full_name: document.getElementById("full-name").ariaValueMax,
    phone_number: document.getElementById("phone_number").value,
    email: document.getElementById("email").value,
    ward_branch: document.getElementById("ward_branch").value
    
    
  };

  console.log("Form submitted:", formData);

  // Generate QR code using external API
  const qrCodeUrl = `https://
  api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(formData.full_name + "-" + formData.email)}`;

  document.getElementById("qrCode").src = qrCodeUrl;
  document.getElementById("qrSection").classList.remove("hidden");
});