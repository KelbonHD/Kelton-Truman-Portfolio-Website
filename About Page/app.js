const burgerToggle = document.querySelector('.toggleNav')
const menuToggle = document.querySelector(".nav-menu")
const barToggle = document.querySelector('.navbar')
const image = document.querySelector('.imageEx');
const image2 = document.querySelector('.imageEx2')

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    menuToggle.classList.toggle('active');
    barToggle.classList.toggle('active');
})