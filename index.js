document.addEventListener("DOMContentLoaded", function() {
    // Código a ejecutar cuando el DOM ha sido cargado completamente
    // mostrarPanel();
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

});