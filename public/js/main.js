let contacts = [];
let contactInModal = null;
let modalIndex = -1;
let cardInModal = null;
const DISPLAY_AMOUT = 30;
let displayedAmount = 0;
let displayMode = "list";
let sortedBy = "DateCreated";
let sortDirection = 'ascending';

setUserNameLabel();
// search();
showContacts(true);

// -------------------------- Set up Modal --------------------------

["firstNameInput", "lastNameInput", "emailInput", "numberInput"].forEach(
  (id) => {
    document.getElementById(id).addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        addContact();
      }
    });
  }
);

[
  "updateFirstName",
  "updateLastName",
  "updateEmail",
  "updatePhoneNumber",
].forEach((id) => {
  document.getElementById(id).addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      updateContactModal();
    }
  });
});

// ------------------------ Set up lazy loading ------------------------
["tableContainer", "cardsContainer"].forEach((id) => {
  const container = document.getElementById(id);
  container.addEventListener("scroll", () => {
    // you're at the bottom of the page
    if (
      container.offsetHeight + container.scrollTop >=
      container.scrollHeight
    ) {
      // Max amount shown
      if (displayedAmount == contacts.length) return;

      showContacts(false);
    }
  });
});

//------------------------------------------------------

function showContacts(resetTable) {
  if (resetTable) {
    displayedAmount = 0;
    clearTable();
  }

  // Show DISPLAY_AMOUNT more contacts
  const table = document.getElementById("contactsTable");

  for (let i = 0; i < DISPLAY_AMOUT && displayedAmount < contacts.length; i++) {
    const contact = contacts[displayedAmount++];
    addCard(contact);

    const { FirstName, LastName, Email, PhoneNumber, DateCreated } = contact;
    const row = table.insertRow();
    [FirstName, LastName, Email, PhoneNumber, DateCreated].forEach((val) => {
      const cell = row.insertCell();
      cell.innerHTML = val;
    });
  }

  const displayLabel = document.getElementById("displayLabel");
  displayLabel.innerHTML = `<b>${displayedAmount} of ${contacts.length} displayed</b>`;
}

