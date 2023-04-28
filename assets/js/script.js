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
