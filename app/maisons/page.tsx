import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, MapPin, Euro, Ruler, BedDouble, Bath, Car } from "lucide-react"

export default function MaisonsPage() {
  // Données des maisons
  const houses = [
    {
      id: 1,
      title: "Villa de luxe avec piscine",
      location: "Cannes, Côte d'Azur",
      price: 1250000,
      area: 220,
      bedrooms: 4,
      bathrooms: 3,
      garage: true,
      description:
        "Magnifique villa contemporaine avec vue panoramique sur la mer. Située dans un quartier prisé de Cannes, cette propriété d'exception offre des prestations haut de gamme et un jardin paysager avec piscine à débordement.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Appartement de charme au cœur de Paris",
      location: "Marais, Paris",
      price: 850000,
      area: 95,
      bedrooms: 2,
      bathrooms: 1,
      garage: false,
      description:
        "Superbe appartement haussmannien entièrement rénové avec goût. Situé au 3ème étage d'un immeuble avec ascenseur, il offre de beaux volumes, des moulures d'origine et une vue dégagée sur une place arborée.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Maison de campagne avec grand terrain",
      location: "Provence, Sud de la France",
      price: 495000,
      area: 180,
      bedrooms: 3,
      bathrooms: 2,
      garage: true,
      description:
        "Charmante maison provençale en pierre avec un terrain de 5000m². Oliviers centenaires, potager et dépendance aménageable. Idéal pour les amoureux de la nature recherchant calme et authenticité.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Loft industriel rénové",
      location: "Lyon, Confluence",
      price: 620000,
      area: 150,
      bedrooms: 2,
      bathrooms: 2,
      garage: true,
      description:
        "Ancien atelier transformé en loft contemporain. Volumes exceptionnels avec 4m de hauteur sous plafond, grandes baies vitrées et matériaux nobles. Une rénovation de qualité alliant le charme de l'ancien et le confort moderne.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au jeu
            </Button>
          </Link>

          <div className="flex gap-2">
            <Button variant="ghost" className="text-orange-700 hover:bg-orange-100">
              Acheter
            </Button>
            <Button variant="ghost" className="text-orange-700 hover:bg-orange-100">
              Louer
            </Button>
            <Button variant="ghost" className="text-orange-700 hover:bg-orange-100">
              Estimer
            </Button>
            <Button variant="ghost" className="text-orange-700 hover:bg-orange-100">
              Contact
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-800">Trouvez la maison de vos rêves</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Découvrez notre sélection de propriétés d'exception dans les plus belles régions de France.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Localisation</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <input
                    type="text"
                    placeholder="Ville, région..."
                    className="pl-10 w-full border border-orange-200 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget max</label>
                <div className="relative">
                  <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <select className="pl-10 w-full border border-orange-200 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Tous les prix</option>
                    <option>Jusqu'à 300 000 €</option>
                    <option>Jusqu'à 500 000 €</option>
                    <option>Jusqu'à 800 000 €</option>
                    <option>Jusqu'à 1 000 000 €</option>
                    <option>Plus de 1 000 000 €</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type de bien</label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <select className="pl-10 w-full border border-orange-200 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Tous les biens</option>
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Villa</option>
                    <option>Terrain</option>
                    <option>Commerce</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Rechercher</Button>
              </div>
            </div>
          </div>

          {/* Propriétés en vedette */}
          <h2 className="text-3xl font-bold mb-8 text-orange-800">Propriétés en vedette</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {houses.map((house) => (
              <div
                key={house.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image src={house.image || "/placeholder.svg"} alt={house.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-orange-800">{house.title}</h3>
                    <span className="text-xl font-bold text-orange-600">{house.price.toLocaleString()} €</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                    <span className="text-sm">{house.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{house.description}</p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Ruler className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{house.area} m²</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <BedDouble className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{house.bedrooms} ch.</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Bath className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{house.bathrooms} sdb.</span>
                    </div>

                    {house.garage && (
                      <div className="flex items-center text-gray-700">
                        <Car className="h-4 w-4 mr-1 text-orange-500" />
                        <span>Garage</span>
                      </div>
                    )}
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Voir le détail</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bannière */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl p-8 text-white mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Vous souhaitez vendre votre bien ?</h3>
                <p className="max-w-xl">
                  Nos experts immobiliers vous accompagnent dans toutes les étapes de votre projet de vente. Estimation
                  gratuite, conseils personnalisés et stratégie de commercialisation optimale.
                </p>
              </div>

              <Button className="bg-white text-orange-600 hover:bg-orange-100">Demander une estimation</Button>
            </div>
          </div>

          {/* Pourquoi nous choisir */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-orange-800">Pourquoi nous choisir ?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-800">Expertise locale</h3>
                <p className="text-gray-600">
                  Notre équipe connaît parfaitement le marché immobilier local et vous guide vers les meilleures
                  opportunités.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-800">Accompagnement personnalisé</h3>
                <p className="text-gray-600">
                  Un conseiller dédié vous accompagne à chaque étape de votre projet d'achat ou de vente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-800">Réactivité</h3>
                <p className="text-gray-600">
                  Nous vous garantissons une réponse rapide et des visites organisées dans les meilleurs délais.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/" prefetch={false} scroll={false}>
              <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                Retour au jeu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
