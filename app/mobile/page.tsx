import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink, Mail } from "lucide-react"

export default function MobilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-green-800">Développement Mobile</h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Applications mobiles natives et cross-platform pour iOS et Android.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-6xl">🥗</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">Healthy Recipes</h2>
                <p className="text-gray-600 mb-4">
                  Une application de recettes saines avec planification de repas et liste de courses.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">React Native</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Redux</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Firebase</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Télécharger
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-6xl">🏃</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">Fitness Tracker</h2>
                <p className="text-gray-600 mb-4">
                  Une application de suivi d'activité physique avec statistiques et objectifs personnalisés.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Flutter</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Dart</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">HealthKit</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Télécharger
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-medium">React Native</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">💙</div>
                <div className="font-medium">Flutter</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🍎</div>
                <div className="font-medium">iOS (Swift)</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-medium">Android (Kotlin)</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Contactez-moi</h2>
            <p className="text-gray-600 mb-6">
              Vous avez une idée d'application mobile ? Discutons de comment la concrétiser !
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 mx-auto">
              <Mail className="h-4 w-4" />
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
