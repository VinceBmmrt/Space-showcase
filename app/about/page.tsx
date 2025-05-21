import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Award, Clock, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            À propos de nous
          </h1>

          <p className="text-xl text-purple-200 mb-12">
            Bienvenue dans notre univers interactif où le web et le jeu se rencontrent pour créer une expérience unique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-purple-900/30 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Notre histoire</h2>
              <p className="text-purple-200 mb-4">
                Fondé en 2025, notre studio a toujours eu pour mission de repousser les limites de l'interaction web.
                Nous croyons que la navigation sur internet peut être ludique, immersive et mémorable.
              </p>
              <p className="text-purple-200">
                Notre équipe de développeurs passionnés travaille chaque jour pour créer des expériences qui
                transforment la façon dont vous interagissez avec le contenu en ligne.
              </p>
            </div>

            <div className="bg-purple-900/30 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Notre vision</h2>
              <p className="text-purple-200 mb-4">
                Nous imaginons un web où les frontières entre jeu et navigation s'estompent, où chaque clic est une
                aventure et chaque page une découverte.
              </p>
              <p className="text-purple-200">
                Notre objectif est de créer des expériences web qui engagent, divertissent et inspirent, tout en restant
                accessibles et intuitives pour tous les utilisateurs.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Nos valeurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-purple-900/20 p-6 rounded-xl text-center">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-purple-200">Ensemble, nous créons des expériences extraordinaires</p>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-xl text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-purple-200">Nous visons toujours la plus haute qualité</p>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-xl text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-purple-200">Nous repoussons constamment les limites du possible</p>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-xl text-center">
              <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p className="text-purple-200">Nous aimons ce que nous faisons, et ça se voit</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
