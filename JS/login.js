console.log("Works");

function validate() {
  console.log("In the function");
  let uname = document.getElementById("uname").value;
  let pswd = document.getElementById("pswd").value;
  let uregex = /[a-z]{1-10}/;
  if (uregex.test(uname)) console.log("Matched");
  else console.log("Unmatched");
}

function submitform() {
  console.log("In the submitform function");
  document.loginform.submit();
}

function clicked() {
  console.log("CLicked");
}
