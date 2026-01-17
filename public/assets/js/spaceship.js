/**
 * spaceship.js
 * Handles the interactive spaceship navigation and warp effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    initSpaceship();
});

function initSpaceship() {
    // Create Spaceship Elements if they don't exist
    if (!document.getElementById('spaceship-container')) {
        createSpaceshipDOM();
    }

    const spaceship = document.getElementById('spaceship-trigger');
    const navModal = document.getElementById('nav-modal');
    const closeNav = document.getElementById('close-nav');
    const destinations = document.querySelectorAll('.nav-destination');

    // Float Animation (already in CSS, but interactive hover here)
    spaceship.addEventListener('mouseenter', () => {
        spaceship.style.transform = 'scale(1.1) rotate(5deg)';
    });

    spaceship.addEventListener('mouseleave', () => {
        spaceship.style.transform = 'scale(1) rotate(0deg)';
    });

    // Open Navigation
    spaceship.addEventListener('click', () => {
        navModal.classList.add('active');
    });

    // Close Navigation
    closeNav.addEventListener('click', () => {
        navModal.classList.remove('active');
    });

    // Handle Warp Navigation
    destinations.forEach(dest => {
        dest.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = dest.getAttribute('href');
            engageWarpDrive(targetId);
        });
    });
}

function createSpaceshipDOM() {
    const container = document.createElement('div');
    container.id = 'spaceship-container';
    container.innerHTML = `
        <div id="spaceship-trigger" class="glass">
            <span class="ship-icon">🚀</span>
            <span class="ship-label">MENU</span>
        </div>
        
        <div id="nav-modal" class="nav-overlay glass">
            <div class="stars"></div>
            <button id="close-nav" class="close-btn">&times;</button>
            <div class="nav-content">
                <h2>SELECT DESTINATION</h2>
                <ul class="nav-grid">
                    <li><a href="#home" class="nav-destination" data-warp="true">HOME BASE</a></li>
                    <li><a href="#about" class="nav-destination" data-warp="true">ABOUT SECTOR</a></li>
                    <li><a href="#skills" class="nav-destination" data-warp="true">SKILL ARMORY</a></li>
                    <li><a href="#work" class="nav-destination" data-warp="true">MISSION LOG</a></li>
                    <li><a href="#education" class="nav-destination" data-warp="true">ACADEMY</a></li>
                    <li><a href="#contact" class="nav-destination" data-warp="true">COMMUNICATE</a></li>
                </ul>
            </div>
        </div>
        <div id="warp-overlay"></div>
        <div id="star-container">
            <div class="shooting-star" style="top: 10%; left: 20%; animation-delay: 0s;"></div>
            <div class="shooting-star" style="top: 30%; left: 80%; animation-delay: 2s;"></div>
            <div class="shooting-star" style="top: 60%; left: 40%; animation-delay: 4s;"></div>
            <div class="shooting-star" style="top: 80%; left: 10%; animation-delay: 6s;"></div>
            <div class="shooting-star" style="top: 15%; left: 70%; animation-delay: 8s;"></div>
        </div>
    `;
    document.body.appendChild(container);

    // Initial styles for dynamic elements will be handled in CSS, 
    // but we can inject critical CSS here if needed to avoid flash.
}

function engageWarpDrive(targetId) {
    const warpOverlay = document.getElementById('warp-overlay');
    const navModal = document.getElementById('nav-modal');

    // 1. Close Menu
    navModal.classList.remove('active');

    // 2. Activate Warp Visuals
    warpOverlay.classList.add('active');
    document.body.classList.add('shake-effect');

    // 3. Wait for visual peak, then scroll
    setTimeout(() => {
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'auto' }); // auto because we are hiding the scroll with warp
        }


        // 4. Disengage Warp
        setTimeout(() => {
            warpOverlay.classList.remove('active');
            document.body.classList.remove('shake-effect');
        }, 800);
    }, 1000);
}
