var uname = document.getElementById("uname");
var email = document.getElementById("email");
var mono = document.getElementById("mono");
var pswd = document.getElementById("pswd");
var rpswd = document.getElementById("rpswd");
var errormsg = document.getElementsByClassName("errormsg");
console.log(errormsg);
uname.addEventListener("blur", () => {
  let regex = /^[a-z]([0-9a-z]){0,8}/;
  let val = uname.value;
  if (!regex.test(val)) {
    uname.style.borderColor = "red";
    uname.style.borderRadius = "4px";
    errormsg[0].style.visibility = "visible";
  } else {
    errormsg[0].style.visibility = "hidden";
    uname.style.borderColor = "black";
  }
});
email.addEventListener("blur", () => {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let val = email.value;
  if (!regex.test(val)) {
    email.style.borderColor = "red";
    email.style.borderRadius = "4px";
    errormsg[1].style.visibility = "visible";
  } else {
    errormsg[1].style.visibility = "hidden";
    email.style.borderColor = "black";
  }
});
mono.addEventListener("blur", () => {
  let regex = /^\d{10}$/;
  let val = mono.value;
  console.log(regex, val);
  if (!regex.test(val)) {
    mono.style.borderColor = "red";
    mono.style.borderRadius = "4px";
    errormsg[2].style.visibility = "visible";
  } else {
    errormsg[2].style.visibility = "hidden";
    mono.style.borderColor = "black";
  }
});

function verify() {
  if (pswd.value == rpswd.value) console.log("Values are same");
  else return false;
}
