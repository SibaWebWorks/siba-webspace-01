// Navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imageCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imageCards.forEach((imageCard, i) => {
  imageCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

// ==============================
// Our clients - Swiper (scoped)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // Scope everything to the .our-client section to avoid conflicts
  const section = document.querySelector(".our-client");
  if (!section) return;

  const container  = section.querySelector(".client-swiper");
  const nextBtn    = section.querySelector(".swiper-button-next");
  const prevBtn    = section.querySelector(".swiper-button-prev");
  const pagination = section.querySelector(".swiper-pagination");

  if (!container) {
    console.warn("[Clients Swiper] .client-swiper not found inside .our-client");
    return;
  }

  // If an instance already exists (hot reload / repeated runs), destroy it first
  if (container.swiper) {
    try { container.swiper.destroy(true, true); } catch (e) {}
  }

  // Initialize Swiper using ELEMENT references so only local controls are used
  new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    navigation: { nextEl: nextBtn, prevEl: prevBtn },
    pagination: { el: pagination, clickable: true },
  });

  // No inline style overrides here — your CSS now applies as written
});

// Website dark/light theme

// Scroll to top button

// Navigation menu items active on page scroll

// Responsive navigation menu toggle

// Scroll reveal animations
// Common reveal options to create reveal animations

// Target elements, and specify options to create reveal animations
