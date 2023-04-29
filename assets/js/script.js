// Répertorier tous les enfants de l'ul
const ul = document.querySelector("ul");

// Récupère tous les enfants
const children = ul.childNodes;

// Boucle sur les enfants de l'ul
for (let i = 0; i < children.length; i++) {
  // Vérifie si le noeud enfant est bien un noeud élément
  const child = children[i];
  if (child.nodeType === 1) {
    console.log(child);
  }
}

// Vérifier si l'élément "Fast and Furious" est le premier élément
const firstChild = ul.querySelector("li:first-child");
if (firstChild.textContent !== "Fast and Furious") {
  // Si ce n'est pas le cas, insérer "Fast and Furious" au début de la liste
  const newChild = document.createElement("li");
  newChild.textContent = "Fast and Furious";
  ul.insertBefore(newChild, ul.firstChild);
  // Ajouter la classe .important à "Fast and Furious"
  newChild.classList.add("important");
}


// Ajouter un eventListener sur chaque élément de la liste
// et ajouter une alerte pour affficher l'élément cliqué
const childrenClick = document.querySelectorAll("li");
childrenClick.forEach(function (element) {
  element.addEventListener("click", function () {
    alert(element.textContent);
  // Ajoutez une condition spéciale à la fonction précédente si 
  // l'élément cliqué est Fast and Furious
    if(element.textContent === "Fast and Furious") {
  alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
};
  });
});

// Supprimez les doublons à l'aide de removeChild
const element = ul.getElementsByTagName('li');
for (let i = 0; i < element.length; i++) {
  const listElement = element[i];
  for (let j = i + 1; j < element.length; j++) {
    const nextElement = element[j];
    if (listElement.textContent === nextElement.textContent) {
      ul.removeChild(nextElement);
      j--;
    }
  }
}

/* Pas réussi avec isEqualNode() de supprimer tous les doublons
L'élément déplacé est un doublon et impossible de supprimer 
sa place d'origine :
const elementList = ul.getElementsByTagName('li');
for (let i = 0; i < elementList.length; i++) {
  const currentElement = elementList[i];
  for (let j = i + 1; j < elementList.length; j++) {
    const nextElement = elementList[j];
    if (currentElement.textContent === nextElement.textContent && currentElement.isEqualNode(nextElement)) {
      ul.removeChild(nextElement);
      j--;
    }
  }
} */



// Ajouter un eventListener, trier la liste mais laisser "Fast and Furious" en premier élément
const list = document.getElementById("li");
document.addEventListener("keyup", function(event) {
  if (event.key === "r") { 
    let firstItem = list.querySelector("li:first-child");
    // Obtenez une liste de tous les éléments sauf le premier
    let itemsToSort = Array.from(list.querySelectorAll("li:not(:first-child)"));
    // Triez les éléments de manière aléatoire
    itemsToSort.sort(function(a, b) {
      return Math.random() - 0.5;
    });
    // Ajouter le premier élément à la liste triée
    let sortedItems = [firstItem];
    // Ajouter les autres éléments triés à la liste
    sortedItems = sortedItems.concat(itemsToSort);
    // Effacer la liste existante
    while (list.children) {
      list.removeChild(list.children);
    }
    // Ajouter les éléments triés à la liste
    sortedItems.forEach(function(item) {
      list.appendChild(item);
    });
  }
});


//Modifier la fonction précédente, lorsqu'on appuie sur "d" "Fast and Furious" est cloné




// Créez un nouveau div avant la liste, en utilisant createElement et insertBefore
const newDiv = document.createElement('div');
ul.parentNode.insertBefore(newDiv, ul);

// À l'aide de createElement, créez une balise select dans la div créée précédemment, 
// avec deux options : 'franchises importantes' et 'franchises normales'
const createSelect = document.createElement('select');
const optionImportant = document.createElement('option');
const optionNormal = document.createElement('option');

optionImportant.textContent = 'franchises importantes';
optionNormal.textContent = 'franchises normales';

newDiv.appendChild(createSelect);
createSelect.appendChild(optionImportant);
createSelect.appendChild(optionNormal);


// Ajout d'un eventListener au select
createSelect.addEventListener('click', (option) => {
  let selectOption = option.target.value;
  if (selectOption === 'franchises importantes'){
    let selectShow = document.querySelectorAll('.important');
    selectShow.forEach((element) => {
      element.style.visibility = 'visible';
    });
  }else{
    let selectHide = document.querySelectorAll(':not(.important)');
    selectHide.forEach((element) => {
      element.style.visibility = 'hidden';
    });
  };
});

