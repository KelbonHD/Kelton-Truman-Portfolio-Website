const burgerToggle = document.querySelector('.toggleNav')
const menuToggle = document.querySelector(".nav-menu")
const barToggle = document.querySelector('.navbar')
const dasmotoTitle = document.querySelector('.title-dasmoto')
const dasmotoToggle = document.querySelector('.dasmotoPic')

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    menuToggle.classList.toggle('active');
    barToggle.classList.toggle('active');
})

dasmotoToggle.addEventListener('mouseover', () => {
    dasmotoTitle.classList.add('active');
})

dasmotoToggle.addEventListener('mouseout', () => {
    dasmotoTitle.classList.remove('active');
})

