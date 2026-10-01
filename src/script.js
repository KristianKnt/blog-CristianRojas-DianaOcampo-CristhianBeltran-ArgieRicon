document.addEventListener("DOMContentLoaded", () => {
  // Cargar Header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el header:', error));

    fetch('inicio.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('content-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el main:', error));

  // Cargar Footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el footer:', error));
});
