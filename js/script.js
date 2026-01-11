// Preloader
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  const content = document.getElementById('mainContent');
  pre.style.opacity = '0';
  setTimeout(() => {
    pre.style.display = 'none';
    content.classList.add('opacity-100');
  }, 800);
});

// Sidebar toggle
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
menuBtn.onclick = () => {
  sidebar.style.left = '0';
  menuBtn.style.opacity = '0';
  menuBtn.style.pointerEvents = 'none';
};
document.addEventListener('click', e => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.style.left = '-280px';
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
  }
});
