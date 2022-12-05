const burgerToggle = document.querySelector('.toggleNav');
const menuToggle = document.querySelector(".nav-menu");
const barToggle = document.querySelector('.navbar');
const dasmotoTitle = document.querySelector('.title-dasmoto');
const dasmotoPic = document.querySelector('.dasmotoPic');
const excursionPic = document.querySelector('.excursionPic');
const excursionTitle = document.querySelector('.title-excursion');
const teaPic = document.querySelector('.teaPic');
const teaTitle = document.querySelector('.title-tea');
const clubPic = document.querySelector('.clubPic');
const clubTitle = document.querySelector('.title-club');
const portPic = document.querySelector('.portPic');
const portTitle = document.querySelector('.title-portfolio');
const primordialPic = document.querySelector('.primordialPic');
const primordialTitle = document.querySelector('.title-primordial');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    menuToggle.classList.toggle('active');
    barToggle.classList.toggle('active');
})

function hover(picture, title) {
    picture.addEventListener('mouseenter', () => {title.classList.add('hover')});
    picture.addEventListener('mouseleave', () => {title.classList.remove('hover')});
};

hover(dasmotoPic, dasmotoTitle);
hover(excursionPic, excursionTitle);
hover(teaPic, teaTitle);
hover(clubPic, clubTitle);
hover(portPic, portTitle);
hover(primordialPic, primordialTitle);