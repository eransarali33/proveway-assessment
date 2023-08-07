const orgCard1 = document.getElementById("org-card1");
const orgCard2 = document.getElementById("org-card2");
const orgCard3 = document.getElementById("org-card3");

const hiddenCard1 = document.getElementById("hidden-card1");
const hiddenCard2 = document.getElementById("hidden-card2");
const hiddenCard3 = document.getElementById("hidden-card3");

function hideAllCardsB() {
  const hiddenCards = document.querySelectorAll(".cards-B");
  hiddenCards.forEach((container) => {
    container.style.display = "none";
  });
}

hideAllCardsB();

const showDetails1 = () => {
  orgCard1.style.display = "none";
  hiddenCard1.style.display = "block";
  orgCard2.style.display = "block";
  orgCard3.style.display = "block";
};

const showDetails2 = () => {
  orgCard2.style.display = "none";
  hiddenCard2.style.display = "block";
  orgCard1.style.display = "block";
  orgCard3.style.display = "block";
};

const showDetails3 = () => {
  orgCard3.style.display = "none";
  hiddenCard3.style.display = "block";
  orgCard2.style.display = "block";
  orgCard1.style.display = "block";
};

const hideDetails = () => {
  orgCard1.style.display = "block";
  orgCard2.style.display = "block";
  orgCard3.style.display = "block";
};

const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
radioButtons.forEach((radio) => {
  radio.addEventListener("click", function () {
    hideAllCardsB();
    const selectedRadio = document.querySelector(
      'input[name="radio-btn"]:checked'
    );
    if (selectedRadio) {
      const container = selectedRadio.closest(".cards");
      const hiddenContainer = container.nextElementSibling;
      hiddenContainer.style.display = "block";
      container.style.display = "none";
    }
  });
});

// // -----------------
