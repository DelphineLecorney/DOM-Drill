// Répertorier tous les enfants de l'ul
const ul = document.querySelector('ul');
// Récupère tous les enfants
const children = ul.childNodes;
// Boucle sur les enfants de l'ul
for (let i = 0; i < children.length; i++) {
    // Vérifie si le noeud enfant est bien un noeud élément
  if (children[i].nodeType === 1) {
    console.log(children[i]);
  }
}

// Vérifier si l'élément "Fast and Furious" est le premier élément
const firstChild = ul.firstElementChild;
if(firstChild.textContent === "Fast and Furious" && ul.children[0] !== firstChild){
    // Si ce n'est pas le cas, insertBefore pour le mettre
    ul.insertBefore(firstChild, ul.firstChild);
    console.log(firstChild);
}

// Ajouter la classe .important à "Fast and Furious"
if (children.textContent === "Fast and Furious") {
    children[i].classList.add("important");
};
