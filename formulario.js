document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo || !telefono || !mensaje) {
    alert('Por favor completa todos los campos antes de enviar.');
    return;
  }

  // Muestra mensaje de éxito y limpia formulario
  document.getElementById('mensajeExito').style.display = 'block';
  this.reset();
});