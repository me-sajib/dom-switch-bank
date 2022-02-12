document.getElementById("login").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "sajib@gmail.com" && password == "12345") {
    window.location.href = "bank.html";
  } else {
    alert("Login Failed");
  }
});
