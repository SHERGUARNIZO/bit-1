document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');

  const images = [
    'assets/Header 1.jpg',
    'assets/Header 2.jpg',
    'assets/Header 3.jpg',
    'assets/Header 4.jpg',
    'assets/Header 5.jpg',
    'assets/Header 6.jpg',
    'assets/Header 7.jpg',
    'assets/Header 8.jpg',
    'assets/Header 9.jpg',
    'assets/Header 10.jpg',
    
  ];

  let current = 0;

  function cambiarImagen() {
    header.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }

  cambiarImagen(); // Mostrar la primera de inmediato
  setInterval(cambiarImagen, 5000); // Cambia cada 5 segundos
});