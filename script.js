// Open mobile menu
function hamburg() {
  document.getElementById("dropdown").style.display = "flex";
}

// Close mobile menu
function cancel() {
  document.getElementById("dropdown").style.display = "none";
}

// Close dropdown automatically when a link is clicked
const dropdownLinks = document.querySelectorAll("#dropdown .links a");

dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("dropdown").style.display = "none";
  });
});

// Sticky Navbar on scroll
window.onscroll = function() {
  let navbar = document.getElementById("topNav");
  if (window.scrollY > 12) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};