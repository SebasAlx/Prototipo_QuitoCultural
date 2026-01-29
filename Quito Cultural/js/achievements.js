function getVisitedSites() {
    return JSON.parse(localStorage.getItem("visitedSites")) || [];
}

function isVisited(id) {
    return getVisitedSites().includes(id);
}

function registerVisit(site) {
    const visited = getVisitedSites();
    
    if (!visited.includes(site.id)) {
        visited.push(site.id);
        localStorage.setItem("visitedSites", JSON.stringify(visited));
        
        // Bloquear botón visualmente
        const btn = document.getElementById('btn-check-in');
        if(btn) {
            btn.innerHTML = `<span class="material-icons">check_circle</span> Visitado`;
            btn.disabled = true;
            btn.style.background = "#777";
        }

        // Mostrar Animación
        showAchievementNotification(site);
        
        // Actualizar lista
        renderAchievementsList();
    }
}

function showAchievementNotification(site) {
    const popup = document.getElementById('achievement-popup');
    
    if(popup) {
        document.getElementById('popup-site-name').innerText = site.name;
        document.getElementById('popup-site-xp').innerText = "+" + site.xp + " XP";

        popup.classList.add('show');
        setTimeout(() => { popup.classList.remove('show'); }, 4000);
    }
}

function renderAchievementsList() {
    const list = document.getElementById('achievements-list');
    if(!list) return;

    list.innerHTML = "";
    const visitedIds = getVisitedSites();
    let totalXp = 0;

    sitesData.forEach(site => {
        const isUnlocked = visitedIds.includes(site.id);
        if(isUnlocked) totalXp += site.xp;

        const li = document.createElement('li');
        li.className = isUnlocked ? 'achievement-item unlocked' : 'achievement-item locked';
        
        li.innerHTML = `
            <div class="ach-icon"><span class="material-icons">${isUnlocked ? 'emoji_events' : 'lock'}</span></div>
            <div class="ach-info">
                <h4>${site.name}</h4>
                <p>${isUnlocked ? '¡Completado!' : 'Explora para desbloquear'}</p>
            </div>
            <div class="ach-xp">+${site.xp}</div>
        `;
        list.appendChild(li);
    });

    const totalEl = document.getElementById('total-points');
    if(totalEl) totalEl.innerText = totalXp + " XP";
}