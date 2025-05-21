import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, ExternalLink } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function HtmlCssPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-600 to-red-900 text-white">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">HTML & CSS</h1>

          <p className="text-xl text-orange-100 mb-12">
            Les fondations du développement web moderne. HTML structure votre contenu, tandis que CSS le stylise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-orange-900/30 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2 h-6 w-6 text-orange-300" />
                HTML
              </h2>
              <p className="text-orange-100 mb-6">
                HTML (HyperText Markup Language) est le langage standard pour créer des pages web. Il décrit la
                structure d'une page web à l'aide de balises.
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Structure de base</h3>
                <CodeBlock
                  language="html"
                  code={`<!DOCTYPE html>
<html>
<head>
  <title>Ma première page</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Bonjour le monde!</h1>
  <p>Ceci est un paragraphe.</p>
</body>
</html>`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Éléments courants</h3>
                <ul className="list-disc list-inside text-orange-100 space-y-2">
                  <li>
                    <code className="bg-orange-900/50 px-1 rounded">&lt;h1&gt;</code> à{" "}
                    <code className="bg-orange-900/50 px-1 rounded">&lt;h6&gt;</code> - Titres
                  </li>
                  <li>
                    <code className="bg-orange-900/50 px-1 rounded">&lt;p&gt;</code> - Paragraphes
                  </li>
                  <li>
                    <code className="bg-orange-900/50 px-1 rounded">&lt;a&gt;</code> - Liens
                  </li>
                  <li>
                    <code className="bg-orange-900/50 px-1 rounded">&lt;img&gt;</code> - Images
                  </li>
                  <li>
                    <code className="bg-orange-900/50 px-1 rounded">&lt;div&gt;</code> - Conteneurs
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-900/30 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2 h-6 w-6 text-orange-300" />
                CSS
              </h2>
              <p className="text-orange-100 mb-6">
                CSS (Cascading Style Sheets) est utilisé pour styliser et mettre en forme les éléments HTML. Il contrôle
                l'apparence de votre site web.
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Syntaxe de base</h3>
                <CodeBlock
                  language="css"
                  code={`body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

h1 {
  color: blue;
  font-size: 24px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Concepts clés</h3>
                <ul className="list-disc list-inside text-orange-100 space-y-2">
                  <li>Sélecteurs (éléments, classes, IDs)</li>
                  <li>Propriétés et valeurs</li>
                  <li>Box model (margin, border, padding)</li>
                  <li>Flexbox et Grid pour la mise en page</li>
                  <li>Media queries pour le responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-900/20 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-6">Exemple complet</h2>
            <p className="text-orange-100 mb-6">
              Voici un exemple simple combinant HTML et CSS pour créer une carte de profil :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">HTML</h3>
                <CodeBlock
                  language="html"
                  code={`<div class="profile-card">
  <img src="avatar.jpg" alt="Avatar" class="profile-image">
  <h2 class="profile-name">John Doe</h2>
  <p class="profile-title">Web Developer</p>
  <div class="profile-bio">
    <p>Passionate about creating beautiful and functional websites.</p>
  </div>
  <div class="profile-links">
    <a href="#" class="profile-link">Portfolio</a>
    <a href="#" class="profile-link">Contact</a>
  </div>
</div>`}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">CSS</h3>
                <CodeBlock
                  language="css"
                  code={`.profile-card {
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: white;
  margin: 0 auto;
}

.profile-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.profile-name {
  color: #333;
  font-size: 24px;
  margin: 16px 0 8px;
  text-align: center;
}

.profile-title {
  color: #666;
  font-size: 16px;
  margin: 0 0 16px;
  text-align: center;
}

.profile-bio {
  padding: 0 16px;
  color: #555;
}

.profile-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px;
}

.profile-link {
  text-decoration: none;
  color: white;
  background-color: #3498db;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.profile-link:hover {
  background-color: #2980b9;
}`}
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-900/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Ressources pour approfondir</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-orange-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  MDN Web Docs - HTML: Le langage de balisage HyperText
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-orange-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  MDN Web Docs - CSS: Feuilles de style en cascade
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-orange-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://css-tricks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  CSS-Tricks - Astuces et tutoriels CSS
                </a>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-orange-300 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.w3schools.com/html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  W3Schools - Tutoriels HTML
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/javascript">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg">
                Continuer vers JavaScript
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
