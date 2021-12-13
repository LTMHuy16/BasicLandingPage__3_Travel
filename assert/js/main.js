window.onload = () => {
/* ================ SHOW MENU ================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* === menu show === */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

/* === menu hide === */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

/* ================ REMOVE MENU MOBILE ================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  //when click each nav__link, remove the menu
  navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));

/* ======= CHANGE BACKGROUND COLOR HEADER ========== */
/* ================================================ */
function scrollHeader() {
  const nav = document.getElementById("header");
  
  if(this.scrollY >= 100)
    header.classList.add("scroll-header");
  else
    header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* ========== SCROLL SECTION ACTIVE LINK =========== */
/* ================================================ */
const sections = document.querySelectorAll("section[id]");

function scrollActiveSection () {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav .nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
    } else {
      document.querySelector('.nav .nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
    }
  })
}

window.addEventListener("scroll", scrollActiveSection);

/* =============== SWIPER DISCOVER ================== */
/* ================================================ */
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 30,
  coverflowEffect: {  
    rotate: 20,
  }
});


/* =================== VIDEO ====================== */
/* ================================================ */
const videoFile = document.getElementById('video-file'),
      videoBtn = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

function playPause() {
  if (videoFile.paused) {
    videoFile.play();   // play video
    videoIcon.classList.remove('ri-play-line');
    videoIcon.classList.add('ri-pause-line');
  } 
  else {
    videoFile.pause();   // play video
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
  }
}
videoBtn.addEventListener('click', playPause);


function finalVideo() {
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}

// change icon when video has ended
videoFile.addEventListener('ended', finalVideo);


/* =============== SHOW SCROLL UP ================== */
/* ================================================ */
function scrollUp() {
  const scrollTUp = document.getElementById('scroll-up');

  if (this.scrollY > 500)
    scrollTUp.classList.add('show-scroll');
  else
    scrollTUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


/* ============== DARK LIGHT THEME ================= */
/* ================================================ */
const changeTheme = document.querySelector('.change-theme');
const darkTheme = 'dark-theme';
let iconTheme;

// get previous choose in localStorage and set theme for body
const selectedTheme = localStorage.getItem('TravelTheme');
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](darkTheme);
}
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark-theme' : 'light-theme'


changeTheme.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);

  // set icon following darkTheme variable
  if (darkTheme == 'dark-theme') iconTheme = 'ri-sun-line';
  else iconTheme = 'ri-moon-line';
  changeTheme.classList.toggle(iconTheme);

  localStorage.setItem('TravelTheme', getCurrentTheme())
})


/* ============== DARK LIGHT THEME ================= */
/* ================================================ */
const sr = new ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container,
            .experience__data, .experience__overlay,
            .place__card,
            .sponsor__content,
            .footer__data, .footer__right`,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.about__data,
            .video__description,
            .subscribe__description`,{
  origin: 'left'
})

sr.reveal(`.about__img-overlay,
            .video__container,
            .subscribe__form`,{
  origin: 'right',
  interval: 100
})


}