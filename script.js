const Theme = document.querySelector(".theme-controller");

Theme.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "black");
  } else {
    document.documentElement.setAttribute("data-theme", "nord");
  }
});
