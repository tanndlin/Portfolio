["updateFirstNamePedestal", "updateLastNamePedestal", "updateEmailPedestal", "updatePhoneNumberPedestal"].forEach(
    (id) => {
        document.getElementById(id).addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                updateContactPedestal();
            }
        });
    }
);

function highlightCard(card) {
    if (contactInModal) {
        removeFromPedestal();
    }

    const cards = document.getElementById("cardsContainer").children;
    const index = Array.from(cards).indexOf(card) - 1; // -1 to account for pedestal

    contactInModal = contacts[index];
    modalIndex = index;
    const contact = contacts[index];
    cardInModal = card;

    // Take card out of cardContainer and put on pedestal
    card.remove();
    addToPedestal(card);

    ['FirstName', 'LastName', 'PhoneNumber', 'Email'].forEach((field) => {
        document.getElementById(`update${field}Pedestal`).value = contact[field];
    });

    // Reset validation
    [
        "updateFirstNamePedestal",
        "updateLastNamePedestal",
    ].forEach((id) => {
        if (document.getElementById(id))
            inputEdit(document.getElementById(id), verifyName);
    });

    inputEdit(document.getElementById("updatePhoneNumberPedestal"), verifyPhone);
    inputEdit(document.getElementById("updateEmailPedestal"), verifyEmail);
}

function addToPedestal(card) {
    // Copy card
    const newCard = card.cloneNode(true);
    document.getElementById("pedestal").prepend(card);
    document.getElementById("cardsContainer").scrollTo(0, 0);
}

function removeFromPedestal() {
    const pedestal = document.getElementById("pedestal");
    const cardInPedestal = pedestal.children[0];
    if (!cardInPedestal.classList.contains("card")) return;

    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.insertBefore(cardInPedestal, cardsContainer.children[modalIndex + 1]);
    contactInModal = null;
    modalIndex = -1;
    cardInModal = null;
}

function updateContactPedestal() {
    updateContact(document.getElementById("updateFirstNamePedestal").value,
        document.getElementById("updateLastNamePedestal").value,
        document.getElementById("updateEmailPedestal").value,
        document.getElementById("updatePhoneNumberPedestal").value
    );
}

function animateCardChange(first, last, email, number) {
    // Copy card in pedestal
    const pedestal = document.getElementById("pedestal");



    // Animate card sliding over ontop of old card
    cardInModal.classList.add("rotate");

    setTimeout(() => {
        cardInModal.children[0].innerHTML = `${first} ${last}`;
        const cardContent = cardInModal.children[1].children;
        cardContent[0].innerHTML = email;
        cardContent[1].innerHTML = number;
        // newCard.classList.remove("rotate");
    }, 500);

    setTimeout(() => {
        cardInModal.classList.remove("rotate");
    }, 1000);
}

function deleteContactPedestal() {
    deleteContact((res) => {

        const { ID } = contactInModal;
        contacts = contacts.filter((contact) => contact.ID != ID);

        contactInModal = null;
        cardInModal.classList.add("shrink")

        setTimeout(() => {
            cardInModal.remove();
            cardInModal = null;
        }, 1000);
    });
}