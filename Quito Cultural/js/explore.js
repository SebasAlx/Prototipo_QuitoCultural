const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("explore-results");

searchInput.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if(query.length === 0) {
        resultsContainer.innerHTML = '<p class="empty-state">Escribe para buscar sitios...</p>';
        return;
    }

    const filtered = sitesData.filter(site => 
        site.name.toLowerCase().includes(query) || 
        site.category.toLowerCase().includes(query)
    );

    if(filtered.length === 0) {
        resultsContainer.innerHTML = '<p class="empty-state">No se encontraron resultados.</p>';
    } else {
        filtered.forEach(site => {
            const item = document.createElement("div");
            item.className = "search-result-item";
            item.onclick = () => openDetail(site);
            item.innerHTML = `
                <span class="material-icons">place</span>
                <div class="info">
                    <strong>${site.name}</strong><br>
                    <small>${site.category}</small>
                </div>
            `;
            resultsContainer.appendChild(item);
        });
    }
});