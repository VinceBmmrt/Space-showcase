import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Palette, Zap, Globe, Gamepad } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-500 to-amber-900 text-white">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">Nos Services</h1>

          <p className="text-xl text-amber-100 mb-12">
            Découvrez notre gamme de services innovants qui transforment l'expérience web en aventure interactive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-amber-800/40 p-8 rounded-xl hover:bg-amber-800/60 transition-colors">
              <Code className="h-12 w-12 text-amber-300 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Développement Web</h2>
              <p className="text-amber-100 mb-4">
                Nous créons des sites web performants, responsifs et accessibles qui se démarquent par leur originalité
                et leur interactivité.
              </p>
              <ul className="list-disc list-inside text-amber-200 space-y-2">
                <li>Sites vitrines interactifs</li>
                <li>Applications web progressives</li>
                <li>E-commerce gamifié</li>
                <li>Intégration API avancée</li>
              </ul>
            </div>

            <div className="bg-amber-800/40 p-8 rounded-xl hover:bg-amber-800/60 transition-colors">
              <Palette className="h-12 w-12 text-amber-300 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Design UX/UI</h2>
              <p className="text-amber-100 mb-4">
                Nous concevons des interfaces utilisateur intuitives et esthétiques qui transforment la navigation en
                expérience mémorable.
              </p>
              <ul className="list-disc list-inside text-amber-200 space-y-2">
                <li>Wireframing et prototypage</li>
                <li>Design d'interface immersif</li>
                <li>Animations et micro-interactions</li>
                <li>Tests utilisateurs</li>
              </ul>
            </div>

            <div className="bg-amber-800/40 p-8 rounded-xl hover:bg-amber-800/60 transition-colors">
              <Gamepad className="h-12 w-12 text-amber-300 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Gamification Web</h2>
              <p className="text-amber-100 mb-4">
                Nous transformons votre site en expérience ludique et engageante qui captive vos visiteurs et les incite
                à revenir.
              </p>
              <ul className="list-disc list-inside text-amber-200 space-y-2">
                <li>Navigation interactive</li>
                <li>Systèmes de récompenses</li>
                <li>Défis et objectifs</li>
                <li>Narration interactive</li>
              </ul>
            </div>

            <div className="bg-amber-800/40 p-8 rounded-xl hover:bg-amber-800/60 transition-colors">
              <Zap className="h-12 w-12 text-amber-300 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Performance Web</h2>
              <p className="text-amber-100 mb-4">
                Nous optimisons votre site pour qu'il soit rapide, fluide et efficace, offrant une expérience
                utilisateur exceptionnelle.
              </p>
              <ul className="list-disc list-inside text-amber-200 space-y-2">
                <li>Optimisation du temps de chargement</li>
                <li>Amélioration du SEO</li>
                <li>Accessibilité WCAG</li>
                <li>Analyse et suivi des performances</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-800/30 p-8 rounded-xl mb-12">
            <div className="flex items-center mb-6">
              <Globe className="h-10 w-10 text-amber-300 mr-4" />
              <h2 className="text-3xl font-bold">Notre approche</h2>
            </div>
            <p className="text-amber-100 mb-4">
              Nous croyons que chaque projet est unique et mérite une attention particulière. Notre processus de
              développement est collaboratif, transparent et centré sur vos objectifs.
            </p>
            <p className="text-amber-100">
              De la conception à la livraison, nous travaillons en étroite collaboration avec vous pour créer une
              solution qui répond parfaitement à vos besoins et dépasse vos attentes.
            </p>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-lg">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
