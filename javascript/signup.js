let emailInput = document.getElementById("emailInput");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let user = [];
let messageContainer = document.getElementById("messageContainer");

if (localStorage.getItem("user") !== null) {
  user = JSON.parse(localStorage.getItem("user"));
}

function clearInputs() {
  emailInput.value = "";
  passwordInput.value = "";
  usernameInput.value = "";
}

function addUser() {
  let userInfo = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  user.push(userInfo);
  localStorage.setItem("user", JSON.stringify(user));
  clearInputs();

  console.log("User added:", user);
}

function validateUser() {
  let isValid = true;

  if (
    emailInput.value === "" ||
    passwordInput.value === "" ||
    usernameInput.value === ""
  ) {
    showMessage("All inputs are required", "danger");
    return;
  }

  for (let i = 0; i < user.length; i++) {
    if (user[i].email === emailInput.value) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    addUser();
    showMessage("Success! Your account has been created.", "success");
  } else {
    showMessage("Email already exists.", "danger");
  }
}

function showMessage(message, type) {
  messageContainer.innerHTML = `<p class="text-${type}">${message}</p>`;
}
