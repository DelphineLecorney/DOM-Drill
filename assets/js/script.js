// Répertorier tous les enfants de l'ul
const ul = document.querySelector("ul");

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
if (firstChild.textContent === "Fast and Furious") {
  // Si ce n'est pas le cas, insertBefore pour le mettre
  ul.insertBefore(firstChild, ul.firstElementChild);
  console.log(firstChild);
}

// Ajouter la classe .important à "Fast and Furious"
const fastAndFurious = document.querySelector("li:first-of-type");
fastAndFurious.classList.add("important");

// Ajouter un eventListener sur chaque élément de la liste
// et ajouter une alerte pour affficher l'élément cliqué
const childrenClick = document.querySelectorAll("li");
childrenClick.forEach(function (element) {
  element.addEventListener("click", function () {
    alert(element.textContent);
  });
});

// Supprimez les doublons à l'aide de removeChild
// sélectionne l'élément qui contient les doublons
const element = document.getElementsByTagName('li');
// boucle à travers chaque élément enfant
for (let i = 0; i < element.length; i++) {
  for (let j = i + 1; j < element.length; j++) { // puis boucle sur les suivants
    if (element[i].textContent === element[j].textContent && element[i].isEqualNode(element[j])) {
      // supprime l'élément en double
      element[j].parentNode.removeChild(element[j]);
      j--;
    }
  }
}
// Ajouter un eventListener, trier la liste mais laisser "Fast and Furious" en premier élément


//Modifier la fonction précédente, lorsqu'on appuie sur "d" "Fast and Furious" est cloné


// Créez un nouveau div avant la liste, en utilisant createElement et insertBefore
const newDiv = document.createElement('div');
ul.parentNode.insertBefore(newDiv, ul);
