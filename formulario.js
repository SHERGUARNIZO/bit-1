document.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.querySelector('.carrusel');
  const btnIzquierda = document.querySelector('.carrusel-btn.izquierda');
  const btnDerecha = document.querySelector('.carrusel-btn.derecha');

  if (carrusel && btnIzquierda && btnDerecha) {
    btnDerecha.addEventListener('click', () => {
      carrusel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    btnIzquierda.addEventListener('click', () => {
      carrusel.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }
});