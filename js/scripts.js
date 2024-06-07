// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const details = item.querySelector(".hover-details");
      details.style.opacity = "1";
    });

    item.addEventListener("mouseout", () => {
      const details = item.querySelector(".hover-details");
      details.style.opacity = "0";
    });
  });
});
