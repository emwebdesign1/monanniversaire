window.onload = function() {
    // Récupérer la vidéo
    const video = document.getElementById('welcomeVideo');
    const videoContainer = document.getElementById('videoContainer');
    
    // Ajouter un événement de fin de lecture pour cacher la vidéo
    video.onended = function() {
        // Lorsque la vidéo est terminée, cacher le conteneur
        videoContainer.style.display = 'none';
    };
};

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.invite-card');
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        }
    });
});

document.getElementById('playButton').onclick = function() {
    var video = document.getElementById('introVideo');
    video.play();
    video.muted = false; // Désactive le mute quand l'utilisateur clique
};
