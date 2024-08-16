tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        dark: "black",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".theme-controller")
    .addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "black");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
    });
});
