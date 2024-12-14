let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let user = [];
let messageContainer = document.getElementById("messageContainer");

if (localStorage.getItem("user") !== null) {
  user = JSON.parse(localStorage.getItem("user"));
}

function clearInputs() {
  emailInput.value = "";
  passwordInput.value = "";
}

function validateUser() {
  let isValid = false;
  let username = "";

  if (emailInput.value === "" || passwordInput.value === "") {
    showMessage("All inputs are required", "danger");
    return;
  }

  for (let i = 0; i < user.length; i++) {
    if (
      user[i].email === emailInput.value &&
      user[i].password === passwordInput.value
    ) {
      isValid = true;
      username = user[i].username;
      break;
    }
  }

  if (isValid) {
    localStorage.setItem("loggedInUser", username);
    showMessage("Login successful! Redirecting to home page...", "success");

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  } else {
    showMessage("Invalid email or password.", "danger");
  }
}

function showMessage(message, type) {
  messageContainer.innerHTML = `<p class="text-${type}">${message}</p>`;
}
