// Create stars for the parallax background
document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.getElementById("stars");
  const starCount = 100;

  // Stars creation code (if stars container exists)
  if (starsContainer) {
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // Random size
      const size = Math.random() * 3;

      // Random animation delay
      const delay = Math.random() * 4;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;

      starsContainer.appendChild(star);
    }
  }

  // Countdown Timer
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 30);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerHTML = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains("translate-x-0")) {
          closeMobileMenu();
        }
      }
    });
  });

  // Mobile Menu Functionality
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("mobile-menu-overlay");
  const closeButton = document.getElementById("mobile-menu-close");

  function openMobileMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    menuButton.classList.add("menu-open");
    menuOverlay.classList.remove("hidden");
    setTimeout(() => {
      menuOverlay.classList.add("show");
    }, 10);
    document.body.classList.add("overflow-hidden");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    menuButton.classList.remove("menu-open");
    menuOverlay.classList.remove("show");
    setTimeout(() => {
      menuOverlay.classList.add("hidden");
    }, 300);
    document.body.classList.remove("overflow-hidden");
  }

  if (menuButton) {
    menuButton.addEventListener("click", openMobileMenu);
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeMobileMenu);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMobileMenu);
  }

  // Close menu when Escape key is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("translate-x-0")) {
      closeMobileMenu();
    }
  });
});
