// SHOW POPUP
const webBtn = document.getElementById('webBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

webBtn.addEventListener('click', ()=>{
  popup.classList.add('show');
});

// CLOSE POPUP
closeBtn.addEventListener('click', ()=>{
  popup.classList.remove('show');
});

// CLICK OUTSIDE TO CLOSE
popup.addEventListener('click', (e)=>{
  if(e.target === popup) popup.classList.remove('show');
});
