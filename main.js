const hamburger = document.getElementById("hamburger");
const smallScreenNavLinks = document.getElementById(
  "smallscreen-nav-links-div"
);
const section = document.getElementsByClassName("section");
const navLink = document.querySelectorAll("#nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  smallScreenNavLinks.classList.toggle("active-smallscreen-nav-links-div");
});

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
    if (
      smallScreenNavLinks.classList.contains("active-smallscreen-nav-links-div")
    ) {
      smallScreenNavLinks.classList.remove("active-smallscreen-nav-links-div");
    }
    hamburger.classList.remove("active");
  });
});
