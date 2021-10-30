"use strict";

const formControl = document.querySelector(".form-control");

formControl.addEventListener("submit", (e) => {
  e.preventDefault();
});

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const cnfPass = document.querySelector("#password2");
const btn = document.querySelector("#submit");

const checkUsername = () => {
  const name = username.value;

  if (name === "") {
    document.querySelector(".user-error").innerHTML = "&nbsp;";
    username.style.borderColor = "hsl(0, 0%, 85%)";
  } else if (name.length < 6) {
    document.querySelector(".user-error").innerHTML =
      "Username must contain at least 6 characters";
    username.style.borderColor = "red";
  } else if (
    name.includes("@") ||
    name.includes(".") ||
    name.includes("$") ||
    name.includes(",")
  ) {
    document.querySelector(".user-error").innerHTML =
      "Username must not contain '@', '.', ',' and '$'";
    username.style.borderColor = "red";
  } else if (
    name[name.length - 1] === "_" ||
    name[name.length - 1] === "." ||
    name[name.length - 1] === "#" ||
    name[name.length - 1] === ","
  ) {
    document.querySelector(".user-error").innerHTML =
      "Trailing hashes, commas, underscores<br> and periods not accepted";
    username.style.borderColor = "red";
  } else {
    username.style.borderColor = "green";
    document.querySelector(".user-error").innerHTML = "&nbsp;";
  }
};

const checkEmail = () => {
  const mail = email.value;

  if (mail === "") {
    document.querySelector(".email-error").innerHTML = "&nbsp;";
    username.style.borderColor = "hsl(0, 0%, 85%)";
  } else if (!mail.includes("@") || !mail.includes(".")) {
    document.querySelector(".email-error").innerHTML =
      "Please enter a valid email address";
    email.style.borderColor = "red";
  } else if (
    mail.substring(mail.indexOf("@") + 1, mail.indexOf(".")).length === 0
  ) {
    document.querySelector(".email-error").innerHTML =
      "'.' is positioned incorrectly";
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "green";
    document.querySelector(".email-error").innerHTML = "&nbsp;";
  }
};

const checkPass = () => {
  const password = pass.value;

  if (password === "") {
    document.querySelector(".password-error").innerHTML = "&nbsp;";
    username.style.borderColor = "hsl(0, 0%, 85%)";
  } else if (password.length < 8) {
    document.querySelector(".password-error").innerHTML =
      "Password must be at least 8 characters long";
    pass.style.borderColor = "red";
  } else {
    document.querySelector(".password-error").innerHTML = "&nbsp;";
    pass.style.borderColor = "green";
  }
};

const confirmPass = () => {
  const pass2 = cnfPass.value;

  if (pass2 === "") {
    document.querySelector(".confirm-password-error").innerHTML = "&nbsp;";
    username.style.borderColor = "hsl(0, 0%, 85%)";
  } else if (pass2 !== pass.value) {
    document.querySelector(".confirm-password-error").innerHTML =
      "Password mismatch";
    cnfPass.style.borderColor = "red";
  } else if (pass2.length === 0) {
    document.querySelector(".confirm-password-error").innerHTML =
      "Wrong Password";
    cnfPass.style.borderColor = "red";
  } else {
    document.querySelector(".confirm-password-error").innerHTML = "&nbsp;";
    cnfPass.style.borderColor = "green";
  }
};

username.addEventListener("keyup", checkUsername);
email.addEventListener("keyup", checkEmail);
pass.addEventListener("keyup", checkPass);
cnfPass.addEventListener("keyup", confirmPass);

function formValidate() {
  checkUsername();
  checkEmail();
  checkPass();
  confirmPass();
}

submit.addEventListener("click", formValidate);
