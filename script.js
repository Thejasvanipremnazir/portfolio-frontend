
// Animation on scroll
AOS.init({
  duration: 1000
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("https://portfolio-backend-t6su.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    alert(data.msg);
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
});

