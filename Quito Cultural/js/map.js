/* Lógica del Mapa Interactivo (Leaflet.js) */

let map = null;

function initMap() {
    // Evitar reinicializar si ya existe
    if (map !== null) return;

    // 1. Centrar mapa en Quito Histórico
    map = L.map('map').setView([-0.220, -78.512], 15);

    // 2. Cargar capa visual (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // 3. Agregar marcadores dinámicos
    sitesData.forEach(site => {
        if(site.lat && site.lng) {
            L.marker([site.lat, site.lng])
                .addTo(map)
                .bindPopup(`
                    <div style="text-align:center; font-family: sans-serif;">
                        <strong style="color: #1a237e;">${site.name}</strong><br>
                        <span style="font-size: 0.8rem; color: #666;">${site.category}</span><br>
                        <button onclick="openDetailFromMap(${site.id})" 
                                style="margin-top:8px; background:#1a237e; color:white; border:none; border-radius:4px; padding: 4px 8px; cursor:pointer;">
                            Ver Detalles
                        </button>
                    </div>
                `);
        }
    });
}

// Puente entre el mapa y la vista de detalle
function openDetailFromMap(id) {
    const site = sitesData.find(s => s.id === id);
    if(site) openDetail(site);
}