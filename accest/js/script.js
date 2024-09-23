// Form Đăng nhập
var userElement = document.querySelector(".user");
var modalElement = document.querySelector(".modal");
var modalOverlayElement = document.querySelector(".modal__overlay");
userElement.addEventListener("click", () => {
  modalElement.classList.add("display");
});
window.onclick = function (event) {
  if (event.target == modalOverlayElement) {
    modalElement.classList.remove("display");
  }
};
