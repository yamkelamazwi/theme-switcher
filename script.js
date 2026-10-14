let themes = [
  {
    name: "light",
    message: "let there be light."
  },
  {
    name: "dark",
    message: "let the darkness consume you."
  }
];

let themeSwitcherButton = document.getElementById("theme-switcher-button");
let themeDropDown = document.getElementById("theme-dropdown");

let lightTheme = document.getElementById("theme-light");
let darkTheme = document.getElementById("theme-dark");

let status = document.querySelector('[aria-live="polite"]');

themeSwitcherButton.addEventListener("click", () => {
  if (themeDropDown.hidden) {
    themeDropDown.hidden = false;
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropDown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});



lightTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-dark");
  document.body.classList.add("theme-light");

  status.textContent = themes[0].message;

  themeDropDown.hidden = true;
  themeSwitcherButton.setAttribute("aria-expanded", "false");
});

darkTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-light");
  document.body.classList.add("theme-dark");

  status.textContent = themes[1].message;

  themeDropDown.hidden = true;
  themeSwitcherButton.setAttribute("aria-expanded", "false");
});
