// Prompt bar play audio adapted from W3Schools
function play() {
  const myAudio = document.getElementById("myAudio");
}
function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}


// Navigate back to top of page from W3Schools
let topButton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// FAQs page collapsible questions adapted from W3Schools
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
     content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Draw components for Footer links from Shoelace
// T&Cs link with scroll
const drawer = document.querySelector('.drawer-scrolling');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('sl-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());

// Support link
const drawer2 = document.querySelector('.drawer-placement-bottom2');
  const openButton2 = drawer2.nextElementSibling;
  const closeButton2 = drawer2.querySelector('sl-button[variant="primary"]');

  openButton2.addEventListener('click', () => drawer2.show());
  closeButton2.addEventListener('click', () => drawer2.hide());

  
// Footer Support link draw from Shoelace
const drawer3 = document.querySelector('.drawer-placement-bottom3');
const openButton3 = drawer3.nextElementSibling;
const closeButton3 = drawer3.querySelector('sl-button[variant="primary"]');

openButton3.addEventListener('click', () => drawer3.show());
closeButton3.addEventListener('click', () => drawer3.hide());


// Dialog box used on Socials in Footer from Shoelace
const dialog = document.querySelector('.dialog-socials');
  const buttonOpenSupport = dialog.nextElementSibling;
  const buttonCloseSupport = dialog.querySelector('sl-button[slot="footer"]');

  buttonOpenSupport.addEventListener('click', () => dialog.show());
  buttonCloseSupport.addEventListener('click', () => dialog.hide());






