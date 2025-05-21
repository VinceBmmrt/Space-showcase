"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Bell,
  Bookmark,
  Calendar,
  ExternalLink,
  Heart,
  Home,
  ImageIcon,
  MapPin,
  MessageCircle,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Share2,
  Smile,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState("feed");
  const [postContent, setPostContent] = useState("");

  // User data
  const currentUser = {
    id: 1,
    name: "Vincent Bommert",
    username: "@vincentb",
    avatar: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=400&width=1200",
    bio: "Développeur Full Stack & Designer UI/UX | Passionné de technologie et d'innovation",
    location: "Paris, France",
    website: "vincentbommert.dev",
    joinDate: "Mai 2023",
    following: 284,
    followers: 1253,
  };

  // Posts data
  const posts = [
    {
      id: 1,
      user: {
        id: 2,
        name: "Sophie Martin",
        username: "@sophiem",
        avatar: "/placeholder.svg?height=100&width=100",
        verified: true,
      },
      content:
        "Je viens de terminer mon dernier projet #webdesign pour une startup fintech. Vraiment fier du résultat ! #uidesign #frontend",
      image: "/placeholder.svg?height=400&width=600",
      timestamp: "Il y a 2 heures",
      likes: 42,
      comments: 7,
      shares: 3,
      liked: false,
      bookmarked: false,
    },
    {
      id: 2,
      user: {
        id: 3,
        name: "Tech Insider",
        username: "@techinsider",
        avatar: "/placeholder.svg?height=100&width=100",
        verified: true,
      },
      content:
        "Les 5 frameworks JavaScript les plus prometteurs de 2025 ! Thread 🧵👇 #javascript #webdev #programming",
      image: null,
      timestamp: "Il y a 5 heures",
      likes: 128,
      comments: 32,
      shares: 24,
      liked: true,
      bookmarked: true,
    },
    {
      id: 3,
      user: {
        id: 4,
        name: "Emma Lefebvre",
        username: "@emmal",
        avatar: "/placeholder.svg?height=100&width=100",
        verified: false,
      },
      content:
        "Aujourd'hui, j'ai donné une conférence sur l'accessibilité web à #TechConf2025. Tellement de questions intéressantes ! Voici quelques photos de l'événement.",
      image: "/placeholder.svg?height=400&width=600",
      timestamp: "Il y a 8 heures",
      likes: 87,
      comments: 14,
      shares: 9,
      liked: false,
      bookmarked: false,
    },
    {
      id: 4,
      user: {
        id: 5,
        name: "Lucas Bernard",
        username: "@lucasb",
        avatar: "/placeholder.svg?height=100&width=100",
        verified: false,
      },
      content:
        "Je cherche des recommandations pour un bon cours de React Native. Des suggestions ? #reactnative #mobiledev #learning",
      image: null,
      timestamp: "Il y a 12 heures",
      likes: 19,
      comments: 23,
      shares: 2,
      liked: false,
      bookmarked: false,
    },
  ];

  // Trending topics
  const trendingTopics = [
    { id: 1, name: "#TechConf2025", posts: "12.5K" },
    { id: 2, name: "#ReactJS", posts: "8.3K" },
    { id: 3, name: "#AIinDesign", posts: "6.7K" },
    { id: 4, name: "#WebDevelopment", posts: "5.2K" },
    { id: 5, name: "#UXDesign", posts: "4.9K" },
  ];

  // Suggested users
  const suggestedUsers = [
    {
      id: 6,
      name: "Marie Dupont",
      username: "@maried",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "UX Designer & Illustratrice",
    },
    {
      id: 7,
      name: "Alex Chen",
      username: "@alexc",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Développeur Backend | AWS Certified",
    },
    {
      id: 8,
      name: "Tech News",
      username: "@technews",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Actualités tech et innovations",
    },
  ];

  // Toggle like
  const toggleLike = (postId: number) => {
    // In a real app, this would update the state or call an API
    console.log(`Toggle like for post ${postId}`);
  };

  // Toggle bookmark
  const toggleBookmark = (postId: number) => {
    // In a real app, this would update the state or call an API
    console.log(`Toggle bookmark for post ${postId}`);
  };

  // Submit post
  const submitPost = () => {
    if (postContent.trim()) {
      console.log("Submitting post:", postContent);
      setPostContent("");
      // In a real app, this would add the post to the feed
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
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
          {/* App header */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 mb-8 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                SocialApp
              </h1>
            </div>
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300" />
              <Input
                type="text"
                placeholder="Rechercher..."
                className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-blue-300/70"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-300 hover:text-white hover:bg-white/10"
              >
                <Home className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-300 hover:text-white hover:bg-white/10"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-300 hover:text-white hover:bg-white/10"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-300 hover:text-white hover:bg-white/10"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-300 hover:text-white hover:bg-white/10"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left sidebar - Profile */}
            <div className="md:col-span-1">
              <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg mb-8">
                <div className="relative h-32">
                  <Image
                    src={currentUser.coverImage || "/placeholder.svg"}
                    alt="Cover"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative px-6 pt-16 pb-6">
                  <div className="absolute -top-12 left-6 border-4 border-indigo-900 rounded-full overflow-hidden">
                    <Image
                      src={currentUser.avatar || "/placeholder.svg"}
                      alt={currentUser.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-12">
                    <h2 className="text-xl font-bold">{currentUser.name}</h2>
                    <p className="text-blue-300">{currentUser.username}</p>
                    <p className="text-gray-300 mt-3">{currentUser.bio}</p>
                    <div className="flex flex-wrap gap-y-2 mt-4 text-sm text-gray-300">
                      <div className="flex items-center mr-4">
                        <MapPin className="h-4 w-4 mr-1 text-blue-300" />
                        <span>{currentUser.location}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <ExternalLink className="h-4 w-4 mr-1 text-blue-300" />
                        <a
                          href={`https://${currentUser.website}`}
                          className="text-blue-400 hover:underline"
                        >
                          {currentUser.website}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-blue-300" />
                        <span>Inscrit en {currentUser.joinDate}</span>
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <div className="mr-4">
                        <span className="font-bold">
                          {currentUser.following}
                        </span>{" "}
                        <span className="text-gray-300">abonnements</span>
                      </div>
                      <div>
                        <span className="font-bold">
                          {currentUser.followers}
                        </span>{" "}
                        <span className="text-gray-300">abonnés</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trending topics */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Tendances pour vous</h3>
                <div className="space-y-4">
                  {trendingTopics.map((topic) => (
                    <div
                      key={topic.id}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <p className="font-medium">{topic.name}</p>
                        <p className="text-sm text-gray-400">
                          {topic.posts} posts
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-blue-400 hover:text-blue-300 hover:bg-white/5"
                >
                  Voir plus
                </Button>
              </div>
            </div>

            {/* Middle - Feed */}
            <div className="md:col-span-2">
              <Tabs
                defaultValue="feed"
                className="w-full mb-6"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid grid-cols-3 bg-white/5">
                  <TabsTrigger
                    value="feed"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Pour vous
                  </TabsTrigger>
                  <TabsTrigger
                    value="following"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Abonnements
                  </TabsTrigger>
                  <TabsTrigger
                    value="trending"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Tendances
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Create post */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 mb-6">
                <div className="flex gap-4">
                  {/* <Image
                    src={currentUser.avatar || "/placeholder.svg"}
                    alt={currentUser.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  /> */}
                  <div className="flex-grow">
                    <textarea
                      className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-blue-300/70 resize-none"
                      placeholder="Qu'avez-vous en tête ?"
                      rows={3}
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    ></textarea>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-300 hover:text-white hover:bg-white/10"
                        >
                          <ImageIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-300 hover:text-white hover:bg-white/10"
                        >
                          <Smile className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-300 hover:text-white hover:bg-white/10"
                        >
                          <MapPin className="h-5 w-5" />
                        </Button>
                      </div>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={!postContent.trim()}
                        onClick={submitPost}
                      >
                        Publier
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts feed */}
              <div className="space-y-6">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-12 h-12 relative rounded-full overflow-hidden">
                        <Image
                          src={post.user.avatar || "/placeholder.svg"}
                          alt={post.user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <h3 className="font-bold">{post.user.name}</h3>
                          {post.user.verified && (
                            <span className="ml-1 bg-blue-500 text-white rounded-full p-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                          <span className="text-gray-400 text-sm ml-2">
                            {post.user.username} · {post.timestamp}
                          </span>
                        </div>
                        <p className="mt-2 whitespace-pre-wrap">
                          {post.content}
                        </p>
                        {post.image && (
                          <div className="mt-3 rounded-xl overflow-hidden relative h-64 w-full">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt="Post image"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex justify-between mt-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 ${
                              post.liked ? "text-red-500" : ""
                            }`}
                            onClick={() => toggleLike(post.id)}
                          >
                            <Heart
                              className={`h-4 w-4 mr-1 ${
                                post.liked ? "fill-red-500" : ""
                              }`}
                            />
                            <span>{post.likes}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10"
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            <span>{post.comments}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10"
                          >
                            <Share2 className="h-4 w-4 mr-1" />
                            <span>{post.shares}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 ${
                              post.bookmarked ? "text-blue-500" : ""
                            }`}
                            onClick={() => toggleBookmark(post.id)}
                          >
                            <Bookmark
                              className={`h-4 w-4 ${
                                post.bookmarked ? "fill-blue-500" : ""
                              }`}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
