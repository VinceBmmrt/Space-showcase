import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink, Mail } from "lucide-react"

export default function WebPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-800">Développement Web</h1>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Création de sites web modernes, réactifs et performants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🌐</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Site E-commerce</h2>
                <p className="text-gray-600 mb-4">
                  Un site e-commerce complet avec panier, paiement en ligne et gestion des commandes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Stripe</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Démo
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Dashboard Analytics</h2>
                <p className="text-gray-600 mb-4">
                  Un tableau de bord interactif pour visualiser et analyser des données en temps réel.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Vue.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">D3.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Firebase</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Démo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="font-medium">React</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🔄</div>
                <div className="font-medium">Next.js</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-medium">Tailwind CSS</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🔥</div>
                <div className="font-medium">Firebase</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Contactez-moi</h2>
            <p className="text-gray-600 mb-6">
              Vous avez un projet web en tête ? N'hésitez pas à me contacter pour en discuter !
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mx-auto">
              <Mail className="h-4 w-4" />
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
