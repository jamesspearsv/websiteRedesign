const nav = document.querySelector('nav');

menuButton = document.querySelector("#menuButton").addEventListener('click', () => {
    nav.classList.toggle("opened");
})