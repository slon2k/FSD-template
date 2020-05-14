var dropdownElements = document.querySelectorAll(".dropdown-field");
for (i = 0; i < dropdownElements.length; i++) {
  dropdownElements[i].querySelector(".dropdown-field__input")
    .addEventListener("click", function () {
      this.closest(".dropdown-field").classList.toggle("active");
  });
}
