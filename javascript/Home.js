window.onload = function () {
  let loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    document.querySelector("h1").textContent = `Welcome ${loggedInUser}`;
  } else {
    window.location.href = "index.html";
  }
};

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
