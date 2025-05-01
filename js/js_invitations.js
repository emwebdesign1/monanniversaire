const invitationCodes = {
    Joshua: 'jojosh123',
    Yasmine: 'yasminelaboss334',
    Lenny: 'lennouche23432',
    Julie: 'julielaboss',
    Zora: 'maya1245',
    Tina: 'tguerry356',
    Mélissa: 'mguerry123',
    Marion: 'meyeurmoryer',
    Asya: 'asyadubinks1630',
    Jayleen: 'jnounstar',
    Laura: 'laurettelecanard',
    Léna: 'lenalatruffe',
    Lois: 'lilpeppapig',
    Soraia: 'soraialameufdu64',
    Jeanne: 'jeannelastardelemf',
    Manuel: 'munuboss118',
    Florane: 'floflolagrenouille',
    EmmaD: 'emmadasilvette',
    EmmaS: 'emmasilvestrelaboss',
    Cem: 'lekebab123',
    JulieL: 'lafolledelemf',
    Lukas: 'loulou',
    Line: 'line23',
    MarieReine: 'motherfucker',
    Rosalie: 'rosalit'
};


const vipGuests = ['']; 

// Fonction pour afficher le nom de l'invité et le message d'accueil
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteName = urlParams.get('invite');
    
    // Afficher le nom de l'invité
    document.getElementById('welcomeMessage').innerText = `Hello ${inviteName}, tu dois rentrer ton code d'invitation et si t'as un peu de chance t'auras une surprise.`;
};

// Fonction pour vérifier le code d'invitation
function checkCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteName = urlParams.get('invite');
    const enteredCode = document.getElementById('inviteCode').value;
    
    if (enteredCode === invitationCodes[inviteName]) {
        // Code correct, vérifier si l'invité a droit à la limousine
        if (vipGuests.includes(inviteName)) {
            showPopup();  

        } else {
            // Rediriger vers la page spéciale si pas VIP
            window.location.href = `accueil_officiel.html`;
        }
    } else {
        // Code incorrect, afficher un message d'erreur
        document.getElementById('errorMessage').style.display = 'block';
    }
}

// Afficher le pop-up de félicitations
function showPopup() {
    // Créer le pop-up
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <p>Bravo, tu as de la chance, tu es un des invités qui a le droit d'avoir une place dans la limousine !</p>
        <button onclick="closePopup()">Fermer</button>
    `;
    document.body.appendChild(popup);
}

// Fermer le pop-up
function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
        window.location.href = `accueil_officiel.html`;
    }
}

