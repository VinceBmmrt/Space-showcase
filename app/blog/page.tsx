"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, Calendar, User, MessageCircle, Heart, Bookmark, Share2, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Blog categories
  const categories = [
    { id: "all", name: "Tous les articles" },
    { id: "tech", name: "Technologie" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business" },
    { id: "lifestyle", name: "Lifestyle" },
  ]

  // Featured post
  const featuredPost = {
    id: 1,
    title: "Comment l'IA révolutionne le développement web en 2025",
    excerpt:
      "Découvrez comment l'intelligence artificielle transforme la façon dont nous concevons et développons des sites web modernes.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "tech",
    date: "15 mai 2025",
    author: {
      name: "Sophie Martin",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    readTime: "8 min",
    comments: 24,
    likes: 156,
  }

  // Blog posts
  const posts = [
    {
      id: 2,
      title: "10 tendances de design web à suivre en 2025",
      excerpt: "Les tendances de design qui domineront le web cette année, des interfaces 3D aux designs minimalistes.",
      image: "/placeholder.svg?height=400&width=600",
      category: "design",
      date: "10 mai 2025",
      author: {
        name: "Thomas Dubois",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      readTime: "6 min",
      comments: 18,
      likes: 92,
    },
    {
      id: 3,
      title: "Guide complet du développement mobile cross-platform",
      excerpt:
        "Comparaison des frameworks les plus populaires pour créer des applications mobiles performantes sur iOS et Android.",
      image: "/placeholder.svg?height=400&width=600",
      category: "tech",
      date: "5 mai 2025",
      author: {
        name: "Emma Lefebvre",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      readTime: "12 min",
      comments: 32,
      likes: 128,
    },
    {
      id: 4,
      title: "Comment lancer votre startup tech avec un budget limité",
      excerpt:
        "Stratégies et conseils pour entrepreneurs souhaitant lancer leur startup technologique sans investissement massif.",
      image: "/placeholder.svg?height=400&width=600",
      category: "business",
      date: "1 mai 2025",
      author: {
        name: "Lucas Bernard",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      readTime: "9 min",
      comments: 15,
      likes: 87,
    },
    {
      id: 5,
      title: "Équilibre vie professionnelle et personnelle pour les développeurs",
      excerpt:
        "Conseils pratiques pour maintenir un équilibre sain entre votre carrière de développeur et votre vie personnelle.",
      image: "/placeholder.svg?height=400&width=600",
      category: "lifestyle",
      date: "28 avril 2025",
      author: {
        name: "Chloé Petit",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      readTime: "7 min",
      comments: 29,
      likes: 143,
    },
    {
      id: 6,
      title: "L'avenir du e-commerce: tendances et prédictions",
      excerpt:
        "Analyse des innovations technologiques qui façonneront l'avenir du commerce électronique dans les années à venir.",
      image: "/placeholder.svg?height=400&width=600",
      category: "business",
      date: "25 avril 2025",
      author: {
        name: "Antoine Moreau",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      readTime: "10 min",
      comments: 21,
      likes: 104,
    },
  ]

  // Filter posts by category
  const filteredPosts = activeCategory === "all" ? posts : posts.filter((post) => post.category === activeCategory)

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
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
              TechBlog
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Explorez les dernières tendances et innovations dans le monde de la technologie et du développement web.
            </p>
          </div>

          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-300" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-indigo-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select className="bg-white/5 border border-white/10 rounded-md text-white px-3 py-2" defaultValue="recent">
              <option value="recent" className="bg-indigo-900">
                Plus récents
              </option>
              <option value="popular" className="bg-indigo-900">
                Plus populaires
              </option>
              <option value="trending" className="bg-indigo-900">
                Tendances
              </option>
            </select>
          </div>

          {/* Categories */}
          <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-indigo-600">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Featured post */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-96">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">À la une</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium mr-3">
                      {featuredPost.category === "tech" && "Technologie"}
                      {featuredPost.category === "design" && "Design"}
                      {featuredPost.category === "business" && "Business"}
                      {featuredPost.category === "lifestyle" && "Lifestyle"}
                    </span>
                    <div className="flex items-center text-indigo-200 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center text-indigo-200 text-sm ml-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author.name}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{featuredPost.title}</h2>
                  <p className="text-indigo-100 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Image
                        src={featuredPost.author.avatar || "/placeholder.svg"}
                        alt={featuredPost.author.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{featuredPost.author.name}</p>
                        <p className="text-indigo-300 text-sm">{featuredPost.readTime} de lecture</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-indigo-300">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        <span>{featuredPost.comments}</span>
                      </div>
                      <div className="flex items-center text-indigo-300">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>{featuredPost.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-black/50 border-white/10 text-white hover:bg-white/20"
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-black/50 border-white/10 text-white hover:bg-white/20"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium mr-3">
                      {post.category === "tech" && "Technologie"}
                      {post.category === "design" && "Design"}
                      {post.category === "business" && "Business"}
                      {post.category === "lifestyle" && "Lifestyle"}
                    </span>
                    <div className="flex items-center text-indigo-300 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-indigo-200 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        width={30}
                        height={30}
                        className="rounded-full mr-2"
                      />
                      <span className="text-sm">{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-indigo-300 text-sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center text-indigo-300 text-sm">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-2">Abonnez-vous à notre newsletter</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Recevez nos derniers articles, tutoriels et actualités directement dans votre boîte mail, une fois par
              semaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white/20 border-white/10 text-white placeholder:text-indigo-200/70"
              />
              <Button className="bg-white text-indigo-600 hover:bg-indigo-100">S'abonner</Button>
            </div>
          </div>

          {/* Popular tags */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Tags populaires</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #javascript
              </span>
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #reactjs
              </span>
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #webdesign
              </span>
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #ux
              </span>
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #ai
              </span>
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #startup
              </span>
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #productivity
              </span>
              <span className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                #career
              </span>
            </div>
          </div>

          {/* Load more button */}
          <div className="text-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Charger plus d'articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
