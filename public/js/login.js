function doLogin() {
  const Login = document.getElementById("loginName").value;
  const Password = document.getElementById("loginPassword").value;

  // const payload = JSON.stringify({ Login: Login, Password: md5(Password) });
  // sendRequest(
  //   "Login",
  //   payload,
  //   (res) => {
  //     const { FirstName, LastName, ID, Error } = JSON.parse(res.responseText);
  //     if (ID < 1) {
  //       return;
  //     }

  //     if (Error) {
  //       document.getElementById("loginResult").innerHTML = Error;
  //       document.getElementById("loginPassword").value = "";
  //       return;
  //     }

  //     saveCookie(FirstName, LastName, ID);
  //     window.location.href = "contact.html";
  //   },
  //   (err) => {
  //     document.getElementById("loginResult").innerHTML = err;
  //     document.getElementById("loginPassword").value = "";
  //   }
  // );
  console.log('here');
  window.location.href = "contact.html";
}

function doRegister() {
  const FirstName = document.getElementById("firstNameInput").value;
  const LastName = document.getElementById("lastNameInput").value;
  const Login = document.getElementById("usernameInput").value;
  const Password = document.getElementById("passwordInput").value;

  const registerResultLabel = document.getElementById("registerResult");
  const isValid = verifyRegisterForm(FirstName, LastName, Login, Password);
  if (isValid !== true) {
    registerResultLabel.innerHTML = isValid;
    return;
  }

  const payload = JSON.stringify({
    FirstName,
    LastName,
    Login,
    Password: md5(Password),
  });

  // sendRequest(
  //   "Register",
  //   payload,
  //   (res) => {
  //     const { error } = JSON.parse(res.responseText);
  //     if (error) {
  //       document.getElementById(
  //         "registerResult"
  //       ).innerHTML = `An error occurred while registering you. ${error}`;
  //       return;
  //     }

  //     // Tell user they are registered
  //     registerResultLabel.innerHTML = "You have been successfully registered";

  //     // Clear fields
  //     [
  //       "firstNameInput",
  //       "lastNameInput",
  //       "usernameInput",
  //       "passwordInput",
  //     ].forEach((id) => {
  //       document.getElementById(id).value = "";
  //     });

  //     validateAllInputs();
  //   },
  //   (err) => {
  //     document.getElementById(
  //       "registerResult"
  //     ).innerHTML = `An error occurred while registering you. ${err}`;
  //   }
  // );

  // Tell user they are registered
  registerResultLabel.innerHTML = "You have been successfully registered";

  // Clear fields
  [
    "firstNameInput",
    "lastNameInput",
    "usernameInput",
    "passwordInput",
  ].forEach((id) => {
    document.getElementById(id).value = "";
  });

  validateAllInputs();
}

function saveCookie(FirstName, LastName, ID) {
  let minutes = 20;
  let date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);
  document.cookie =
    "firstName=" +
    FirstName +
    ",LastName=" +
    LastName +
    ",ID=" +
    ID +
    ";expires=" +
    date.toGMTString();
}

// Set up Enter for inputs
// Register
["firstNameInput", "lastNameInput", "usernameInput", "passwordInput"].forEach(
  (id) => {
    document.getElementById(id).addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        document.getElementById("registerButton").click();
        e.preventDefault();
      }
    });
  }
);

// Login
["loginName", "loginPassword"].forEach((id) => {
  document.getElementById(id).addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      document.getElementById("loginButton").click();
      e.preventDefault();
    }
  });
});
