/* filepath: /c:/Users/mintv/OneDrive/Desktop/sitetodownload/particles.js */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 100; // Increased count for more visibility

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2; // Increased size
        this.speedX = Math.random() * 3 - 1.5; // Increased speed
        this.speedY = Math.random() * 3 - 1.5; // Increased speed
        this.alpha = Math.random() * 0.8 + 0.2; // Increased opacity
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0 || 
            this.y > canvas.height || this.y < 0) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(76, 175, 80, ${this.alpha})`;
        ctx.fill();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resizeCanvas();
    init();
});

resizeCanvas();
init();
animate();