let text = document.getElementById('text');
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let pic4 = document.getElementById('pic4');
let pic5 = document.getElementById('pic5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    pic1.style.top = value * 2.5 + 'px';
    pic2.style.left = value * 2.5 + 'px';
    pic3.style.left = value * -22.5 + 'px';
    pic3.style.top = value * -12.5 + 'px';
    pic4.style.marginLeft = value * 22.5 + 'px';
    pic5.style.marginTop = value * 2.5 + 'px';
});