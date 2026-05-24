const toTopButton = document.getElementById("to-top");

if (toTopButton) {
  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function toggleScrollButton() {
  if (!toTopButton) {
    return;
  }

  if (window.scrollY > 120) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleScrollButton);
toggleScrollButton();
