document.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.querySelector('.carrusel');
  const btnIzquierda = document.querySelector('.carrusel-btn.izquierda');
  const btnDerecha = document.querySelector('.carrusel-btn.derecha');

  if (carrusel && btnIzquierda && btnDerecha) {
    const scrollStep = carrusel.clientWidth * 0.9; // Desplaza el 90% del ancho visible

    btnDerecha.addEventListener('click', () => {
      carrusel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    btnIzquierda.addEventListener('click', () => {
      carrusel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });
  }
});