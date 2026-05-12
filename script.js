// ================================
// NexPage - Estrelas de fundo + Portfólio 3D
// ================================

// ----- Estrelas (mantém seu efeito existente) -----
function createStars() {
    let starsContainer = document.getElementById('stars');
    if (!starsContainer) {
        starsContainer = document.createElement('div');
        starsContainer.id = 'stars';
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);
    }

    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');

        const sizes = ['small', 'medium', 'large'];
        const colors = ['', 'purple', 'blue'];

        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        star.className = `star ${size} ${color}`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;

        starsContainer.appendChild(star);
    }
}

createStars();

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
        opacity: 0;
    `;

    document.body.appendChild(shootingStar);
    setTimeout(() => shootingStar.remove(), 7000);
}

setInterval(createShootingStar, 8000 + Math.random() * 7000);

// Garantir keyframes shoot caso não exista no CSS
(function ensureShootKeyframes() {
    const id = 'bb-ensure-shoot-keyframes';
    if (document.getElementById(id)) return;

    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      @keyframes shoot {
        0% { transform: translateX(0) translateY(0); opacity: 1; }
        100% { transform: translateX(420px) translateY(420px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
})();

// ================================
// PORTFÓLIO 3D - Controle e animações
// ================================

const loader = document.getElementById('loader');

window.addEventListener('load', () => {
    setTimeout(() => {
        if (loader) loader.classList.add('hidden');
        initCubeMovement();
    }, 700);
});

// Movimento aleatório dos cubos
function initCubeMovement() {
    const cubes = [
        { element: document.querySelector('.cube1'), speed: 0.02, rotationX: 0, rotationY: 0 },
        { element: document.querySelector('.cube2'), speed: 0.015, rotationX: 45, rotationY: 45 },
        { element: document.querySelector('.cube3'), speed: 0.025, rotationX: 90, rotationY: 90 }
    ];

    cubes.forEach(cube => {
        if (!cube.element) return;

        // Posição inicial aleatória na tela visível
        cube.x = Math.random() * (window.innerWidth - 50);
        cube.y = Math.random() * (window.innerHeight - 50);
        cube.dx = (Math.random() - 0.5) * cube.speed * 100; // Velocidade mais controlada
        cube.dy = (Math.random() - 0.5) * cube.speed * 100;

        cube.element.style.left = cube.x + 'px';
        cube.element.style.top = cube.y + 'px';
    });

    function animateCubes() {
        cubes.forEach(cube => {
            if (!cube.element) return;

            cube.x += cube.dx;
            cube.y += cube.dy;

            // Manter os cubos dentro da viewport (com scroll)
            if (cube.x < 0) cube.x = window.innerWidth - 50;
            if (cube.x > window.innerWidth - 50) cube.x = 0;
            if (cube.y < 0) cube.y = window.innerHeight - 50;
            if (cube.y > window.innerHeight - 50) cube.y = 0;

            // Atualizar rotações 3D
            cube.rotationX += 0.5;
            cube.rotationY += 0.3;

            cube.element.style.left = cube.x + 'px';
            cube.element.style.top = cube.y + 'px';
            cube.element.style.transform = `translateZ(0) rotateX(${cube.rotationX}deg) rotateY(${cube.rotationY}deg)`;
        });

        requestAnimationFrame(animateCubes);
    }

    animateCubes();
}

console.log('✨ Template formal carregado com cubos em movimento.');

