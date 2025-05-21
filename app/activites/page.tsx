import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Users, Star, Clock, Search } from "lucide-react"

export default function ActivitesPage() {
  // Données des activités
  const activities = [
    {
      id: 1,
      title: "Excursion en bateau aux Calanques",
      location: "Marseille, France",
      price: 89,
      duration: "4 heures",
      rating: 4.8,
      reviews: 124,
      maxParticipants: 12,
      description:
        "Découvrez les magnifiques Calanques de Marseille lors d'une excursion en bateau. Baignade dans les eaux turquoise, exploration des criques secrètes et dégustation de spécialités locales à bord.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Nautique", "Nature", "Famille"],
    },
    {
      id: 2,
      title: "Cours de cuisine provençale",
      location: "Aix-en-Provence, France",
      price: 75,
      duration: "3 heures",
      rating: 4.9,
      reviews: 87,
      maxParticipants: 8,
      description:
        "Apprenez à cuisiner les spécialités provençales avec un chef local. Au programme : sélection des produits frais au marché, préparation de plats traditionnels et dégustation conviviale.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Gastronomie", "Culture", "Intérieur"],
    },
    {
      id: 3,
      title: "Randonnée dans le Verdon",
      location: "Gorges du Verdon, France",
      price: 45,
      duration: "Journée",
      rating: 4.7,
      reviews: 156,
      maxParticipants: 10,
      description:
        "Partez à la découverte des spectaculaires Gorges du Verdon lors d'une randonnée guidée. Panoramas à couper le souffle, baignade dans les eaux émeraude et observation de la faune locale.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Aventure", "Nature", "Sport"],
    },
    {
      id: 4,
      title: "Dégustation de vins en Bourgogne",
      location: "Beaune, France",
      price: 120,
      duration: "5 heures",
      rating: 4.9,
      reviews: 203,
      maxParticipants: 8,
      description:
        "Immersion dans l'univers des grands vins de Bourgogne. Visite de domaines prestigieux, dégustation commentée par un sommelier expert et découverte des secrets de vinification.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Gastronomie", "Culture", "Adultes"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au jeu
            </Button>
          </Link>

          <div className="flex gap-2">
            <Button variant="ghost" className="text-amber-700 hover:bg-amber-100">
              Activités
            </Button>
            <Button variant="ghost" className="text-amber-700 hover:bg-amber-100">
              Destinations
            </Button>
            <Button variant="ghost" className="text-amber-700 hover:bg-amber-100">
              Offres
            </Button>
            <Button variant="ghost" className="text-amber-700 hover:bg-amber-100">
              Contact
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-amber-800">Vivez des expériences inoubliables</h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Découvrez les meilleures activités et excursions pour rendre vos vacances exceptionnelles.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                  <input
                    type="text"
                    placeholder="Où allez-vous ?"
                    className="pl-10 w-full border border-amber-200 rounded-lg p-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                  <input
                    type="date"
                    className="pl-10 w-full border border-amber-200 rounded-lg p-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Participants</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                  <select className="pl-10 w-full border border-amber-200 rounded-lg p-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>1 personne</option>
                    <option>2 personnes</option>
                    <option>3 personnes</option>
                    <option>4 personnes</option>
                    <option>5+ personnes</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Search className="mr-2 h-4 w-4" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>

          {/* Catégories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-amber-800">Aventure</h3>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-amber-800">Culture</h3>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-amber-800">Gastronomie</h3>
            </div>

            <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-amber-800">Bien-être</h3>
            </div>
          </div>

          {/* Activités en vedette */}
          <h2 className="text-3xl font-bold mb-8 text-amber-800">Activités en vedette</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-amber-600">
                    {activity.price} € <span className="text-sm font-normal text-gray-600">/ pers.</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-amber-800">{activity.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                      <span className="ml-1 font-medium">{activity.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({activity.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1 text-amber-500" />
                    <span className="text-sm">{activity.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-4 w-4 mr-1 text-amber-500" />
                      <span>{activity.duration}</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Users className="h-4 w-4 mr-1 text-amber-500" />
                      <span>Max. {activity.maxParticipants} pers.</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.tags.map((tag, index) => (
                      <span key={index} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Réserver maintenant</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bannière */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-400 rounded-xl p-8 text-white mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Offre spéciale été</h3>
                <p className="max-w-xl">
                  Profitez de 15% de réduction sur toutes nos activités nautiques réservées avant le 30 juin. Utilisez
                  le code promo SUMMER15 lors de votre réservation.
                </p>
              </div>

              <Button className="bg-white text-amber-600 hover:bg-amber-100">En profiter maintenant</Button>
            </div>
          </div>

          {/* Témoignages */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-amber-800">Ce que disent nos clients</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Une expérience incroyable ! Le guide était passionné et connaissait parfaitement la région. Je
                  recommande vivement cette excursion."
                </p>
                <div className="font-semibold text-amber-800">Sophie L.</div>
                <div className="text-sm text-gray-500">Excursion en bateau aux Calanques</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Le cours de cuisine était fantastique ! J'ai appris des recettes authentiques que je pourrai refaire
                  chez moi. Le chef était très pédagogue."
                </p>
                <div className="font-semibold text-amber-800">Thomas M.</div>
                <div className="text-sm text-gray-500">Cours de cuisine provençale</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                  <Star className="h-6 w-6 text-gray-300" />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Randonnée magnifique avec des paysages à couper le souffle. Le guide était très attentionné et nous a
                  fait découvrir des endroits secrets."
                </p>
                <div className="font-semibold text-amber-800">Julie et Marc D.</div>
                <div className="text-sm text-gray-500">Randonnée dans le Verdon</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/" prefetch={false} scroll={false}>
              <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                Retour au jeu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
