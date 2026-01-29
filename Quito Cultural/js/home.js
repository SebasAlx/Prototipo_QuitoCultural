const container = document.getElementById("sites-container");

function createCard(site) {
    const card = document.createElement("div");
    card.className = "card-visual";
    card.onclick = () => openDetail(site);

    card.innerHTML = `
        <div class="card-img-top" style="background-image: url('${site.image}')"></div>
        <div class="card-body">
            <div class="card-meta">
                <span class="category-text">${site.category}</span>
                ${site.accessible ? '<span class="material-icons icon-sm">accessible</span>' : ''}
            </div>
            <h3>${site.name}</h3>
        </div>
    `;
    return card;
}

function filterSites(category, btn) {
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    if(btn) btn.classList.add('active');

    container.innerHTML = "";
    const filtered = category === "todos" || category === "Todos"
        ? sitesData
        : sitesData.filter(s => s.category === category);

    filtered.forEach(site => {
        container.appendChild(createCard(site));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterSites('todos', document.querySelector('.cat-chip'));
});