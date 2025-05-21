"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Search,
  Bell,
  Settings,
  User,
  BarChart2,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react"

export default function DashboardPage() {
  const [currentPeriod, setCurrentPeriod] = useState("month")

  // Dashboard data
  const dashboardData = {
    stats: [
      {
        title: "Revenus",
        value: "24,532 €",
        change: "+12.5%",
        trend: "up",
        icon: <DollarSign className="h-5 w-5 text-green-500" />,
      },
      {
        title: "Utilisateurs",
        value: "3,642",
        change: "+8.2%",
        trend: "up",
        icon: <Users className="h-5 w-5 text-blue-500" />,
      },
      {
        title: "Commandes",
        value: "1,253",
        change: "+5.3%",
        trend: "up",
        icon: <ShoppingBag className="h-5 w-5 text-purple-500" />,
      },
      {
        title: "Taux de conversion",
        value: "3.2%",
        change: "-0.4%",
        trend: "down",
        icon: <BarChart2 className="h-5 w-5 text-amber-500" />,
      },
    ],
    recentSales: [
      {
        id: 1,
        customer: "Sophie Martin",
        email: "sophie.m@example.com",
        amount: "432.00 €",
        status: "completed",
        date: "Il y a 2 heures",
      },
      {
        id: 2,
        customer: "Thomas Dubois",
        email: "thomas.d@example.com",
        amount: "89.00 €",
        status: "processing",
        date: "Il y a 3 heures",
      },
      {
        id: 3,
        customer: "Emma Lefebvre",
        email: "emma.l@example.com",
        amount: "249.00 €",
        status: "completed",
        date: "Il y a 5 heures",
      },
      {
        id: 4,
        customer: "Lucas Bernard",
        email: "lucas.b@example.com",
        amount: "129.00 €",
        status: "failed",
        date: "Il y a 6 heures",
      },
      {
        id: 5,
        customer: "Chloé Petit",
        email: "chloe.p@example.com",
        amount: "59.00 €",
        status: "completed",
        date: "Il y a 8 heures",
      },
    ],
    topProducts: [
      {
        id: 1,
        name: "Écouteurs sans fil premium",
        sales: 423,
        revenue: "54,987 €",
        trend: "up",
      },
      {
        id: 2,
        name: "Montre connectée Series 7",
        sales: 352,
        revenue: "123,200 €",
        trend: "up",
      },
      {
        id: 3,
        name: "Sneakers urbaines",
        sales: 276,
        revenue: "22,079 €",
        trend: "down",
      },
      {
        id: 4,
        name: "Enceinte Bluetooth portable",
        sales: 189,
        revenue: "17,010 €",
        trend: "up",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" prefetch={false} scroll={false}>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Tableau de bord</h1>
              <p className="text-gray-400">Bienvenue, Admin! Voici un aperçu de votre activité.</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <div className="relative">
                <Bell className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </div>
                <Button variant="outline" className="pl-10 border-white/20 text-white hover:bg-white/10">
                  Notifications
                </Button>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Settings className="mr-2 h-4 w-4" />
                Paramètres
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Period Selector */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 mb-8">
            <Tabs defaultValue="month" className="w-full" onValueChange={setCurrentPeriod}>
              <div className="flex justify-between items-center">
                <TabsList className="grid grid-cols-3 w-auto">
                  <TabsTrigger value="day" className="data-[state=active]:bg-indigo-600">
                    Jour
                  </TabsTrigger>
                  <TabsTrigger value="week" className="data-[state=active]:bg-indigo-600">
                    Semaine
                  </TabsTrigger>
                  <TabsTrigger value="month" className="data-[state=active]:bg-indigo-600">
                    Mois
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Calendar className="mr-2 h-4 w-4" />
                    {currentPeriod === "day" && "Aujourd'hui"}
                    {currentPeriod === "week" && "Cette semaine"}
                    {currentPeriod === "month" && "Juin 2025"}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Exporter
                  </Button>
                </div>
              </div>
            </Tabs>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-800/50 p-3 rounded-lg">{stat.icon}</div>
                  <div className={`flex items-center ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    <span className="text-sm font-medium">{stat.change}</span>
                    {stat.trend === "up" ? (
                      <TrendingUp className="ml-1 h-4 w-4" />
                    ) : (
                      <TrendingDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </div>
                <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Sales Chart */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Aperçu des ventes</h2>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Voir tout
                </Button>
              </div>
              <div className="h-80 w-full flex items-center justify-center">
                <div className="text-center">
                  <BarChart2 className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
                  <p className="text-gray-400">Graphique des ventes (simulé)</p>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Produits populaires</h2>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-4">
                {dashboardData.topProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between py-2 border-b border-gray-800">
                    <div>
                      <h3 className="font-medium mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-400">{product.sales} ventes</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{product.revenue}</p>
                      <div
                        className={`flex items-center justify-end text-sm ${
                          product.trend === "up" ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {product.trend === "up" ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            <span>+4.3%</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            <span>-2.1%</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Ventes récentes</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-400 w-60"
                  />
                </div>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Filtrer
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 font-medium text-gray-400">Client</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-400">Montant</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-400">Statut</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-400">Date</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.recentSales.map((sale) => (
                    <tr key={sale.id} className="border-b border-gray-800 hover:bg-white/5">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium">{sale.customer}</p>
                          <p className="text-sm text-gray-400">{sale.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium">{sale.amount}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            sale.status === "completed"
                              ? "bg-green-900/30 text-green-400"
                              : sale.status === "processing"
                                ? "bg-blue-900/30 text-blue-400"
                                : "bg-red-900/30 text-red-400"
                          }`}
                        >
                          {sale.status === "completed" && "Terminé"}
                          {sale.status === "processing" && "En cours"}
                          {sale.status === "failed" && "Échoué"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-400">{sale.date}</td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          Détails
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-400">Affichage de 1 à 5 sur 253 résultats</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10" disabled>
                  Précédent
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Suivant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
