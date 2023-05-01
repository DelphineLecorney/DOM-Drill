# The DOM Drill

A summary of everything we know about the DOM in one big summary exercise.

DO NOT MODIFY THE HTML FILE, all the modifications should be done using javascript.

## Documentation

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Usage/Examples

```javascript
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
```

## Lessons Learned

Use childNodes

createElement

Add an eventListener

…



