document.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.querySelector('.carrusel');
  const btnIzquierda = document.querySelector('.carrusel-btn.izquierda');
  const btnDerecha = document.querySelector('.carrusel-btn.derecha');

  console.log('✅ Carrusel cargado correctamente');

  const scrollStep = 300; // Puedes ajustar este valor si lo deseas

  if (carrusel && btnIzquierda && btnDerecha) {
    btnDerecha.addEventListener('click', () => {
      const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
      if (carrusel.scrollLeft >= maxScroll - scrollStep) {
        carrusel.scrollTo({ left: 0, behavior: 'smooth' }); // Volver al inicio
      } else {
        carrusel.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    });

    btnIzquierda.addEventListener('click', () => {
      if (carrusel.scrollLeft <= scrollStep) {
        carrusel.scrollTo({ left: carrusel.scrollWidth, behavior: 'smooth' }); // Ir al final
      } else {
        carrusel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      }
    });
  }
});