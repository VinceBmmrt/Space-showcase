"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, ExternalLink } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function ReactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-900 text-white">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">React</h1>

          <p className="text-xl text-cyan-100 mb-12">
            React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Elle permet de créer des
            applications web interactives avec des composants réutilisables.
          </p>

          <div className="bg-blue-900/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="mr-2 h-6 w-6 text-cyan-300" />
              Concepts fondamentaux
            </h2>
            <p className="text-cyan-100 mb-6">
              React repose sur plusieurs concepts clés qui le distinguent des autres bibliothèques et frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Composants</h3>
                <p className="text-cyan-100 mb-4">
                  Les composants sont les blocs de construction de React. Ils encapsulent l'état et le rendu d'une
                  partie de l'interface.
                </p>
                <CodeBlock
                  language="jsx"
                  code={`// Composant fonctionnel
function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

// Composant classe
class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">JSX</h3>
                <p className="text-cyan-100 mb-4">
                  JSX est une extension de syntaxe pour JavaScript qui ressemble à HTML et facilite l'écriture des
                  éléments React.
                </p>
                <CodeBlock
                  language="jsx"
                  code={`// JSX simple
const element = <h1>Bonjour, monde!</h1>;

// JSX avec expressions
const name = "John";
const element = <h1>Bonjour, {name}!</h1>;

// JSX avec attributs
const element = <img src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />;

// JSX avec enfants
const element = (
  <div>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </div>
);`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Props</h3>
                <p className="text-cyan-100 mb-4">
                  Les props sont des arguments passés aux composants React. Ils sont en lecture seule.
                </p>
                <CodeBlock
                  language="jsx"
                  code={`// Définition du composant
function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Profession: {props.profession}</p>
    </div>
  );
}

// Utilisation du composant
<UserProfile 
  name="Alice" 
  age={28} 
  profession="Développeuse" 
/>`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">State</h3>
                <p className="text-cyan-100 mb-4">
                  Le state est un objet qui contient des données spécifiques au composant qui peuvent changer au fil du
                  temps.
                </p>
                <CodeBlock
                  language="jsx"
                  code={`// Utilisation du state avec hooks
import { useState } from 'react';

function Counter() {
  // Déclare une variable d'état "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}`}
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Hooks</h2>
            <p className="text-cyan-100 mb-6">
              Les Hooks sont des fonctions qui permettent d'utiliser l'état et d'autres fonctionnalités de React dans
              les composants fonctionnels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">useState</h3>
                <p className="text-cyan-100 mb-4">Permet d'ajouter un état local à un composant fonctionnel.</p>
                <CodeBlock
                  language="jsx"
                  code={`import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  
  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Votre nom"
      />
      <p>Bonjour, {name || 'visiteur'}!</p>
    </form>
  );
}`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">useEffect</h3>
                <p className="text-cyan-100 mb-4">
                  Permet d'exécuter des effets secondaires dans les composants fonctionnels.
                </p>
                <CodeBlock
                  language="jsx"
                  code={`import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fonction pour récupérer les données
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []); // Le tableau vide signifie que cet effet s'exécute une seule fois après le premier rendu
  
  if (loading) return <p>Chargement...</p>;
  return <div>{JSON.stringify(data)}</div>;
}`}
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Autres Hooks importants</h3>
              <ul className="list-disc list-inside text-cyan-100 space-y-2">
                <li>
                  <code className="bg-blue-900/50 px-1 rounded">useContext</code> - Accéder à un contexte React
                </li>
                <li>
                  <code className="bg-blue-900/50 px-1 rounded">useReducer</code> - Gérer un état complexe avec un
                  réducteur
                </li>
                <li>
                  <code className="bg-blue-900/50 px-1 rounded">useCallback</code> - Mémoriser une fonction entre les
                  rendus
                </li>
                <li>
                  <code className="bg-blue-900/50 px-1 rounded">useMemo</code> - Mémoriser une valeur calculée entre les
                  rendus
                </li>
                <li>
                  <code className="bg-blue-900/50 px-1 rounded">useRef</code> - Référencer un élément DOM ou stocker une
                  valeur mutable
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/20 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Exemple d'application React</h2>
            <p className="text-cyan-100 mb-6">
              Voici un exemple simple d'une application de liste de tâches (Todo List) avec React :
            </p>

            <CodeBlock
              language="jsx"
              code={`import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Ajouter une nouvelle tâche
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  // Basculer l'état d'une tâche
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <div className="add-todo">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une tâche..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      
      <div className="todo-stats">
        <p>Total: {todos.length}</p>
        <p>Complétées: {todos.filter(todo => todo.completed).length}</p>
        <p>À faire: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
}

export default TodoApp;`}
            />
          </div>

          <div className="bg-blue-900/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Ressources pour approfondir</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-cyan-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://reactjs.org/docs/getting-started.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 hover:text-white transition-colors"
                >
                  Documentation officielle de React
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-cyan-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://beta.reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 hover:text-white transition-colors"
                >
                  React Docs Beta - La nouvelle documentation
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-cyan-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://react.dev/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 hover:text-white transition-colors"
                >
                  Apprendre React - Tutoriels interactifs
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-cyan-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 hover:text-white transition-colors"
                >
                  Next.js - Framework React pour la production
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6 text-lg">
                Retour au jeu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
