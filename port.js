// parallax effect controls

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let pic1 = document.getElementById('pic1');
let pic4 = document.getElementById('pic4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
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