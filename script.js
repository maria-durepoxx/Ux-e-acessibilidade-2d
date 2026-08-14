document.addEventListener('DOMContentLoaded', () => {
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');
    const btnReset = document.getElementById('btn-reset');
    
    // Configurações do tamanho de fonte
    let currentFontSize = 100;
    const minSize = 80;
    const maxSize = 150;
    const step = 10;

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < maxSize) {
            currentFontSize += step;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > minSize) {
            currentFontSize -= step;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnReset.addEventListener('click', () => {
        currentFontSize = 100;
        document.documentElement.style.fontSize = '100%';
    });
});
