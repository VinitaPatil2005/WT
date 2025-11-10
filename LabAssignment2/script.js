document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get user input
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = { name, email, password };

      // Store in LocalStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      // Show success alert immediately
      alert(`✅ Registration Successful!\n\nWelcome, ${name}! Your account has been created.`);

      // AJAX POST request (simulated)
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://example.com/api/register", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log("Data sent to server successfully.");
        }
      };
      xhr.send(JSON.stringify(user));

      // Reset form
      form.reset();
    });
  }

  // For data.html: Display users as cards
  const userList = document.getElementById("userList");
  if (userList) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length === 0) {
      userList.innerHTML = "<p class='text-center text-muted'>No users registered yet.</p>";
    } else {
      users.forEach((u) => {
        let card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">${u.name}</h5>
              <p class="card-text"><strong>Email:</strong> ${u.email}</p>
              <p class="text-muted small">Password stored securely in backend (demo only)</p>
            </div>
          </div>
        `;
        userList.appendChild(card);
      });
    }
  }
});
