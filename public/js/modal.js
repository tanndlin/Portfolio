const modals = Array.from(document.getElementsByClassName("modal"));
const showModalBtn = document.getElementById("showModalBtn");
const mainContainer = document.getElementsByClassName("mainContainer")[0];
Array.from(document.getElementsByClassName("close")).forEach((c) => {
  if (c.id !== "closePedestal") c.onclick = closeModal;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    removeFromPedestal();
  }
});

// Opens modal that called this function
function showModal(modal) {
  modal.style.display = "block";
  mainContainer.classList.add("haze");

  // Reset validation
  validateAllInputs();
}

function validateAllInputs() {
  [
    "firstNameInput",
    "lastNameInput",
    "updateFirstName",
    "updateLastName",
  ].forEach((id) => {
    if (document.getElementById(id))
      inputEdit(document.getElementById(id), verifyName);
  });

  ["numberInput", "updatePhoneNumber"].forEach((id) => {
    if (document.getElementById(id))
      inputEdit(document.getElementById(id), verifyPhone);
  });

  ["emailInput", "updateEmail"].forEach((id) => {
    if (document.getElementById(id))
      inputEdit(document.getElementById(id), verifyEmail);
  });

  if (document.getElementById("usernameInput"))
    inputEdit(document.getElementById("usernameInput"), verifyUsername);

  if (document.getElementById("passwordInput"))
    inputEdit(document.getElementById("passwordInput"), verifyPassword);
}

// Closes all modals
function closeModal() {
  modals.forEach((modal) => (modal.style.display = "none"));
  mainContainer.classList.remove("haze");

  // Clear misc result labels
  ["addResult", "registerResult"].forEach((id) => {
    if (document.getElementById(id)) {
      document.getElementById(id).innerHTML = "";
    }
  });

  // Clear all inputs
  [
    "firstNameInput",
    "lastNameInput",
    "usernameInput",
    "passwordInput",
    "emailInput",
    "numberInput",
  ].forEach((id) => {
    if (document.getElementById(id)) {
      document.getElementById(id).value = "";
    }
  });

  Array.from(document.getElementsByClassName("incorrectLabel")).forEach((e) =>
    e.classList.add("hidden")
  );
}
