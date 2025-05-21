import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Users, Star, Plane, Sun, Umbrella, Search } from "lucide-react"

export default function DestinationsPage() {
  // Données des destinations
  const destinations = [
    {
      id: 1,
      name: "Santorini",
      country: "Grèce",
      description:
        "Célèbre pour ses maisons blanches aux toits bleus, ses couchers de soleil spectaculaires et ses plages volcaniques. Santorini est l'île romantique par excellence de la mer Égée.",
      image: "/placeholder.svg?height=300&width=500",
      rating: 4.9,
      reviews: 342,
      price: 899,
      weather: "Ensoleillé, 28°C",
      activities: ["Plages", "Sites historiques", "Gastronomie", "Croisières"],
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonésie",
      description:
        "L'île des dieux vous séduira par ses paysages de rizières en terrasses, ses temples sacrés, ses plages paradisiaques et sa culture unique mêlant traditions et spiritualité.",
      image: "/placeholder.svg?height=300&width=500",
      rating: 4.8,
      reviews: 512,
      price: 1199,
      weather: "Tropical, 30°C",
      activities: ["Temples", "Surf", "Spa", "Randonnée"],
    },
    {
      id: 3,
      name: "Toscane",
      country: "Italie",
      description:
        "Région emblématique d'Italie, la Toscane vous charmera par ses collines verdoyantes, ses villages médiévaux, son patrimoine artistique exceptionnel et sa gastronomie raffinée.",
      image: "/placeholder.svg?height=300&width=500",
      rating: 4.7,
      reviews: 287,
      price: 749,
      weather: "Doux, 24°C",
      activities: ["Vin", "Art", "Histoire", "Cuisine"],
    },
    {
      id: 4,
      name: "Maldives",
      country: "République des Maldives",
      description:
        "Archipel paradisiaque de l'océan Indien, les Maldives offrent des plages de sable blanc, des eaux cristallines et une biodiversité marine exceptionnelle pour des vacances idylliques.",
      image: "/placeholder.svg?height=300&width=500",
      rating: 4.9,
      reviews: 426,
      price: 1599,
      weather: "Ensoleillé, 29°C",
      activities: ["Plongée", "Spa", "Plages", "Sports nautiques"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au jeu
            </Button>
          </Link>

          <div className="flex gap-2">
            <Button variant="ghost" className="text-cyan-700 hover:bg-cyan-100">
              Destinations
            </Button>
            <Button variant="ghost" className="text-cyan-700 hover:bg-cyan-100">
              Séjours
            </Button>
            <Button variant="ghost" className="text-cyan-700 hover:bg-cyan-100">
              Vols
            </Button>
            <Button variant="ghost" className="text-cyan-700 hover:bg-cyan-100">
              Contact
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-cyan-800">Explorez le monde</h1>
            <p className="text-xl text-cyan-700 max-w-3xl mx-auto">
              Découvrez nos destinations de rêve et créez des souvenirs inoubliables pour vos prochaines vacances.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-500" />
                  <input
                    type="text"
                    placeholder="Où souhaitez-vous aller ?"
                    className="pl-10 w-full border border-cyan-200 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-500" />
                  <input
                    type="text"
                    placeholder="Départ - Retour"
                    className="pl-10 w-full border border-cyan-200 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Voyageurs</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-500" />
                  <select className="pl-10 w-full border border-cyan-200 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>2 adultes</option>
                    <option>1 adulte</option>
                    <option>2 adultes, 1 enfant</option>
                    <option>2 adultes, 2 enfants</option>
                    <option>Plus d'options</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Search className="mr-2 h-4 w-4" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>

          {/* Destinations populaires */}
          <h2 className="text-3xl font-bold mb-8 text-cyan-800">Destinations populaires</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 font-medium">{destination.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({destination.reviews} avis)</span>
                    </div>
                    <div className="text-xl font-bold text-cyan-600">À partir de {destination.price} €</div>
                  </div>

                  <p className="text-gray-600 mb-4">{destination.description}</p>

                  <div className="flex items-center text-gray-700 mb-4">
                    <Sun className="h-5 w-5 mr-2 text-yellow-500" />
                    <span>{destination.weather}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Activités populaires :</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities.map((activity, index) => (
                        <span key={index} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Découvrir</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Offres spéciales */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl p-8 text-white mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Offres de dernière minute</h3>
                <p className="max-w-xl">
                  Profitez de réductions exceptionnelles jusqu'à 30% sur une sélection de séjours à réserver dans les 7
                  prochains jours pour un départ imminent.
                </p>
              </div>

              <Button className="bg-white text-cyan-600 hover:bg-cyan-100">Voir les offres</Button>
            </div>
          </div>

          {/* Pourquoi nous choisir */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-cyan-800">Pourquoi voyager avec nous ?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-800">Experts en voyage</h3>
                <p className="text-gray-600">
                  Notre équipe de conseillers passionnés connaît parfaitement chaque destination et vous aide à créer le
                  voyage idéal.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-600"
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
                <h3 className="text-xl font-bold mb-2 text-cyan-800">Garantie qualité</h3>
                <p className="text-gray-600">
                  Nous sélectionnons rigoureusement nos partenaires pour vous garantir des prestations de haute qualité.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Umbrella className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-800">Assistance 24/7</h3>
                <p className="text-gray-600">
                  Notre service client est disponible à tout moment pendant votre voyage pour vous assister en cas de
                  besoin.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-cyan-800 mb-2">Restez informé</h3>
              <p className="text-gray-600">
                Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et conseils de voyage.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow border border-cyan-200 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">S'abonner</Button>
            </div>
          </div>

          <div className="text-center">
            <Link href="/" prefetch={false} scroll={false}>
              <Button variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-100">
                Retour au jeu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
