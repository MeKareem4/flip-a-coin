const coinImage = document.getElementById('coinImage');
const flipButton = document.getElementById('flipButton');

flipButton.addEventListener('click', () => {
    // Add a quick flip animation
    coinImage.style.transform = 'rotateY(180deg)';

    setTimeout(() => {
        // Randomize the coin side (heads or tails)
        const isHeads = Math.random() < 0.5;
        coinImage.src = isHeads ? 'heads.png' : 'tails.png';

        // Reset the flip animation
        coinImage.style.transform = 'rotateY(0deg)';
    }, 300);
});
