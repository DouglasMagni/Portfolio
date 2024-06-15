document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = button.getAttribute("href").substring(1); // Remove the "#" from the href
    const target = document.getElementById(targetId); // Select the target element by ID

    if (target) {
      window.scrollTo({
        top: target.offsetTop, // Adjusted scroll position to accommodate fixed header
        behavior: "smooth",
      });
    }
  });
});
