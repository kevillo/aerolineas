// Sistema de Gestión de Vuelos - JavaScript

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistema de Gestión de Vuelos iniciado');
    
    // Funciones para los botones de editar
    const editButtons = document.querySelectorAll('.btn-custom-warning');
    editButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Editar elemento');
        });
    });
    
    // Funciones para los botones de eliminar
    const deleteButtons = document.querySelectorAll('.btn-custom-danger');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if(confirm('¿Está seguro de que desea eliminar este elemento?')) {
                console.log('Elemento eliminado');
            }
        });
    });
    
    // Función de búsqueda
    const searchInputs = document.querySelectorAll('input[placeholder*="Buscar"]');
    searchInputs.forEach(input => {
        input.addEventListener('keyup', function(e) {
            console.log('Buscando:', e.target.value);
            // Aquí iría la lógica de búsqueda
        });
    });
    
    // Validación de formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado');
            // Aquí iría la lógica de envío del formulario
        });
    });
    
    // Animación para las tarjetas de estadísticas
    const statCards = document.querySelectorAll('.card-stat');
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Tarjeta de estadísticas clickeada');
            // Aquí se podría mostrar más detalles o navegar a otra página
        });
    });
});

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.insertBefore(alertDiv, document.body.firstChild);
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para formatear fechas
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}