document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('statusText');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const speedUpButton = document.getElementById('speedUpButton');
    const slowDownButton = document.getElementById('slowDownButton');

    startButton.addEventListener('click', () => {
        statusText.textContent = 'Statut: En marche';
        // Ajouter ici le code pour démarrer le coaster
    });

    stopButton.addEventListener('click', () => {
        statusText.textContent = 'Statut: Arrêté';
        // Ajouter ici le code pour arrêter le coaster
    });

    speedUpButton.addEventListener('click', () => {
        statusText.textContent = 'Statut: Accélère';
        // Ajouter ici le code pour accélérer le coaster
    });

    slowDownButton.addEventListener('click', () => {
        statusText.textContent = 'Statut: Ralentit';
        // Ajouter ici le code pour ralentir le coaster
    });
});
