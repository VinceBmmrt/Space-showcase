import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Mail } from "lucide-react"

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-yellow-300 text-yellow-700 hover:bg-yellow-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-800">Design UI/UX</h1>
            <p className="text-xl text-yellow-700 max-w-3xl mx-auto">
              Création d'interfaces utilisateur intuitives et esthétiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-6xl">🏦</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-800 mb-2">Banking App Redesign</h2>
                <p className="text-gray-600 mb-4">
                  Refonte complète de l'interface utilisateur d'une application bancaire pour améliorer l'expérience
                  client.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Figma</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Prototypage</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Design System</span>
                </div>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Voir le projet
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-6xl">🛒</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-800 mb-2">E-commerce UX</h2>
                <p className="text-gray-600 mb-4">
                  Conception de l'expérience utilisateur pour une plateforme e-commerce, de la découverte à l'achat.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Adobe XD</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">User Testing</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Wireframing</span>
                </div>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Voir le projet
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-medium">Figma</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">✏️</div>
                <div className="font-medium">Adobe XD</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🧩</div>
                <div className="font-medium">Design Systems</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-medium">User Research</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Contactez-moi</h2>
            <p className="text-gray-600 mb-6">
              Besoin d'améliorer l'expérience utilisateur de votre produit ? Parlons-en !
            </p>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white flex items-center gap-2 mx-auto">
              <Mail className="h-4 w-4" />
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