function addCard(contact) {
  const { FirstName, LastName, Email, PhoneNumber, DateCreated } = contact;

  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h1>${FirstName} ${LastName}</h1>
  <div class="card-content">
  <p>${Email}</p>
  <p>${PhoneNumber}</p>
  <p>${DateCreated}</p>
  </div>`;

  div.addEventListener("click", () => {
    highlightCard(div);
  });
  document.getElementById("cardsContainer").appendChild(div);
}

function clearTable() {
  // Remove all children except the headers
  const tbody = document.getElementById("contactsTable").children[0];
  tbody.replaceChildren(tbody.children[0]);

  const cardsContainer = document.getElementById("cardsContainer");

  // Remove all cards, but not pedestal
  cardsContainer.replaceChildren(cardsContainer.children[0]);
}

function search() {
  const searchTerm = document.getElementById("searchInput").value;

  // Get results from API
  // const jsonPayload = JSON.stringify({
  //   SearchTerm: searchTerm,
  //   UserID: readCookie().userId,
  // });

  // sendRequest(
  //   "SearchContacts",
  //   jsonPayload,
  //   (res) => {
  //     document.getElementById("searchResult").innerHTML =
  //       "Contacts have been retrieved";

  //     const { Contacts: newContacts } = JSON.parse(res.responseText);
  //     contacts = newContacts.map((c) => {
  //       c.DateCreated = new Date(c.DateCreated).toDateString();
  //       return c;
  //     });
  //     removeFromPedestal();
  //     showContacts(true);
  //     sortedBy = 'DateCreated'; //Default sorting from API
  //     sortDirection = 'ascending';
  //   },
  //   (err) => {
  //     // If no contacts found, clear table
  //     document.getElementById("searchResult").innerHTML = err;
  //     contacts = [];
  //     removeFromPedestal();
  //     showContacts(true);
  //   }
  // );

  document.getElementById("searchResult").innerHTML =
    "Contacts have been retrieved";

  contacts = contacts.map((c) => {
    c.DateCreated = new Date(c.DateCreated).toDateString();
    return c;
  });
  removeFromPedestal();
  showContacts(true);
  sortedBy = 'DateCreated'; //Default sorting from API
  sortDirection = 'ascending';
}

function addContact() {
  const FirstName = document.getElementById("firstNameInput").value;
  const LastName = document.getElementById("lastNameInput").value;
  const Email = document.getElementById("emailInput").value;
  const PhoneNumber = document.getElementById("numberInput").value;

  const isValid = verifyInput(FirstName, LastName, PhoneNumber, Email);

  const addResult = document.getElementById("addResult");
  if (isValid !== true) {
    addResult.style.display = "block";
    addResult.innerHTML = isValid;
    return;
  }

  // send to api
  // const payload = JSON.stringify({
  //   FirstName,
  //   LastName,
  //   Email,
  //   PhoneNumber,
  //   UserID: readCookie().userId,
  // });

  // sendRequest("AddContact", payload, (res) => {
  //   // Call search to add the contact if it matches the search
  //   search();

  //   // Clear fields
  //   ["firstNameInput", "lastNameInput", "emailInput", "numberInput"].forEach(
  //     (id) => (document.getElementById(id).value = "")
  //   );

  //   validateAllInputs();
  //   addResult.style.display = "block";
  //   addResult.innerHTML = "Contact has been added";
  // });

  const newContact = {
    FirstName,
    LastName,
    Email,
    PhoneNumber,
    UserID: readCookie().userId,
  };

  contacts.push(newContact); // Add to local array

  search();

  // Clear fields
  ["firstNameInput", "lastNameInput", "emailInput", "numberInput"].forEach(
    (id) => (document.getElementById(id).value = "")
  );

  validateAllInputs();
  addResult.style.display = "block";
  addResult.innerHTML = "Contact has been added";
}

function sortBy(field) {
  // If already sorted by this field, reverse the order
  if (field === sortedBy) {
    sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
    contacts.reverse();
  } else {
    sortedBy = field;
    sortDirection = 'ascending';
    contacts.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
  }



  // Set the rest of the sort indicators to both
  [...document.getElementsByClassName("sortIndicator")].forEach((e) => {
    e.classList.remove('indicateUp');
    e.classList.remove('indicateDown');
    e.classList.add('indicateBoth');
  });

  const sortIndicator = document.getElementById(`indicator${field}`);
  sortIndicator.classList.remove('indicateBoth');
  sortIndicator.classList.add(sortDirection === 'ascending' ? 'indicateDown' : 'indicateUp');
  sortIndicator.classList.remove(sortDirection === 'ascending' ? 'indicateUp' : 'indicateDown');

  showContacts(true);
}

function readCookie() {
  // const loginCookie = document.cookie
  //   .split(";")
  //   .find((c) => c.includes("firstName"));

  // if (!loginCookie) {
  //   window.location.href = "index.html";
  //   return { firstName: "Lab", lastName: "Rat", userId: -1 };
  // }

  // const details = loginCookie.split(",").map((e) => e.split("=")[1]);

  // // Not logged in
  // // send to login page
  // if (details.length != 3) {
  //   window.location.href = "index.html";
  //   return;
  // }

  // return { firstName: details[0], lastName: details[1], userId: +details[2] };

  return { firstName: "Test", lastName: "User", userId: -1 }; // For testing
}

function logout() {
  document.cookie = "firstName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  window.location.href = "cmindex.html";
}

function openContactModal(e) {
  function findIndex(e) {
    // Grid display mode
    if (displayMode === "grid") {
      let target = e.target;
      while (!target.classList.contains("card")) {
        target = target.parentNode;

        // If we reach the body, we are not in a card
        if (target == document.body) return -1;
      }

      return Array.from(
        document.getElementById("cardsContainer").children
      ).indexOf(target);
    }

    // List display mode
    return e.target.parentNode.rowIndex - 1;
  }
  closeModal();

  // Get index of contact that was clicked

  const index = findIndex(e);
  if (index == -1) return; // Dont show for the header row

  contactInModal = contacts[index];
  modalIndex = index;

  const contact = contacts[index];
  ["FirstName", "LastName", "PhoneNumber", "Email"].forEach((field) => {
    document.getElementById(`update${field}`).value = contact[field];
  });

  showModal(document.getElementById("contactModal"));
}

function deleteContactModal() {
  deleteContact((res) => {
    // Remove the contact from the table
    const table = document.getElementById("contactsTable");
    table.deleteRow(modalIndex + 1);

    // Remove contact from contacts array
    const { ID } = contactInModal;
    contacts = contacts.filter((contact) => contact.ID != ID);

    contactInModal = null;
    closeModal();
  });
}

function deleteContact(callback) {
  if (!contactInModal) return;
  const { ID } = contactInModal;

  const shouldContinue = confirm(
    `Are you sure you want to delete ${contactInModal.FirstName} ${contactInModal.LastName}?`
  );

  if (!shouldContinue) return;

  // // Send Delete Request to API
  // const payload = JSON.stringify({
  // ID,
  // });

  // sendRequest("DeleteContact", payload, callback);
}

function updateContactModal() {
  updateContact(
    document.getElementById("updateFirstName").value,
    document.getElementById("updateLastName").value,
    document.getElementById("updateEmail").value,
    document.getElementById("updatePhoneNumber").value
  );
}

function updateContact(NewFirst, NewLast, NewEmail, NewNumber) {
  if (!contactInModal) return;

  const isValid = verifyInput(NewFirst, NewLast, NewNumber, NewEmail);

  const updateResult = document.getElementById("updateResult");
  if (isValid !== true) {
    updateResult.style.display = "block";
    updateResult.innerHTML = isValid;
    return;
  }

  const payload = JSON.stringify({
    ID: contactInModal.ID,
    NewFirst,
    NewLast,
    NewEmail,
    NewNumber,
  });

  // sendRequest(
  //   "UpdateContact",
  //   payload,
  //   (res) => {
  //     closeModal();

  //     // Update contact in contacts array
  //     contactInModal.FirstName = NewFirst;
  //     contactInModal.LastName = NewLast;
  //     contactInModal.Email = NewEmail;
  //     contactInModal.PhoneNumber = NewNumber;

  //     // Change the html of the contact in the table
  //     const table = document.getElementById("contactsTable");
  //     const row = table.rows[modalIndex + 1];
  //     [NewFirst, NewLast, NewEmail, NewNumber].forEach((e, i) => {
  //       row.cells[i].innerHTML = e;
  //     });

  //     // Change the html of the contact in the cards
  //     if (cardInModal) {
  //       animateCardChange(NewFirst, NewLast, NewEmail, NewNumber);
  //     }

  //     updateResult.style.display = "none";
  //   },
  //   (err) => {
  //     updateResult.style.display = "block";
  //     updateResult.innerHTML = err;
  //   }
  // );

  closeModal();

  // Update contact in contacts array
  contactInModal.FirstName = NewFirst;
  contactInModal.LastName = NewLast;
  contactInModal.Email = NewEmail;
  contactInModal.PhoneNumber = NewNumber;

  // Change the html of the contact in the table
  const table = document.getElementById("contactsTable");
  const row = table.rows[modalIndex + 1];
  [NewFirst, NewLast, NewEmail, NewNumber].forEach((e, i) => {
    row.cells[i].innerHTML = e;
  });

  // Change the html of the contact in the cards
  if (cardInModal) {
    animateCardChange(NewFirst, NewLast, NewEmail, NewNumber);
  }

  updateResult.style.display = "none";
}

function gridLayout() {
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.style.display = "none";
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.style.display = "flex";

  showContacts(true);
  displayMode = "grid";
}

function listLayout() {
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.style.display = "block";
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.style.display = "none";

  removeFromPedestal();
  showContacts(true);
  displayMode = "list";
}

function setUserNameLabel() {
  const { firstName, lastName } = readCookie();
  const userNameLabel = document.getElementById("userNameLabel");
  userNameLabel.innerHTML = `Logged in as: ${firstName} ${lastName}`;
}

// Set up Enter for inputs
["firstNameInput", "lastNameInput", "emailInput", "numberInput"].forEach(
  (id) => {
    document.getElementById(id).addEventListener("submit", (e) => {
      if (e.key == "Enter") {
        document.getElementById("addButton").click();
        e.preventDefault();
      }
    });
  }
);

[
  "updateFirstName",
  "updateLastName",
  "updateEmail",
  "updatePhoneNumber",
].forEach((id) => {
  document.getElementById(id).addEventListener("submit", (e) => {
    if (e.key == "Enter") {
      document.getElementById("updateButton").click();
      e.preventDefault();
    }
  });
});
