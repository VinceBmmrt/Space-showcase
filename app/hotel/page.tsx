"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  ArrowLeft,
  CalendarIcon,
  Check,
  Coffee,
  Dumbbell,
  MapPin,
  PocketIcon as Pool,
  Star,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HotelPage() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 3))
  );
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  // Hotel images
  const hotelImages = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ];

  // Room types
  const roomTypes = [
    {
      id: "standard",
      name: "Chambre Standard",
      description: "Chambre confortable avec vue sur la ville",
      price: 199,
      capacity: "2 adultes",
      size: "28m²",
      bed: "1 lit king-size",
      amenities: [
        "Wi-Fi gratuit",
        "Climatisation",
        "TV à écran plat",
        "Minibar",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "deluxe",
      name: "Suite Deluxe",
      description: "Suite spacieuse avec salon séparé et vue panoramique",
      price: 349,
      capacity: "2 adultes, 2 enfants",
      size: "45m²",
      bed: "1 lit king-size + 1 canapé-lit",
      amenities: [
        "Wi-Fi gratuit",
        "Climatisation",
        "TV à écran plat",
        "Minibar",
        "Baignoire à remous",
        "Terrasse privée",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "presidential",
      name: "Suite Présidentielle",
      description: "Notre suite la plus luxueuse avec service de majordome",
      price: 599,
      capacity: "4 adultes",
      size: "80m²",
      bed: "2 lits king-size",
      amenities: [
        "Wi-Fi gratuit",
        "Climatisation",
        "TV à écran plat",
        "Minibar",
        "Baignoire à remous",
        "Terrasse privée",
        "Service de majordome",
        "Salle à manger privée",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ];

  const handleBookRoom = (roomId: string) => {
    setSelectedRoom(roomId);
    setShowBookingConfirmation(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-900 to-amber-800 text-white ">
      {showBookingConfirmation ? (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-6">
              Réservation confirmée !
            </h2>

            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-amber-200">Hôtel</p>
                  <p className="text-xl font-semibold">Le Grand Palace & Spa</p>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-amber-200">Arrivée</p>
                  <p className="font-medium">
                    {checkIn
                      ? format(checkIn, "PPP", { locale: fr })
                      : "Non spécifiée"}
                  </p>
                </div>
                <div>
                  <p className="text-amber-200">Départ</p>
                  <p className="font-medium">
                    {checkOut
                      ? format(checkOut, "PPP", { locale: fr })
                      : "Non spécifiée"}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-amber-200">Chambre</p>
                <p className="font-medium">
                  {roomTypes.find((room) => room.id === selectedRoom)?.name ||
                    "Suite Deluxe"}
                </p>
              </div>

              <div>
                <p className="text-amber-200">Voyageurs</p>
                <p className="font-medium">
                  {adults} {adults > 1 ? "adultes" : "adulte"}
                  {children > 0 &&
                    `, ${children} ${children > 1 ? "enfants" : "enfant"}`}
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4">Détails du paiement</h3>
              <div className="flex justify-between mb-2">
                <span>Prix de la chambre</span>
                <span>
                  {roomTypes.find((room) => room.id === selectedRoom)?.price ||
                    349}{" "}
                  € x 3 nuits
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes et frais</span>
                <span>105 €</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-white/20">
                <span>Total</span>
                <span>
                  {(roomTypes.find((room) => room.id === selectedRoom)?.price ||
                    349) *
                    3 +
                    105}{" "}
                  €
                </span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-amber-200">
                Un email de confirmation a été envoyé à votre adresse email.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => setShowBookingConfirmation(false)}
                >
                  Retour à l'hôtel
                </Button>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
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
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Hotel Header */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl mb-8">
              <div className="relative h-96">
                <Image
                  src={hotelImages[0] || "/placeholder.svg"}
                  alt="Le Grand Palace & Spa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Le Grand Palace & Spa
                      </h1>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-5 w-5 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-amber-200">Hôtel de luxe</span>
                      </div>
                      <div className="flex items-center text-white">
                        <MapPin className="h-4 w-4 mr-1 text-amber-400" />
                        <span>8 Avenue des Champs-Élysées, Paris, France</span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-amber-600 text-white px-4 py-2 rounded-lg text-xl font-bold">
                        À partir de 199 € / nuit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Gallery */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {hotelImages.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-xl overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Hotel image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Hotel Info */}
              <div className="col-span-2">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    À propos de l'hôtel
                  </h2>
                  <p className="text-amber-100 mb-6">
                    Niché au cœur de Paris, Le Grand Palace & Spa est un havre
                    de paix et de luxe offrant une expérience inoubliable. Notre
                    établissement 5 étoiles combine élégance parisienne et
                    confort moderne pour satisfaire les voyageurs les plus
                    exigeants.
                  </p>
                  <p className="text-amber-100">
                    Profitez de notre spa primé, de notre restaurant
                    gastronomique étoilé au Michelin et de notre service
                    personnalisé. Idéalement situé à quelques pas des
                    Champs-Élysées, vous pourrez explorer facilement les
                    attractions les plus emblématiques de la Ville Lumière.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Services et équipements
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Wifi className="h-5 w-5 mr-2 text-amber-400" />
                      <span>Wi-Fi gratuit</span>
                    </div>
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 mr-2 text-amber-400" />
                      <span>Petit-déjeuner inclus</span>
                    </div>
                    <div className="flex items-center">
                      <Utensils className="h-5 w-5 mr-2 text-amber-400" />
                      <span>Restaurant gastronomique</span>
                    </div>
                    <div className="flex items-center">
                      <Dumbbell className="h-5 w-5 mr-2 text-amber-400" />
                      <span>Centre de fitness</span>
                    </div>
                    <div className="flex items-center">
                      <Pool className="h-5 w-5 mr-2 text-amber-400" />
                      <span>Piscine intérieure</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-5 w-5 mr-2 flex items-center justify-center text-amber-400">
                        🧖
                      </span>
                      <span>Spa et bien-être</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    Chambres disponibles
                  </h2>

                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-amber-600"
                      >
                        Toutes les chambres
                      </TabsTrigger>
                      <TabsTrigger
                        value="standard"
                        className="data-[state=active]:bg-amber-600"
                      >
                        Standard
                      </TabsTrigger>
                      <TabsTrigger
                        value="suites"
                        className="data-[state=active]:bg-amber-600"
                      >
                        Suites
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="mt-0 space-y-6">
                      {roomTypes.map((room) => (
                        <div
                          key={room.id}
                          className="bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="relative h-48 md:h-full">
                              <Image
                                src={room.image || "/placeholder.svg"}
                                alt={room.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="col-span-2 p-6">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold">
                                  {room.name}
                                </h3>
                                <div className="text-2xl font-bold text-amber-400">
                                  {room.price} €
                                </div>
                              </div>
                              <p className="text-amber-200 mb-4">
                                {room.description}
                              </p>

                              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    👥
                                  </span>
                                  <span>{room.capacity}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    📏
                                  </span>
                                  <span>{room.size}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    🛏️
                                  </span>
                                  <span>{room.bed}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    🚿
                                  </span>
                                  <span>Salle de bain privée</span>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {room.amenities
                                  .slice(0, 4)
                                  .map((amenity, index) => (
                                    <span
                                      key={index}
                                      className="bg-amber-900/50 text-amber-200 text-xs px-2 py-1 rounded-full"
                                    >
                                      {amenity}
                                    </span>
                                  ))}
                                {room.amenities.length > 4 && (
                                  <span className="bg-amber-900/50 text-amber-200 text-xs px-2 py-1 rounded-full">
                                    +{room.amenities.length - 4} autres
                                  </span>
                                )}
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-amber-200 text-sm">
                                  <span className="text-green-400">✓</span>{" "}
                                  Annulation gratuite jusqu'à 24h avant
                                  l'arrivée
                                </div>
                                <Button
                                  className="bg-amber-600 hover:bg-amber-700 text-white"
                                  onClick={() => handleBookRoom(room.id)}
                                >
                                  Réserver
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="standard" className="mt-0">
                      <div className="bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={roomTypes[0].image || "/placeholder.svg"}
                              alt={roomTypes[0].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="col-span-2 p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold">
                                {roomTypes[0].name}
                              </h3>
                              <div className="text-2xl font-bold text-amber-400">
                                {roomTypes[0].price} €
                              </div>
                            </div>
                            <p className="text-amber-200 mb-4">
                              {roomTypes[0].description}
                            </p>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                              <div className="flex items-center text-sm">
                                <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                  👥
                                </span>
                                <span>{roomTypes[0].capacity}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                  📏
                                </span>
                                <span>{roomTypes[0].size}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                  🛏️
                                </span>
                                <span>{roomTypes[0].bed}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                  🚿
                                </span>
                                <span>Salle de bain privée</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {roomTypes[0].amenities.map((amenity, index) => (
                                <span
                                  key={index}
                                  className="bg-amber-900/50 text-amber-200 text-xs px-2 py-1 rounded-full"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="text-amber-200 text-sm">
                                <span className="text-green-400">✓</span>{" "}
                                Annulation gratuite jusqu'à 24h avant l'arrivée
                              </div>
                              <Button
                                className="bg-amber-600 hover:bg-amber-700 text-white"
                                onClick={() => handleBookRoom(roomTypes[0].id)}
                              >
                                Réserver
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="suites" className="mt-0 space-y-6">
                      {roomTypes.slice(1).map((room) => (
                        <div
                          key={room.id}
                          className="bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="relative h-48 md:h-full">
                              <Image
                                src={room.image || "/placeholder.svg"}
                                alt={room.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="col-span-2 p-6">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold">
                                  {room.name}
                                </h3>
                                <div className="text-2xl font-bold text-amber-400">
                                  {room.price} €
                                </div>
                              </div>
                              <p className="text-amber-200 mb-4">
                                {room.description}
                              </p>

                              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    👥
                                  </span>
                                  <span>{room.capacity}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    📏
                                  </span>
                                  <span>{room.size}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    🛏️
                                  </span>
                                  <span>{room.bed}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <span className="h-4 w-4 mr-1 flex items-center justify-center text-amber-400">
                                    🚿
                                  </span>
                                  <span>Salle de bain privée</span>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {room.amenities
                                  .slice(0, 4)
                                  .map((amenity, index) => (
                                    <span
                                      key={index}
                                      className="bg-amber-900/50 text-amber-200 text-xs px-2 py-1 rounded-full"
                                    >
                                      {amenity}
                                    </span>
                                  ))}
                                {room.amenities.length > 4 && (
                                  <span className="bg-amber-900/50 text-amber-200 text-xs px-2 py-1 rounded-full">
                                    +{room.amenities.length - 4} autres
                                  </span>
                                )}
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-amber-200 text-sm">
                                  <span className="text-green-400">✓</span>{" "}
                                  Annulation gratuite jusqu'à 24h avant
                                  l'arrivée
                                </div>
                                <Button
                                  className="bg-amber-600 hover:bg-amber-700 text-white"
                                  onClick={() => handleBookRoom(room.id)}
                                >
                                  Réserver
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div className="col-span-1">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg sticky top-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Réserver votre séjour
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-amber-200 mb-1">
                        Date d'arrivée
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-white/10 bg-white/5 hover:bg-white/10 text-white"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-amber-400" />
                            {checkIn ? (
                              format(checkIn, "PPP", { locale: fr })
                            ) : (
                              <span>Choisir une date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-800">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                            className="bg-gray-900 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-200 mb-1">
                        Date de départ
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-white/10 bg-white/5 hover:bg-white/10 text-white"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-amber-400" />
                            {checkOut ? (
                              format(checkOut, "PPP", { locale: fr })
                            ) : (
                              <span>Choisir une date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-800">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                            className="bg-gray-900 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-200 mb-1">
                        Adultes
                      </label>
                      <select
                        className="w-full py-2 bg-white/5 border border-white/10 rounded-md text-white"
                        value={adults}
                        onChange={(e) =>
                          setAdults(Number.parseInt(e.target.value))
                        }
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num} className="bg-gray-900">
                            {num} {num > 1 ? "adultes" : "adulte"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-200 mb-1">
                        Enfants
                      </label>
                      <select
                        className="w-full py-2 bg-white/5 border border-white/10 rounded-md text-white"
                        value={children}
                        onChange={(e) =>
                          setChildren(Number.parseInt(e.target.value))
                        }
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num} className="bg-gray-900">
                            {num} {num > 1 ? "enfants" : "enfant"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold mb-4">Résumé du prix</h3>
                    <div className="flex justify-between mb-2">
                      <span>Chambre Standard</span>
                      <span>199 € x 3 nuits</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Taxes et frais</span>
                      <span>60 €</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-white/20">
                      <span>Total</span>
                      <span>657 €</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-6"
                    onClick={() => setShowBookingConfirmation(true)}
                  >
                    Réserver maintenant
                  </Button>

                  <div className="mt-4 text-center text-amber-200 text-sm">
                    <span className="text-green-400">✓</span> Annulation
                    gratuite jusqu'à 24h avant l'arrivée
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
