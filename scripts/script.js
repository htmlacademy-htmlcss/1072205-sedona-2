let modal = document.querySelector(".modal-container");
let openButton = document.querySelector(".search-button");
let closeButton = document.querySelector(".modal-close-button");

openButton.onclick = function() {
  modal.classList.remove("modal-container-close");
}

closeButton.onclick = function() {
  modal.classList.add("modal-container-close");
}

closeButton.onclick = function() {
  modal.classList.add("modal-container-close");
}
