const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>?/";

let password1 = "";
let password2 = "";

const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

function makePassword() {
  password1 = "";
  password2 = "";
  for (let i = 0; i < 20; i++) {
    password1 += chars[Math.floor(Math.random() * chars.length)];
    password2 += chars[Math.floor(Math.random() * chars.length)];
  }
}

const button = document.querySelector(".js-generate-btn");

button.addEventListener("click", () => {
  makePassword();

  pass1.innerText = password1;
  pass2.innerText = password2;
});


pass1.addEventListener("click", () => {
  navigator.clipboard.writeText(pass1.innerText);
  alert('Successfully copied!');
});

pass2.addEventListener("click", () => {
  navigator.clipboard.writeText(pass2.innerText);
  alert('Successfully copied!');
});