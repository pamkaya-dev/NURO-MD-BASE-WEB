// Texts for English & Sinhala
const texts = {
  en: {
    menu: { dashboard: "Dashboard", webservices: "Web Services", contact: "Contact Us", joinchannel: "Join Channel", joingroup: "Join Group" },
    main: { title: "NURO MD MINI", subtitle: "The Next Generation WhatsApp Bot Experience.<br><span class='highlight'>Lightning Fast</span> • <span class='highlight'>Military Grade Secure</span> • <span class='highlight'>Limitless Power</span>", deploy: "DEPLOY NURO MD MINI BOT", webservice: "NURO MD WEB SERVICE", channel: "JOIN OFFICIAL CHANNEL", footer: "© 2026 NURO MD • Built for the Future" }
  },
  si: {
    menu: { dashboard: "ඩැෂ්බෝඩ්", webservices: "වෙබ් සේවාවන්", contact: "අමතන්න", joinchannel: "චැනල් එකට සම්බන්ධ වෙන්න", joingroup: "ගිහින් එකට සම්බන්ධ වෙන්න" },
    main: { title: "නුරෝ MD මිනි", subtitle: "අලුත් තරමේ WhatsApp බොට් අත්දැකීමක්.<br><span class='highlight'>අධි වේගයෙන්</span> • <span class='highlight'>සුරක්ෂිත</span> • <span class='highlight'>සීමා රහිත බලය</span>", deploy: "නුරෝ MD මිනි බොට් DEPLOY කරන්න", webservice: "නුරෝ MD වෙබ් සේවාවන්", channel: "අධිකාරි චැනල් එකට සම්බන්ධ වන්න", footer: "© 2026 නුරෝ MD • අනාගතය සඳහා සකසා ඇත" }
  }
};

let lang = navigator.language.startsWith('si') ? 'si' : 'en';

function setLanguage() {
  document.getElementById('menu-dashboard').innerHTML = texts[lang].menu.dashboard;
  document.getElementById('menu-webservices').innerHTML = texts[lang].menu.webservices;
  document.getElementById('menu-contact').innerHTML = texts[lang].menu.contact;
  document.getElementById('menu-joinchannel').innerHTML = texts[lang].menu.joinchannel;
  document.getElementById('menu-joingroup').innerHTML = texts[lang].menu.joingroup;

  document.getElementById('main-title').innerHTML = texts[lang].main.title;
  document.getElementById('main-subtitle').innerHTML = texts[lang].main.subtitle;
  document.getElementById('btn-deploy-bot').querySelector('span').innerHTML = texts[lang].main.deploy;
  document.getElementById('btn-webservice').querySelector('span').innerHTML = texts[lang].main.webservice;
  document.getElementById('btn-channel').innerHTML = texts[lang].main.channel;
  document.getElementById('main-footer').innerHTML = texts[lang].main.footer;
}

// Preloader
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  const content = document.getElementById('mainContent');
  pre.style.opacity = '0';
  setTimeout(() => {
    pre.style.display = 'none';
    content.classList.add('opacity-100');
    setLanguage();
  }, 800);
});

// Mobile menu
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
