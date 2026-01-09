window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('mainContent');

  // Hide preloader with fade out
  preloader.classList.add('hidden');

  // Show main content after a short delay
  setTimeout(() => {
    mainContent.classList.add('visible');
  }, 600);
});

// Popup functionality
const webBtn = document.getElementById('webBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

webBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) popup.classList.remove('show');
});
