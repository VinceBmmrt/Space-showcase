"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import {
  ArrowLeft,
  Search,
  CalendarIcon,
  MapPin,
  Users,
  Plane,
  Hotel,
  Car,
  Ship,
  CreditCard,
  Check,
} from "lucide-react"

export default function TravelPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [returnDate, setReturnDate] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() + 7)))
  const [searchQuery, setSearchQuery] = useState("")
  const [passengers, setPassengers] = useState(2)
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false)

  // Popular destinations
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image: "/placeholder.svg?height=300&width=500",
      price: 299,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonésie",
      image: "/placeholder.svg?height=300&width=500",
      price: 899,
      rating: 4.9,
    },
    {
      id: 3,
      name: "New York",
      country: "États-Unis",
      image: "/placeholder.svg?height=300&width=500",
      price: 599,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Tokyo",
      country: "Japon",
      image: "/placeholder.svg?height=300&width=500",
      price: 799,
      rating: 4.9,
    },
  ]

  // Special offers
  const offers = [
    {
      id: 1,
      title: "Escapade à Santorin",
      description: "Vol + Hôtel 5 nuits",
      price: 699,
      discount: 20,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Safari au Kenya",
      description: "Circuit tout inclus 8 jours",
      price: 1299,
      discount: 15,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Croisière Caraïbes",
      description: "7 nuits tout inclus",
      price: 899,
      discount: 25,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const handleSearch = () => {
    console.log("Recherche:", { searchQuery, date, returnDate, passengers })
    // Simulate search
    setShowBookingConfirmation(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {showBookingConfirmation ? (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-6">Réservation confirmée !</h2>

            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-300">Destination</p>
                  <p className="text-xl font-semibold">{searchQuery || "Paris, France"}</p>
                </div>
                <Plane className="h-8 w-8 text-blue-400" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-300">Date de départ</p>
                  <p className="font-medium">{date ? format(date, "PPP", { locale: fr }) : "Non spécifiée"}</p>
                </div>
                <div>
                  <p className="text-gray-300">Date de retour</p>
                  <p className="font-medium">
                    {returnDate ? format(returnDate, "PPP", { locale: fr }) : "Non spécifiée"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-300">Voyageurs</p>
                <p className="font-medium">
                  {passengers} {passengers > 1 ? "personnes" : "personne"}
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4">Détails du paiement</h3>
              <div className="flex justify-between mb-2">
                <span>Prix du voyage</span>
                <span>899 €</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes et frais</span>
                <span>120 €</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-white/20">
                <span>Total</span>
                <span>1019 €</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-300">Un email de confirmation a été envoyé à votre adresse email.</p>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => setShowBookingConfirmation(false)}
                >
                  Retour à la recherche
                </Button>
                <Link href="/">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour au portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <Link href="/" prefetch={false} scroll={false}>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Voyagez vers l'extraordinaire
              </h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Découvrez des destinations de rêve et réservez votre prochain voyage en quelques clics.
              </p>
            </div>

            {/* Search form */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl mb-12">
              <Tabs defaultValue="flights" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="flights" className="data-[state=active]:bg-blue-600">
                    <Plane className="mr-2 h-4 w-4" />
                    Vols
                  </TabsTrigger>
                  <TabsTrigger value="hotels" className="data-[state=active]:bg-blue-600">
                    <Hotel className="mr-2 h-4 w-4" />
                    Hôtels
                  </TabsTrigger>
                  <TabsTrigger value="cars" className="data-[state=active]:bg-blue-600">
                    <Car className="mr-2 h-4 w-4" />
                    Voitures
                  </TabsTrigger>
                  <TabsTrigger value="cruises" className="data-[state=active]:bg-blue-600">
                    <Ship className="mr-2 h-4 w-4" />
                    Croisières
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="flights" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium text-blue-200 mb-1">Destination</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
                        <Input
                          type="text"
                          placeholder="Où souhaitez-vous aller ?"
                          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-blue-200/50"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-1">Date de départ</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-white/10 bg-white/5 hover:bg-white/10 text-white"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-blue-400" />
                            {date ? format(date, "PPP", { locale: fr }) : <span>Choisir une date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-800">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="bg-gray-900 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-200 mb-1">Date de retour</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-white/10 bg-white/5 hover:bg-white/10 text-white"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-blue-400" />
                            {returnDate ? format(returnDate, "PPP", { locale: fr }) : <span>Choisir une date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-800">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                            className="bg-gray-900 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium text-blue-200 mb-1">Voyageurs</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
                        <select
                          className="w-full pl-10 py-2 bg-white/5 border border-white/10 rounded-md text-white"
                          value={passengers}
                          onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num} className="bg-gray-900">
                              {num} {num > 1 ? "voyageurs" : "voyageur"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 flex items-end">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6"
                        onClick={handleSearch}
                      >
                        <Search className="mr-2 h-5 w-5" />
                        Rechercher
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hotels" className="mt-0">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">Recherche d'hôtels</h3>
                    <p className="text-blue-200">Trouvez l'hébergement parfait pour votre séjour.</p>
                  </div>
                </TabsContent>

                <TabsContent value="cars" className="mt-0">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">Location de voitures</h3>
                    <p className="text-blue-200">Explorez votre destination en toute liberté.</p>
                  </div>
                </TabsContent>

                <TabsContent value="cruises" className="mt-0">
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">Croisières</h3>
                    <p className="text-blue-200">Naviguez vers des horizons paradisiaques.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Popular destinations */}
            <h2 className="text-3xl font-bold mb-8 text-white">Destinations populaires</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative h-48">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200">{destination.country}</span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                          {destination.rating} ★
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-300">À partir de</span>
                      <span className="text-xl font-bold text-white">{destination.price} €</span>
                    </div>
                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={handleSearch}
                    >
                      Réserver
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special offers */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Offres spéciales</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative group"
                  >
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold z-10">
                      -{offer.discount}%
                    </div>
                    <div className="relative h-40">
                      <Image
                        src={offer.image || "/placeholder.svg"}
                        alt={offer.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{offer.title}</h3>
                      <p className="text-blue-200 text-sm mb-4">{offer.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-400 line-through text-sm">
                            {Math.round(offer.price / (1 - offer.discount / 100))} €
                          </span>
                          <span className="text-xl font-bold text-white ml-2">{offer.price} €</span>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={handleSearch}
                        >
                          Réserver
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-2">Recevez nos meilleures offres</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter et recevez des offres exclusives, des conseils de voyage et des
                inspirations pour vos prochaines aventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  className="bg-white/20 border-white/10 text-white placeholder:text-blue-200/70"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50">S'inscrire</Button>
              </div>
            </div>

            {/* Payment methods */}
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold mb-4">Moyens de paiement acceptés</h3>
              <div className="flex justify-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <CreditCard className="h-6 w-6 text-blue-300" />
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-blue-300 font-bold">PayPal</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-blue-300 font-bold">Visa</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-blue-300 font-bold">Mastercard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
