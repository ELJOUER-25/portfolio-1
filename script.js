const output = document.getElementById('output');
const cursor = document.getElementById('cursor');

const messages = [
    "Hello !",
    "   Bienvenue sur mon site ! :)",
    "   Vous êtes connecté en tant qu'invité",
    "   Veuillez patienter...",
];

let currentMessage = 0;

function typeMessage(message, index) {
    if (index < message.length) {
        output.textContent += message.charAt(index);
        setTimeout(() => typeMessage(message, index + 1), 35);//50 = seonde pour taper les phrases
    } else {
        currentMessage++;
        if (currentMessage < messages.length) {
            setTimeout(() => {
                output.textContent += '\n';
                typeMessage(messages[currentMessage], 0);
            }, 800);
        } else {
            // Redirection après la dernière ligne
            setTimeout(() => {
                cursor.style.display ='none'
                window.location.href = 'projets.html'; // URL de page d'accueil
            }, 1000);// 1500 = seconde pour allé sur page acceuil
        }
    }
}

// Démarrer l'écriture du premier message
typeMessage(messages[currentMessage], 0);