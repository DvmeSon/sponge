let pattyCount = 0;
let money = 0;
let totalPatties = 0;
let pattiesPerSecond = 0;
const CLICK_VALUE = 10; // $5 per click
const quotes = [
    { text: "Ar ar ar ar! Each patty is $5 in me pocket!", milestone: 20 },
    { text: "Money money money! Sweet sweet money!", milestone: 50 },
    { text: "Hello, I like money! 🦀", milestone: 100 },
    { text: "The money is always right! 💰", milestone: 200 },
    { text: "You're becoming a big spender like me! 🤑", milestone: 500 },
    { text: "I haven't seen this much money since the grand opening! 🏪", milestone: 1000 },
    { text: "I'm smelling a lot of money! *sniff sniff* 👃", milestone: 2000 },
    { text: "Did someone say MONEY?! 💵", milestone: 3000 },
    { text: "Now that's what I call profit! 📈", milestone: 25000 },
    { text: "I can feel it in me claws... MORE MONEY! 🦀", milestone: 37500 },
    { text: "*wiping tears with money* I'm so proud! 😭", milestone: 50000 }
];

function clickPatty() {
    pattyCount += 1;
    totalPatties += 1;
    money += CLICK_VALUE;
    updateDisplay();
    showMoneyPopup();
    showDollarAnimation();
    checkMilestones();
}

function showMoneyPopup() {
    const popup = document.createElement('div');
    popup.className = 'money-popup';
    popup.textContent = `+$${CLICK_VALUE}`;
    
    const container = document.getElementById('moneyPopups');
    const x = Math.random() * 80 + 10; // Random position between 10% and 90%
    popup.style.left = `${x}%`;
    
    container.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
}

function checkMilestones() {
    quotes.forEach(quote => {
        if (Math.floor(money) === quote.milestone) {
            showKrabsQuote(quote.text);
        }
    });
}

function showKrabsQuote(quoteText) {
    const quoteElement = document.getElementById('krabsQuote');
    quoteElement.textContent = quoteText;
    quoteElement.classList.remove('hidden');
    
    // Add fade-out animation after 2.5 seconds
    setTimeout(() => {
        quoteElement.style.opacity = '0';
    }, 2500);
    
    // Hide element and reset opacity after fade completes
    setTimeout(() => {
        quoteElement.classList.add('hidden');
        quoteElement.style.opacity = '1';
    }, 3000);
}

function buyUpgrade(type) {
    const costs = {
        spatula: 10,
        grill: 50
    };
    const increases = {
        spatula: 1,
        grill: 5
    };
    
    if (money >= costs[type]) {
        money -= costs[type];
        pattiesPerSecond += increases[type];
        costs[type] *= 1.5;
        document.getElementById(`${type}Cost`).textContent = Math.floor(costs[type]);
        updateDisplay();
    }
}

function updateDisplay() {
    // Add null checks for each element
    const pattyCountElement = document.getElementById('pattyCount');
    const moneyCountElement = document.getElementById('moneyCount');
    const ppsElement = document.getElementById('pps');
    const totalMoneyElement = document.getElementById('totalMoney');

    if (pattyCountElement) {
        pattyCountElement.textContent = Math.floor(pattyCount);
    }
    if (moneyCountElement) {
        moneyCountElement.textContent = `$${Math.floor(money)}`;
    }
    if (ppsElement) {
        ppsElement.textContent = pattiesPerSecond;
    }
    if (totalMoneyElement) {
        totalMoneyElement.textContent = `$${Math.floor(money)}`;
    }
}

// Initialize by hiding the quote bubble
document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('krabsQuote');
    if (quoteElement) {
        quoteElement.classList.add('hidden');
    }
});

// Update the interval function
setInterval(() => {
    pattyCount += pattiesPerSecond;
    totalPatties += pattiesPerSecond;
    money += pattiesPerSecond;
    updateDisplay();
}, 1000);

function showDollarAnimation() {
    const dollarSign = document.createElement('div');
    dollarSign.className = 'dollar-animation';
    dollarSign.textContent = '$';
    
    const pattyImage = document.getElementById('pattyImage');
    const rect = pattyImage.getBoundingClientRect();
    dollarSign.style.left = `${rect.left + rect.width / 2}px`;
    dollarSign.style.top = `${rect.top}px`;
    
    document.body.appendChild(dollarSign);
    
    setTimeout(() => dollarSign.remove(), 1000);
} 