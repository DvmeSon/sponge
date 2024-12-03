// SpongeBob Quotes
const quotes = [
    { text: "I'm ready, I'm ready, I'm ready... to buy $SPONGE!", author: "SpongeBob SquarePants" },
    { text: "The money is always right!", author: "Mr. Krabs" },
    { text: "To the moon? No, this is Patrick!", author: "Patrick Star" },
    { text: "F is for Funds that pump up and down!", author: "SpongeBob SquarePants" },
    { text: "I went to college!", author: "Patrick Star" }
];

let currentQuote = 0;

function nextQuote() {
    const quoteBox = document.getElementById('quoteBox');
    currentQuote = (currentQuote + 1) % quotes.length;
    quoteBox.classList.add('shake');
    
    setTimeout(() => {
        quoteBox.querySelector('.quote-text').textContent = quotes[currentQuote].text;
        quoteBox.querySelector('.quote-author').textContent = `- ${quotes[currentQuote].author}`;
        quoteBox.classList.remove('shake');
    }, 500);
}

// Krabby Patty Counter
let patties = 0;
let pps = 0; // patties per second
let autoClickerCost = 10;

function clickPatty() {
    patties++;
    updateDisplay();
    
    const pattyImg = document.querySelector('.patty');
    pattyImg.classList.add('patty-bounce');
    setTimeout(() => pattyImg.classList.remove('patty-bounce'), 300);
    
    // Play a quick "ding" sound
    const ding = new Audio('/static/sounds/spatula-flip.mp3');
    ding.volume = 0.2;
    ding.play();
}

function updateDisplay() {
    document.getElementById('pattyCount').textContent = Math.floor(patties);
    document.getElementById('pps').textContent = pps;
    document.getElementById('pattyValue').textContent = (patties * 1.99).toFixed(2);
}

// Auto-increment patties
setInterval(() => {
    if (pps > 0) {
        patties += pps / 10;
        updateDisplay();
    }
}, 100);

// SpongeBob Laugh Sound
function playLaugh() {
    const laugh = new Audio('/static/sounds/spongebob-laugh.mp3');
    laugh.play();
}

// Meme Rotation
const memes = ['meme1.jpg', 'meme2.jpg', 'meme3.jpg'];
let currentMeme = 0;

function nextMeme() {
    const memeImg = document.getElementById('currentMeme');
    currentMeme = (currentMeme + 1) % memes.length;
    memeImg.classList.add('shake');
    
    setTimeout(() => {
        memeImg.src = `/static/images/${memes[currentMeme]}`;
        memeImg.classList.remove('shake');
    }, 500);
}

// Mock Price Ticker
function updatePrice() {
    const price = (Math.random() * 0.0001).toFixed(8);
    const volume = Math.floor(Math.random() * 1000000);
    
    document.getElementById('tokenPrice').textContent = `$${price}`;
    document.getElementById('tokenVolume').textContent = `$${volume.toLocaleString()}`;
}

setInterval(updatePrice, 5000);
updatePrice();

// Image fade-in animation on scroll
function handleScrollAnimations() {
    const images = document.querySelectorAll('.image-transition');
    
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            image.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations); 