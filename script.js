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

const cube = document.getElementById('portfolioCube');
const loader = document.getElementById('loader');

let currentRotation = { x: -15, y: 25 };
let isDragging = false;
let startPosition = { x: 0, y: 0 };
let previousRotation = { x: -15, y: 25 };

function updateCubeRotation() {
    if (!cube) return;
    cube.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
}

function rotateTo(face) {
    const rotations = {
        'front': { x: 0, y: 0 },
        'back': { x: 0, y: 180 },
        'right': { x: 0, y: -90 },
        'left': { x: 0, y: 90 },
        'top': { x: -90, y: 0 },
        'bottom': { x: 90, y: 0 }
    };

    const target = rotations[face];
    if (!target) return;

    currentRotation = { ...target };
    updateCubeRotation();
}

// Expor para onclick inline
window.rotateTo = rotateTo;

// Loader + contagem
window.addEventListener('load', () => {
    setTimeout(() => {
        if (loader) loader.classList.add('hidden');
        animateNumbers();
    }, 700);
});

function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');

    numbers.forEach((num) => {
        const target = parseInt(num.getAttribute('data-target'), 10);
        const duration = 1700;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);

            num.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                const label = num.parentElement.querySelector('.stat-label')?.textContent || '';
                const suffix = label.includes('%') ? '%' : '';
                num.textContent = `${target}${suffix}`;
            }
        }

        requestAnimationFrame(update);
    });
}

// Drag (mouse)
if (cube) {
    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPosition = { x: e.clientX, y: e.clientY };
        previousRotation = { ...currentRotation };
        cube.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startPosition.x;
        const deltaY = e.clientY - startPosition.y;

        currentRotation.y = previousRotation.y + (deltaX * 0.5);
        currentRotation.x = previousRotation.x - (deltaY * 0.5);
        currentRotation.x = Math.max(-90, Math.min(90, currentRotation.x));

        updateCubeRotation();
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        cube.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Drag (touch)
    cube.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        startPosition = { x: touch.clientX, y: touch.clientY };
        previousRotation = { ...currentRotation };
        cube.style.transition = 'none';
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const touch = e.touches[0];
        const deltaX = touch.clientX - startPosition.x;
        const deltaY = touch.clientY - startPosition.y;

        currentRotation.y = previousRotation.y + (deltaX * 0.5);
        currentRotation.x = previousRotation.x - (deltaY * 0.5);
        currentRotation.x = Math.max(-90, Math.min(90, currentRotation.x));

        updateCubeRotation();
    }, { passive: false });

    document.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        cube.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Teclado
document.addEventListener('keydown', (e) => {
    if (!cube) return;

    switch (e.key) {
        case 'ArrowUp': currentRotation.x -= 15; break;
        case 'ArrowDown': currentRotation.x += 15; break;
        case 'ArrowLeft': currentRotation.y -= 15; break;
        case 'ArrowRight': currentRotation.y += 15; break;
        case '1': rotateTo('front'); return;
        case '2': rotateTo('right'); return;
        case '3': rotateTo('left'); return;
        case '4': rotateTo('back'); return;
        case '5': rotateTo('top'); return;
        case '6': rotateTo('bottom'); return;
    }

    currentRotation.x = Math.max(-90, Math.min(90, currentRotation.x));
    updateCubeRotation();
});

// Orientação do dispositivo (mobile)
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
        if (isDragging) return;
        if (window.innerWidth >= 768) return;

        const tiltX = e.beta || 0;
        const tiltY = e.gamma || 0;

        currentRotation.x = Math.max(-45, Math.min(45, tiltX * 0.5));
        currentRotation.y = Math.max(-45, Math.min(45, tiltY * 0.5));

        updateCubeRotation();
    });
}

console.log('🎲 Portfólio 3D carregado! Arraste ou use os botões.');

