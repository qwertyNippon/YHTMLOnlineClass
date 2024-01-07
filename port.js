// let text = document.getElementById('text');
// let pic1 = document.getElementById('pic1');
// let pic2 = document.getElementById('pic2');
// let pic3 = document.getElementById('pic3');
// let pic4 = document.getElementById('pic4');
// let pic5 = document.getElementById('pic5');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     text.style.marginTop = value * 2.5 + 'px';
//     pic1.style.top = value * -1.5 + 'px';
//     pic2.style.left = value * 1.5 + 'px';
//     pic3.style.left = value * 1.5 + 'px';
//     pic4.style.left = value * -1.5 + 'px';
//     pic5.style.top = value * 1 + 'px';
// });

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});


// i need to test the code with the example i was given