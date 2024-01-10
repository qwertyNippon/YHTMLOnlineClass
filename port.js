// parallax effect controls

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let pic1 = document.getElementById('pic1');
let pic4 = document.getElementById('pic4');
let hill5 = document.getElementById('hill5');
// let hill1 = document.getElementById('hill1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    pic1.style.top = value * 2.5 + 'px';
    // pic1.style.left = value * -.5 + 'px';
    pic4.style.left = value * -1.5 + 'px';
    pic1.style.top = value * 1 + 'px';
});

// Hambuger menu controls

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Highlighter effect, remmeber you need to download a link

// const typed = new Typed('.multiple', {
//     strings: ['Wife', 'Mother', 'Japanese Teacher', 'Youtuber', 'Life-long Student'],
//     typespeed:100,
//     backSpeed:100,
//     backDelay:2000,
//     loop: true
// });

// ************Hidding pics************

window.addEventListener('scroll', function() {
    var image = document.getElementById('pic1');
    var threshold = 300; // Adjust this value based on your requirements

    if (window.scrollY > threshold) {
      image.classList.add('hidden');
    } else {
      image.classList.remove('hidden');
    }
  });

//   **************Same hidding for nav ************

  var navbar = document.getElementById('nav');
  var triggerElement = document.getElementById('contact');

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed (0.5 means 50% of the target element must be visible)

  observer.observe(triggerElement);