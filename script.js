// // Countdown Timer Functionality
// const birthday = new Date("2024-10-12T00:00:00").getTime();

// const countdownFunction = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = birthday - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("days").innerText = days;
//     document.getElementById("hours").innerText = hours;
//     document.getElementById("minutes").innerText = minutes;
//     document.getElementById("seconds").innerText = seconds;

//     if (distance < 0) {
//         clearInterval(countdownFunction);
//         document.getElementById("timer").innerHTML = "🎉 Happy Birthday! 🎉";
//         // Trigger confetti or fireworks animation
//     }
// }, 1000);

// // Reveal Surprise on Button Click
// function revealSurprise() {
//     document.getElementById("surprise-content").classList.toggle("hidden");
// }

// // Heart Particle Animation
// const canvas = document.getElementById('heart-canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let hearts = [];

// function createHeart() {
//     const heart = {
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 10 + 5,
//         speed: Math.random() * 3 + 1,
//     };
//     hearts.push(heart);
// }

// function drawHearts() {
//     hearts.forEach((heart, index) => {
//         ctx.fillStyle = 'rgba(255, 20, 147, 0.8)';
//         ctx.beginPath();
//         ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
//         ctx.fill();
//         heart.y -= heart.speed;

//         // Remove heart if it goes off screen
//         if (heart.y < 0) {
//             hearts.splice(index, 1);
//         }
//     });
// }

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawHearts();
//     requestAnimationFrame(animate);
// }

// setInterval(createHeart, 300);
// animate();



// Countdown Timer Functionality
const birthday = new Date("2024-10-12T00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update timer display
    document.querySelector(".time-box:nth-child(1) .time-digit").innerText = days;
    document.querySelector(".time-box:nth-child(2) .time-digit").innerText = hours;
    document.querySelector(".time-box:nth-child(3) .time-digit").innerText = minutes;
    document.querySelector(".time-box:nth-child(4) .time-digit").innerText = seconds;

    // Check if the countdown is finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".timer-container").innerHTML = "<h2>🎉 Happy Birthday! 🎉</h2>";
        // Trigger confetti or fireworks animation here if needed
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



function revealSurprise() {
    const surpriseContent = document.getElementById("surprise-content");
    surpriseContent.classList.toggle("hidden");

    // Trigger confetti effect
    const confettiContainer = document.getElementById("confetti");
    confettiContainer.style.display = 'block';
    createConfetti(confettiContainer);

    // Show overlay
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden");
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");
}

function createConfetti(container) {
    // Clear previous confetti
    container.innerHTML = '';

    for (let i = 0; i < 100; i++) { // Create 100 confetti pieces
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.backgroundColor = getRandomColor();
        piece.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        piece.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration
        piece.style.opacity = Math.random(); // Random opacity

        container.appendChild(piece);
    }
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFDE33'];
    return colors[Math.floor(Math.random() * colors.length)];
}


function revealSurprise() {
    document.getElementById('surprise-content').classList.remove('hidden');
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('hidden');
}



function revealSurprise() {
    document.getElementById('surprise-content').classList.remove('hidden');
    startFallingElements();
}

function startFallingElements() {
    const container = document.getElementById('falling-elements');

    for (let i = 0; i < 50; i++) {
        const element = document.createElement('div');
        element.className = 'falling-element ' + (Math.random() > 0.5 ? 'heart' : 'flower');
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(element);

        // Remove the element after the animation ends
        element.addEventListener('animationend', () => {
            container.removeChild(element);
        });
    }
}







// Fullscreen function for video
function openFullscreen() {
    const video = document.getElementById('birthdayVideo');
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}






function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
