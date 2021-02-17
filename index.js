const shareButton = document.querySelector(".share-button");
const shareMenu = document.querySelector(".share-menu");

shareButton.addEventListener("click", () => {
  shareMenu.classList.toggle("visible");
  shareButton.classList.toggle("share-button--visible");
});
