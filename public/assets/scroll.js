window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Get current scroll position
  const backToTopButton = document.getElementById("back-to-top");

  if (scrollPosition > 1800) {
    backToTopButton.style.display = "block"; // Show button when scrolled past 50px
    backToTopButton.classList.add("fade-in"); // Add fade-in animation (optional)
  } else {
    backToTopButton.style.display = "none"; // Hide button when scrolled above 50px
    backToTopButton.classList.remove("fade-in"); // Remove fade-in animation (optional)
  }
});

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("back-to-top").addEventListener("click", function () {
    document.body.scrollTop = 0; // Scroll to top smoothly
    document.documentElement.scrollTop = 0; // Ensure compatibility with older browsers
  });
});
