const views = {
    home: document.getElementById("home-view"),
    explore: document.getElementById("explore-view"),
    achievements: document.getElementById("achievements-view"),
    profile: document.getElementById("profile-view")
};

function navigateTo(viewName, btnElement) {
    Object.values(views).forEach(v => { if(v) v.classList.remove("active"); });
    if(views[viewName]) views[viewName].classList.add("active");
    
    if(btnElement) {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');
    }

    if(viewName === 'profile') loadProfileData();
    if(viewName === 'achievements') renderAchievementsList();

    if(viewName === 'explore') {
        setTimeout(() => {
            if(typeof initMap === 'function') initMap();
            if(map) map.invalidateSize();
        }, 100);
    }
}

// --- LÓGICA DE DETALLE Y AUDIO ---
const detailView = document.getElementById('detail-view');

function openDetail(site) {
    document.getElementById('detail-title').innerText = site.name;
    document.getElementById('detail-desc').innerText = site.description;
    
    // Dirección
    const addressEl = document.getElementById('detail-address-text');
    if(addressEl) addressEl.innerText = site.address;

    // Imagen
    document.getElementById('detail-image').style.backgroundImage = `url('${site.image}')`;
    
    // Badges
    const badgeContainer = document.getElementById('detail-badges');
    badgeContainer.innerHTML = `<span class="badge">${site.category}</span>`;
    if(site.accessible) {
        badgeContainer.innerHTML += `<span class="badge access">♿ Accesible</span>`;
    }

    // --- MANEJO DE AUDIO ---
    const audioContainer = document.getElementById('audio-container');
    const player = document.getElementById('detail-audio');

    if (site.audio) {
        player.src = site.audio;
        audioContainer.style.display = "block";
    } else {
        player.pause();
        player.src = "";
        audioContainer.style.display = "none";
    }
    // -----------------------

    // Botón Registrar
    const btn = document.getElementById('btn-check-in');
    if(isVisited(site.id)) {
        btn.innerHTML = `<span class="material-icons">check_circle</span> Visitado`;
        btn.disabled = true;
        btn.style.background = "#777";
    } else {
        btn.innerHTML = `<span class="material-icons">where_to_vote</span> Registrar Visita (+${site.xp} XP)`;
        btn.disabled = false;
        btn.style.background = "var(--primary)";
        btn.onclick = () => registerVisit(site);
    }

    detailView.classList.add('active');
}

function closeDetail() {
    // Pausar audio al salir
    const player = document.getElementById('detail-audio');
    if(player) player.pause();
    
    detailView.classList.remove('active');
}