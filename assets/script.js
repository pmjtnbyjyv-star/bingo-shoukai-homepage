const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const socialLinks = window.SOCIAL_LINKS || {};

if (header && menuButton) {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });
}

document.querySelectorAll("[data-social='instagram']").forEach((link) => {
  link.setAttribute("href", socialLinks.INSTAGRAM_URL || "#");
});

document.querySelectorAll("[data-social='line']").forEach((link) => {
  link.setAttribute("href", socialLinks.LINE_URL || "#");
});
