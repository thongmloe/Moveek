// Modal Login
const userElement = document.querySelector(".user");
const cinemaElement = document.querySelector(".cinema");
const modalLoginElement = document.querySelector(".modal__body-login");
const modalCinemaElement = document.querySelector(".modal__body-cinema");
const modalOverlayElement = document.querySelector(".modal__overlay");
const modal = document.querySelector(".modal");
const modals = document.querySelectorAll(".modal__body");

const showModalContainer = function (displayModal) {
  for (const modal of modals) {
    modal.classList.remove("display");
  }
  displayModal.classList.add("display");
  modal.classList.add("display");
};

userElement.addEventListener("click", () => {
  showModalContainer(modalLoginElement);
});

cinemaElement.addEventListener("click", (e) => {
  e.preventDefault();
  showModalContainer(modalCinemaElement);
});

modalOverlayElement.addEventListener("click", () => {
  modal.classList.remove("display");
});
