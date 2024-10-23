
const swiper = new Swiper(".skills-page .swiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 100,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  initialSlide:1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
var swiper2 = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.project-page .project-swiper .swipe-btn .down',
    prevEl: '.project-page .project-swiper .swipe-btn .up',
  },
});

// Function to handle click on nav items
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".nav-items a");
  const sections = document.querySelectorAll("section");

  // Function to change active nav link based on scroll position
  function changeActiveNav() {
      let currentSection = "";

      // Loop through each section
      sections.forEach((section) => {
          // Get section's top position relative to the viewport
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          // Check if the section is in the viewport
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute("id");
          }
      });

      // Loop through each navigation link and update active class
      navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href").substring(1) === currentSection) {
              link.classList.add("active");
          }
      });
  }

  // Add scroll event listener to window
  window.addEventListener("scroll", changeActiveNav);
  changeActiveNav();
});

