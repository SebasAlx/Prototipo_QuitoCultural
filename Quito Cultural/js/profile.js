/* Lógica del Perfil y Reinicio */

function loadProfileData() {
    const visitedIds = JSON.parse(localStorage.getItem("visitedSites")) || [];
    const totalSites = sitesData.length; // Asegúrate de que data.js cargue antes
    
    const percentage = totalSites === 0 ? 0 : Math.round((visitedIds.length / totalSites) * 100);
    
    const textEl = document.getElementById('progress-text');
    const fillEl = document.getElementById('progress-fill');
    
    if(textEl) textEl.innerText = `${percentage}%`;
    if(fillEl) fillEl.style.width = `${percentage}%`;
}

// 1. Función que se llama al pulsar el botón "Reiniciar Progreso"
function resetProgress() {
    // En lugar de confirm(), mostramos nuestro modal
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('active');
}

// 2. Función para cerrar el modal (Botón Cancelar)
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('active');
}

// 3. Función que ejecuta el borrado (Botón Sí, Reiniciar)
function confirmResetAction() {
    localStorage.removeItem("visitedSites");
    
    // Recargar barra de progreso visualmente a 0%
    loadProfileData(); 
    
    // Cerrar modal
    closeModal();

    // Reutilizar el Pop-up de logros para dar feedback positivo
    showSystemNotification("¡Progreso Reiniciado!", "Tu aventura comienza de nuevo.");
}

// Helper para mostrar notificaciones del sistema (Reusa el estilo del popup de logros)
function showSystemNotification(title, message) {
    const popup = document.getElementById('achievement-popup');
    if(popup) {
        // Cambiamos el contenido temporalmente
        const originalHTML = popup.innerHTML;
        
        popup.innerHTML = `
            <div class="popup-icon" style="background:rgba(255,255,255,0.2)">
                <span class="material-icons">refresh</span>
            </div>
            <div class="popup-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        `;
        
        popup.classList.add('show');
        
        setTimeout(() => {
            popup.classList.remove('show');
            // Restaurar estructura original después de que se oculte (opcional, por si acaso)
            setTimeout(() => { popup.innerHTML = originalHTML; }, 500);
        }, 3000);
    }
}