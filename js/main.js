// Asegurar que el año en el pie de página siempre sea el actual
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Funcionalidad básica del Buscador del catálogo
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", function() {
            ejecutarBusqueda();
        });

        searchInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                ejecutarBusqueda();
            }
        });
    }

    function ejecutarBusqueda() {
        const query = searchInput.value.trim();
        if (query !== "") {
            // Como es un sitio estático sin base de datos, redirigimos al catálogo
            // En un sitio avanzado, esto filtraría los productos de forma real
            alert("Buscando repuestos para: " + query + "\nRedirigiendo al catálogo...");
            window.location.href = "catalogo.html?buscar=" + encodeURIComponent(query);
        } else {
            alert("Por favor, escribe el nombre del repuesto que necesitas.");
        }
    }
});