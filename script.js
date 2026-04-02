// Current exchange rate (Static for now: 1 TWD = 42.5 KRW)
// In a real app, you could fetch this from an API
const EXCHANGE_RATE = 42.5;

const twdInput = document.getElementById('twd-amount');
const krwInput = document.getElementById('krw-amount');
const rateDisplay = document.getElementById('current-rate');

// Function to perform the conversion
function convert() {
    const twdValue = twdInput.value;
    const result = twdValue * EXCHANGE_RATE;
    
    // Update the KRW input with the result, rounded to 0 decimal places
    krwInput.value = Math.floor(result).toLocaleString();
}

// Listen for when the user types in the TWD box
twdInput.addEventListener('input', convert);

// Run once on load to show initial value
window.onload = convert;
