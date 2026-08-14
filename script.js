document.addEventListener('DOMContentLoaded', () => {
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');
    
    // Percentual inicial da fonte
    let currentFontSize = 100;

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < 150) { // Limite máximo de aumento (150%)
            currentFontSize += 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > 80) { // Limite mínimo de redução (80%)
            currentFontSize -= 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });
});
