"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, ShoppingCart, Heart, Star, Filter, X, Plus, Minus } from "lucide-react"

export default function EcommercePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<any[]>([])
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Product categories
  const categories = [
    { id: "all", name: "Tous les produits" },
    { id: "electronics", name: "Électronique" },
    { id: "clothing", name: "Vêtements" },
    { id: "home", name: "Maison & Déco" },
    { id: "books", name: "Livres" },
  ]

  // Products
  const products = [
    {
      id: 1,
      name: "Écouteurs sans fil premium",
      category: "electronics",
      price: 129.99,
      rating: 4.8,
      reviews: 423,
      image: "/placeholder.svg?height=300&width=300",
      description: "Écouteurs sans fil avec réduction de bruit active et autonomie de 30 heures.",
      inStock: true,
    },
    {
      id: 2,
      name: "Montre connectée Series 7",
      category: "electronics",
      price: 349.99,
      rating: 4.9,
      reviews: 1205,
      image: "/placeholder.svg?height=300&width=300",
      description: "Suivez votre activité physique, votre santé et restez connecté avec cette montre intelligente.",
      inStock: true,
    },
    {
      id: 3,
      name: "Veste en jean premium",
      category: "clothing",
      price: 89.99,
      rating: 4.5,
      reviews: 187,
      image: "/placeholder.svg?height=300&width=300",
      description: "Veste en jean de qualité supérieure, coupe ajustée et confortable pour toutes les saisons.",
      inStock: true,
    },
    {
      id: 4,
      name: "Lampe de bureau LED",
      category: "home",
      price: 49.99,
      rating: 4.7,
      reviews: 302,
      image: "/placeholder.svg?height=300&width=300",
      description: "Lampe de bureau moderne avec réglage de luminosité et de température de couleur.",
      inStock: false,
    },
    {
      id: 5,
      name: "Bestseller: L'Art de la Guerre",
      category: "books",
      price: 19.99,
      rating: 4.9,
      reviews: 2134,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Le classique intemporel sur la stratégie militaire, applicable dans de nombreux domaines de la vie.",
      inStock: true,
    },
    {
      id: 6,
      name: "Sneakers urbaines",
      category: "clothing",
      price: 79.99,
      rating: 4.6,
      reviews: 521,
      image: "/placeholder.svg?height=300&width=300",
      description: "Chaussures de sport tendance, confortables et durables pour un usage quotidien.",
      inStock: true,
    },
    {
      id: 7,
      name: "Enceinte Bluetooth portable",
      category: "electronics",
      price: 89.99,
      rating: 4.7,
      reviews: 843,
      image: "/placeholder.svg?height=300&width=300",
      description: "Enceinte portable résistante à l'eau avec un son puissant et une autonomie de 20 heures.",
      inStock: true,
    },
    {
      id: 8,
      name: "Ensemble de décoration murale",
      category: "home",
      price: 59.99,
      rating: 4.4,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      description: "Set de 3 cadres décoratifs modernes pour embellir votre intérieur.",
      inStock: true,
    },
  ]

  // Filtered products
  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  // Add to cart
  const addToCart = (product: any) => {
    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }

    setShowCart(true)
  }

  // Update cart quantity
  const updateCartQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
        }
        return item
      }),
    )
  }

  // Remove from cart
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="relative border-white/20 text-white hover:bg-white/10"
              onClick={() => setShowCart(!showCart)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
            <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              MegaShop
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre sélection de produits de qualité à prix imbattables.
            </p>
          </div>

          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher un produit..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Filter className="mr-2 h-4 w-4" />
                Filtres
              </Button>
              <select className="bg-white/5 border border-white/10 rounded-md text-white px-3" value="newest">
                <option value="newest" className="bg-gray-900">
                  Plus récents
                </option>
                <option value="price-asc" className="bg-gray-900">
                  Prix croissant
                </option>
                <option value="price-desc" className="bg-gray-900">
                  Prix décroissant
                </option>
                <option value="popular" className="bg-gray-900">
                  Popularité
                </option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-purple-600">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-black/50 border-white/10 text-white hover:bg-white/20"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Rupture de stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">{product.price.toFixed(2)} €</span>
                    <Button
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-2">Inscrivez-vous à notre newsletter</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Recevez nos dernières offres, nouveautés et promotions exclusives directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white/20 border-white/10 text-white placeholder:text-gray-300/70"
              />
              <Button className="bg-white text-purple-900 hover:bg-gray-100">S'inscrire</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)}></div>
          <div className="relative w-full max-w-md bg-gray-900 shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Votre panier</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowCart(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Votre panier est vide</h3>
                <p className="text-gray-400 mb-6">Ajoutez des produits à votre panier pour commencer vos achats.</p>
                <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setShowCart(false)}>
                  Continuer mes achats
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 py-4 border-b border-gray-800">
                      <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-400">{item.price.toFixed(2)} €</span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7 rounded-full border-gray-700"
                              onClick={() => updateCartQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7 rounded-full border-gray-700"
                              onClick={() => updateCartQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-gray-400 hover:text-white"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Sous-total</span>
                    <span>{cartTotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-700">
                    <span>Total</span>
                    <span>{cartTotal.toFixed(2)} €</span>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg">Passer à la caisse</Button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
