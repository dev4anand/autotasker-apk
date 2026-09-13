// AutoTasker v3.7.0 Space-Themed Interactive Engine & Mobile Navigation

document.addEventListener('DOMContentLoaded', () => {
    initStarfield();
    initSimulator();
    initMobileNav();
    fetchVersionInfo();
});

// Mobile Navigation Toggle
function initMobileNav() {
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (!toggleBtn || !navLinks) return;

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });

    // Close menu when tapping a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggleBtn.classList.remove('active');
        });
    });
}

// Canvas Starfield & Shooting Stars Engine
function initStarfield() {
    const canvas = document.getElementById('space-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const stars = [];
    const starCount = Math.floor((width * height) / 3000);

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.3,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005,
            color: Math.random() > 0.3 ? '#2dd4bf' : (Math.random() > 0.5 ? '#a855f7' : '#ffffff')
        });
    }

    // Shooting stars
    const meteors = [];
    function spawnMeteor() {
        if (meteors.length < 3 && Math.random() < 0.03) {
            meteors.push({
                x: Math.random() * width * 0.8,
                y: 0,
                length: Math.random() * 80 + 40,
                speed: Math.random() * 10 + 6,
                angle: Math.PI / 4,
                alpha: 1
            });
        }
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        // Draw twinkling stars
        for (let star of stars) {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) {
                star.speed = -star.speed;
            }

            ctx.save();
            ctx.globalAlpha = Math.abs(star.alpha);
            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Draw shooting stars
        spawnMeteor();
        for (let i = meteors.length - 1; i >= 0; i--) {
            let m = meteors[i];
            m.x += Math.cos(m.angle) * m.speed;
            m.y += Math.sin(m.angle) * m.speed;
            m.alpha -= 0.015;

            if (m.alpha <= 0 || m.x > width || m.y > height) {
                meteors.splice(i, 1);
                continue;
            }

            ctx.save();
            ctx.globalAlpha = m.alpha;
            let grad = ctx.createLinearGradient(
                m.x, m.y,
                m.x - Math.cos(m.angle) * m.length,
                m.y - Math.sin(m.angle) * m.length
            );
            grad.addColorStop(0, '#2dd4bf');
            grad.addColorStop(1, 'transparent');

            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(
                m.x - Math.cos(m.angle) * m.length,
                m.y - Math.sin(m.angle) * m.length
            );
            ctx.stroke();
            ctx.restore();
        }

        requestAnimationFrame(render);
    }

    render();
}

// Interactive Workflow Engine Simulator
function initSimulator() {
    const triggerSelect = document.getElementById('sim-trigger');
    const actionSelect = document.getElementById('sim-action');
    const runBtn = document.getElementById('sim-run-btn');
    const outputBox = document.getElementById('sim-output-box');

    if (!runBtn || !outputBox) return;

    runBtn.addEventListener('click', () => {
        const triggerText = triggerSelect.options[triggerSelect.selectedIndex].text;
        const actionText = actionSelect.options[actionSelect.selectedIndex].text;

        outputBox.style.borderColor = '#2dd4bf';
        outputBox.style.boxShadow = '0 0 20px rgba(45, 212, 191, 0.4)';
        outputBox.innerHTML = `⚡ [TRIGGER EVALUATED]: ${triggerText}<br>🚀 [ACTION EXECUTING]: ${actionText}<br><span style="color:#a855f7;">Status: WORKFLOW COMPLETED WITH COSMIC PRECISION (v3.7.0)</span>`;
    });
}

// Fetch live version info from version.json
function fetchVersionInfo() {
    fetch('version.json')
        .then(res => res.json())
        .then(data => {
            if (data.latest_version_name) {
                const versionElements = document.querySelectorAll('.version-num');
                versionElements.forEach(el => el.textContent = `v${data.latest_version_name}`);
            }
        })
        .catch(err => {
            console.log('Using default version v3.7.0');
        });
}
