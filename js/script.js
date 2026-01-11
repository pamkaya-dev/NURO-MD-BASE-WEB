// Preloader
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  const content = document.getElementById('content');

  pre.style.opacity = '0';
  setTimeout(() => {
    pre.remove();
    content.style.opacity = '1';
  }, 700);
});

// Sidebar Toggle
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.onclick = () => {
  sidebar.style.left = '0';
  menuBtn.style.opacity = '0';
};

document.addEventListener('click', e => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.style.left = '-280px';
    menuBtn.style.opacity = '1';
  }
});
