// Archivo JavaScript principal para Italy Optim
console.log("Italy Optim - Sitio web cargado correctamente.");

// Lógica para el menú hamburguesa
const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('active');
});