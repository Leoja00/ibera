let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar-edit');

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Si el scroll es hacia arriba, muestra la barra de navegación
    navbar.style.top = "0";
  } else {
    // Si el scroll es hacia abajo, oculta la barra de navegación
    navbar.style.top = "-400px"; // Cambia el valor para ajustar la altura de ocultamiento
  }
  prevScrollPos = currentScrollPos;
}

