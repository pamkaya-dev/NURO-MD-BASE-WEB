const preloader = document.getElementById("preloader");
const mainContent = document.getElementById("mainContent");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const themeToggle = document.getElementById("themeToggle");

// PRELOADER
window.addEventListener('load',()=>{
  preloader.classList.add('hidden');
  setTimeout(()=>mainContent.classList.add('visible'),600);
});

// MENU TOGGLE
menuBtn.onclick = () => {
  sidebar.classList.add("show");
  menuBtn.style.display = "none";
};
document.addEventListener("click",e=>{
  if(!sidebar.contains(e.target) && !menuBtn.contains(e.target)){
    sidebar.classList.remove("show");
    menuBtn.style.display = "flex";
  }
});

// THEME TOGGLE
themeToggle.onclick = ()=>{
  document.body.classList.toggle("light");
}
