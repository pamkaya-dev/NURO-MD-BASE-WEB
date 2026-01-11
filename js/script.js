// Preloader
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  const main = document.getElementById("mainContent");
  pre.style.opacity = "0";
  setTimeout(() => {
    pre.remove();
    main.style.opacity = "1";
  }, 800);
});

// Sidebar toggle
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.onclick = () => {
  sidebar.style.left = "0";
  menuBtn.style.opacity = "0";
};

document.addEventListener("click", e => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.style.left = "-280px";
    menuBtn.style.opacity = "1";
  }
});
