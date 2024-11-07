const p = document.querySelector('#text-intro');
let i = 0;
let txt = "Bonjour ! Je m'appelle Estèphe et je suis très content d'être ici avec toi !"

let repetition = window.setInterval(function(){ajouter_lettre(txt)}, 100);

function ajouter_lettre(texte) {
    p.textContent += texte[i];
    i += 1;
    if (i === texte.length) {
        window.clearInterval(repetition);
    }
}
