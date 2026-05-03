// script.js
function createStars() {
    let starsContainer = document.getElementById('stars');
    if (!starsContainer) {
        starsContainer = document.createElement('div');
        starsContainer.id = 'stars';
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);
    }
    const starCount = 200; // Quantidade de estrelas

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        
        // Classes aleatórias
        const sizes = ['small', 'medium', 'large'];
        const colors = ['', 'purple', 'blue']; // '' = branco
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        star.className = `star ${size} ${color}`;
        
        // Posição aleatória
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Duração da animação aleatória
        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        
        // Delay aleatório para não piscarem juntas
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
}

// Criar estrelas ao carregar
createStars();

// Opcional: Adicionar estrelas cadentes aleatórias
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.style.cssText = `
        position: fixed;
        top: ${Math.random() * 50}%;
        left: ${Math.random() * 50}%;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 4px white, 0 0 8px rgba(200, 180, 255, 0.8);
        pointer-events: none;
        z-index: -1;
        animation: shoot ${3 + Math.random() * 4}s linear forwards;
    `;
    document.body.appendChild(shootingStar);
    
    setTimeout(() => shootingStar.remove(), 7000);
}

// Criar estrela cadente a cada 8-15 segundos
setInterval(createShootingStar, 8000 + Math.random() * 7000);
