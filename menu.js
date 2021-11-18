const contain = document.createElement('div');
const button01 = document.createElement('button');
const divs = document.createElement('div');
const divs1 = document.createElement('div');
const link1 = document.createElement('a');
const link2 = document.createElement('a');
const link3 = document.createElement('a');
const link4 = document.createElement('a');
const link5 = document.createElement('a');
const link6 = document.createElement('a');
const link7 = document.createElement('a');
const link8 = document.createElement('a');
const link9 = document.createElement('a');
const link10 = document.createElement('a');

const body = document.querySelector('body');

contain.append(button01);
button01.append(divs);
contain.append(divs1);
divs1.append(link1);
divs1.append(link2);
divs1.append(link3);
divs1.append(link4);
divs1.append(link5);
divs1.append(link6);
divs1.append(link7);
divs1.append(link8);
divs1.append(link9);
divs1.append(link10);

contain.setAttribute('class', 'mobile-head relate');
button01.setAttribute('class', 'nav-icons1 relate');
divs.setAttribute('class', 'nav-img-cancel1 relate');
divs1.setAttribute('class', 'mobile-nav');
link1.setAttribute('href', 'index.html');
link2.setAttribute('href', '#');
link3.setAttribute('href', '#');
link4.setAttribute('href', '#');
link5.setAttribute('href', 'About.html');
link6.setAttribute('href', '#');
link7.setAttribute('href', '#');
link8.setAttribute('href', '#');
link9.setAttribute('href', '#');
link10.setAttribute('href', '#');

link1.setAttribute('class', 'nav-links');
link2.setAttribute('class', 'nav-links');
link3.setAttribute('class', 'nav-links');
link4.setAttribute('class', 'nav-links');
link5.setAttribute('class', 'nav-links');
link6.setAttribute('class', 'nav-links');
link7.setAttribute('class', 'nav-links');
link8.setAttribute('class', 'nav-links');
link9.setAttribute('class', 'nav-links');
link10.setAttribute('class', 'nav-links');

link1.innerHTML = 'Home';
link2.innerHTML = 'English';
link3.innerHTML = 'My page';
link4.innerHTML = 'Logout';
link5.innerHTML = 'About';
link6.innerHTML = 'Program';
link7.innerHTML = 'Join';
link8.innerHTML = 'Sponsor';
link9.innerHTML = 'News';
link10.innerHTML = 'More Details';

const menu = document.querySelector('.nav-icons');

function mobileMenu() {
  body.append(contain);
}

function removeMenu() {
  contain.parentNode.removeChild(contain);
}

const meeting = document.querySelectorAll('.fronts');
const meeting2 = document.querySelectorAll('.section-3 .fronts2');
const more = document.querySelector('.final-section a');

function muteing() {
  meeting.forEach((implement) => {
    implement.style.display = 'flex';
  });

  meeting2.forEach((nice) => {
    nice.style.display = 'flex';
  });
  more.style.display = 'none';
}

more.addEventListener('click', muteing);

menu.addEventListener('click', mobileMenu);
button01.addEventListener('click', removeMenu);
link1.addEventListener('click', removeMenu);
link2.addEventListener('click', removeMenu);
link3.addEventListener('click', removeMenu);
link4.addEventListener('click', removeMenu);
link5.addEventListener('click', removeMenu);
link6.addEventListener('click', removeMenu);
link7.addEventListener('click', removeMenu);
link8.addEventListener('click', removeMenu);
link9.addEventListener('click', removeMenu);
link10.addEventListener('click', removeMenu);