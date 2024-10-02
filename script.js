// Countdown Timer Functionality
const birthday = new Date("2024-10-12T00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "🎉 Happy Birthday! 🎉";
        // Trigger confetti or fireworks animation
    }
}, 1000);

// Reveal Surprise on Button Click
function revealSurprise() {
    document.getElementById("surprise-content").classList.toggle("hidden");
}

// Heart Particle Animation
const canvas = document.getElementById('heart-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    const heart = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        speed: Math.random() * 3 + 1,
    };
    hearts.push(heart);
}

function drawHearts() {
    hearts.forEach((heart, index) => {
        ctx.fillStyle = 'rgba(255, 20, 147, 0.8)';
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        ctx.fill();
        heart.y -= heart.speed;

        // Remove heart if it goes off screen
        if (heart.y < 0) {
            hearts.splice(index, 1);
        }
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHearts();
    requestAnimationFrame(animate);
}

setInterval(createHeart, 300);
animate();