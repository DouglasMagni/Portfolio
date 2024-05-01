document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = button.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
