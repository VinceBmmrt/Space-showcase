import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink, Mail } from "lucide-react"

export default function GamePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-purple-800">Développement de Jeux</h1>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Création de jeux vidéo et d'expériences interactives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-2">Space Explorer</h2>
                <p className="text-gray-600 mb-4">
                  Un jeu d'aventure spatiale où les joueurs explorent des planètes et combattent des extraterrestres.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Unity</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">C#</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">3D</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Jouer
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
                <span className="text-6xl">🧩</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-2">Puzzle Quest</h2>
                <p className="text-gray-600 mb-4">
                  Un jeu de puzzle avec des niveaux progressifs et des mécaniques de jeu innovantes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Godot</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">GDScript</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">2D</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Jouer
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🎮</div>
                <div className="font-medium">Unity</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-medium">Godot</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🧠</div>
                <div className="font-medium">Game Design</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-medium">Pixel Art</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Contactez-moi</h2>
            <p className="text-gray-600 mb-6">
              Vous avez une idée de jeu ou besoin d'un développeur pour votre projet ? Contactez-moi !
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 mx-auto">
              <Mail className="h-4 w-4" />
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
