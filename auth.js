const authPanel = document.getElementById("authPanel");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const params = new URLSearchParams(window.location.search);

if (params.get("mode") === "register") {
  authPanel.classList.add("active");
}

registerBtn.addEventListener("click", () => {
  authPanel.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  authPanel.classList.remove("active");
});

document.querySelectorAll(".auth_modern_form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Función en desarrollo. Aquí puedes conectar tu base de datos o backend.");
  });
});
