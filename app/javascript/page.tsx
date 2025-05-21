import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, ExternalLink } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function JavaScriptPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-500 to-yellow-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au jeu
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">JavaScript</h1>

          <p className="text-xl text-yellow-100 mb-12">
            JavaScript est le langage de programmation qui donne vie à vos pages web, permettant l'interactivité et les
            fonctionnalités dynamiques.
          </p>

          <div className="bg-yellow-800/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="mr-2 h-6 w-6 text-yellow-300" />
              Fondamentaux
            </h2>
            <p className="text-yellow-100 mb-6">
              JavaScript est un langage de programmation de haut niveau, interprété et orienté objet. Il est
              principalement utilisé côté client pour rendre les pages web interactives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Variables et types de données</h3>
                <CodeBlock
                  language="javascript"
                  code={`// Variables
let name = "John";
const age = 30;
var isActive = true;

// Types de données
let string = "Texte";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { key: "value" };
let nullValue = null;
let undefinedValue;`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Fonctions</h3>
                <CodeBlock
                  language="javascript"
                  code={`// Déclaration de fonction
function greet(name) {
  return "Bonjour " + name;
}

// Expression de fonction
const sayHello = function(name) {
  return "Hello " + name;
};

// Fonction fléchée
const welcome = (name) => {
  return \`Welcome \${name}\`;
};

// Appel de fonction
console.log(greet("Alice")); // "Bonjour Alice"`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Structures de contrôle</h3>
                <CodeBlock
                  language="javascript"
                  code={`// Conditions
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

// Switch
switch (day) {
  case "Monday":
    console.log("Début de semaine");
    break;
  case "Friday":
    console.log("Fin de semaine");
    break;
  default:
    console.log("Milieu de semaine");
}

// Boucles
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Méthodes d'array</h3>
                <CodeBlock
                  language="javascript"
                  code={`const fruits = ["pomme", "banane", "orange"];

// forEach
fruits.forEach(fruit => {
  console.log(fruit);
});

// map
const upperFruits = fruits.map(fruit => {
  return fruit.toUpperCase();
});

// filter
const longFruits = fruits.filter(fruit => {
  return fruit.length > 5;
});

// reduce
const allFruits = fruits.reduce((acc, fruit) => {
  return acc + ", " + fruit;
});`}
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-800/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Manipulation du DOM</h2>
            <p className="text-yellow-100 mb-6">
              Le DOM (Document Object Model) est une interface de programmation qui représente la structure d'un
              document HTML. JavaScript peut manipuler le DOM pour modifier dynamiquement le contenu et le comportement
              d'une page web.
            </p>

            <CodeBlock
              language="javascript"
              code={`// Sélectionner des éléments
const title = document.getElementById("title");
const paragraphs = document.getElementsByTagName("p");
const buttons = document.querySelectorAll(".btn");

// Modifier le contenu
title.textContent = "Nouveau titre";
title.innerHTML = "<span>Titre avec HTML</span>";

// Modifier les styles
title.style.color = "blue";
title.style.fontSize = "24px";

// Ajouter/supprimer des classes
title.classList.add("highlight");
title.classList.remove("old-class");
title.classList.toggle("active");

// Créer et ajouter des éléments
const newElement = document.createElement("div");
newElement.textContent = "Nouvel élément";
document.body.appendChild(newElement);

// Gérer les événements
const button = document.querySelector("button");
button.addEventListener("click", function() {
  alert("Bouton cliqué !");
});`}
            />
          </div>

          <div className="bg-yellow-800/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Asynchrone en JavaScript</h2>
            <p className="text-yellow-100 mb-6">
              JavaScript est un langage à thread unique, mais il peut gérer des opérations asynchrones grâce aux
              callbacks, promises et async/await.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Promises</h3>
                <CodeBlock
                  language="javascript"
                  code={`// Création d'une Promise
const fetchData = new Promise((resolve, reject) => {
  // Simulation d'une requête API
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ id: 1, name: "Data" });
    } else {
      reject("Erreur lors de la récupération");
    }
  }, 2000);
});

// Utilisation d'une Promise
fetchData
  .then(data => {
    console.log("Données reçues:", data);
    return data.id;
  })
  .then(id => {
    console.log("ID:", id);
  })
  .catch(error => {
    console.error("Erreur:", error);
  })
  .finally(() => {
    console.log("Requête terminée");
  });`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Async/Await</h3>
                <CodeBlock
                  language="javascript"
                  code={`// Fonction asynchrone avec async/await
async function getData() {
  try {
    // Attendre la résolution de la Promise
    const response = await fetch('https://api.example.com/data');
    
    // Vérifier si la requête a réussi
    if (!response.ok) {
      throw new Error('Erreur réseau');
    }
    
    // Convertir la réponse en JSON
    const data = await response.json();
    
    // Utiliser les données
    console.log("Données:", data);
    return data;
  } catch (error) {
    console.error("Erreur:", error);
  }
}

// Appel de la fonction asynchrone
getData().then(result => {
  console.log("Résultat final:", result);
});`}
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-800/20 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Exemple pratique</h2>
            <p className="text-yellow-100 mb-6">
              Voici un exemple simple d'une application Todo List utilisant JavaScript :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">HTML</h3>
                <CodeBlock
                  language="html"
                  code={`<div class="todo-app">
  <h1>Ma Todo List</h1>
  
  <div class="todo-form">
    <input type="text" id="todo-input" placeholder="Ajouter une tâche...">
    <button id="add-button">Ajouter</button>
  </div>
  
  <ul id="todo-list">
    <!-- Les tâches seront ajoutées ici -->
  </ul>
</div>`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
                <CodeBlock
                  language="javascript"
                  code={`// Sélectionner les éléments
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Tableau pour stocker les tâches
let todos = [];

// Fonction pour ajouter une tâche
function addTodo() {
  const todoText = todoInput.value.trim();
  
  if (todoText !== '') {
    // Créer un nouvel objet todo
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };
    
    // Ajouter au tableau
    todos.push(todo);
    
    // Mettre à jour l'affichage
    renderTodos();
    
    // Réinitialiser l'input
    todoInput.value = '';
  }
}

// Fonction pour supprimer une tâche
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Fonction pour basculer l'état d'une tâche
function toggleTodo(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  renderTodos();
}

// Fonction pour afficher les tâches
function renderTodos() {
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    const li = document.createElement('li');
    
    // Ajouter une classe si la tâche est complétée
    if (todo.completed) {
      li.classList.add('completed');
    }
    
    li.innerHTML = \`
      <span class="todo-text">\${todo.text}</span>
      <div class="todo-actions">
        <button class="toggle-btn">✓</button>
        <button class="delete-btn">×</button>
      </div>
    \`;
    
    // Ajouter les écouteurs d'événements
    const toggleBtn = li.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
      toggleTodo(todo.id);
    });
    
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id);
    });
    
    todoList.appendChild(li);
  });
}

// Ajouter les écouteurs d'événements
addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// Initialiser l'affichage
renderTodos();`}
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-800/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Ressources pour approfondir</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-100 hover:text-white transition-colors"
                >
                  MDN Web Docs - JavaScript
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-100 hover:text-white transition-colors"
                >
                  JavaScript.info - Le tutoriel JavaScript moderne
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://eloquentjavascript.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-100 hover:text-white transition-colors"
                >
                  Eloquent JavaScript - Livre en ligne gratuit
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-100 hover:text-white transition-colors"
                >
                  freeCodeCamp - Algorithmes JavaScript et structures de données
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/react">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-8 py-6 text-lg">
                Continuer vers React
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
