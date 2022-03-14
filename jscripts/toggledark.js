const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");


function botton_click() {
  if (theme.getAttribute("href") == "light-theme.css") {
    theme.href = "dark-theme.css";
    localStorage.setItem("theme", "dark-theme.css");
  } else {
    theme.href = "light-theme.css";
    localStorage.setItem("theme", "light-theme.css");

  }
}

function set_theme(){
  current_theme = localStorage.getItem("theme");
  theme.href = current_theme;
}
window.onload=set_theme();