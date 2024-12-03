function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between 10px and 30px
    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random position on x-axis
    const position = Math.random() * 100;
    bubble.style.left = `${position}vw`;
    
    document.querySelector('.bubble-container').appendChild(bubble);
    
    // Remove bubble after animation
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Create new bubbles periodically
setInterval(createBubble, 300); 