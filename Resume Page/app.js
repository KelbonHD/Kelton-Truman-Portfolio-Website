const burgerToggle = document.querySelector('.toggleNav')
const menuToggle = document.querySelector(".nav-menu")
const barToggle = document.querySelector('.navbar')

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    menuToggle.classList.toggle('active');
    barToggle.classList.toggle('active');
})
