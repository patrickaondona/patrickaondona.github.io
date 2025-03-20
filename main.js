const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const smallScreenNavLinks = document.getElementById(
  "smallscreen-nav-links-div"
);
const aboutSection = document.getElementById("about-section");
const skillsSection = document.getElementById("skills-section");
const educationSection = document.getElementById("education-section");
const projectSection = document.getElementById("project-section");
const contactSection = document.getElementById("contact-section");

const navLink1 = document.getElementById("nav-link1");
const navLink2 = document.getElementById("nav-link2");
const navLink3 = document.getElementById("nav-link3");
const navLink4 = document.getElementById("nav-link4");
const navLink5 = document.getElementById("nav-link5");
const navLink6 = document.getElementById("nav-link6");
const navLink7 = document.getElementById("nav-link7");
const navLink8 = document.getElementById("nav-link8");
const navLink9 = document.getElementById("nav-link9");
const navLink10 = document.getElementById("nav-link10");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  smallScreenNavLinks.classList.toggle("active-smallscreen-nav-links-div");
});

navLink1.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
navLink6.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
  if (
    smallScreenNavLinks.classList.contains("active-smallscreen-nav-links-div")
  ) {
    smallScreenNavLinks.classList.remove("active-smallscreen-nav-links-div");
  }
  hamburger.classList.remove("active");
});

navLink2.addEventListener("click", (e) => {
  e.preventDefault();
  skillsSection.scrollIntoView({ behavior: "smooth" });
});
navLink7.addEventListener("click", (e) => {
  e.preventDefault();
  skillsSection.scrollIntoView({ behavior: "smooth" });
  if (
    smallScreenNavLinks.classList.contains("active-smallscreen-nav-links-div")
  ) {
    smallScreenNavLinks.classList.remove("active-smallscreen-nav-links-div");
  }
  hamburger.classList.remove("active");
});

navLink3.addEventListener("click", (e) => {
  e.preventDefault();
  educationSection.scrollIntoView({ behavior: "smooth" });
});
navLink8.addEventListener("click", (e) => {
  e.preventDefault();
  educationSection.scrollIntoView({ behavior: "smooth" });
  if (
    smallScreenNavLinks.classList.contains("active-smallscreen-nav-links-div")
  ) {
    smallScreenNavLinks.classList.remove("active-smallscreen-nav-links-div");
  }
  hamburger.classList.remove("active");
});

navLink4.addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.scrollIntoView({ behavior: "smooth" });
});
navLink9.addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.scrollIntoView({ behavior: "smooth" });
  if (
    smallScreenNavLinks.classList.contains("active-smallscreen-nav-links-div")
  ) {
    smallScreenNavLinks.classList.remove("active-smallscreen-nav-links-div");
  }
  hamburger.classList.remove("active");
});

navLink5.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
});
navLink10.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
  if (
    smallScreenNavLinks.classList.contains("active-smallscreen-nav-links-div")
  ) {
    smallScreenNavLinks.classList.remove("active-smallscreen-nav-links-div");
  }
  hamburger.classList.remove("active");
});
