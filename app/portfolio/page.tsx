"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  // Portfolio data
  const portfolioData = {
    personal: {
      name: "Vincent Bommert",
      title: "Développeur Full Stack & Designer UI/UX",
      bio: "Passionné par la création d'expériences web innovantes et intuitives. Spécialisé dans le développement React, Next.js et les technologies modernes du web.",
      location: "Paris, France",
      email: "vincentbmmrtpro@gmail.com",
      avatar: "/placeholder.svg?height=400&width=400",
      social: {
        github: "https://github.com/vincentbommert",
        linkedin: "https://linkedin.com/in/vincentbommert",
        twitter: "https://twitter.com/vincentbommert",
      },
    },
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        description:
          "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes. Développée avec Next.js, Tailwind CSS et Stripe.",
        image: "/placeholder.svg?height=300&width=600",
        tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "MongoDB"],
        link: "https://ecommerce-project.com",
        github: "https://github.com/vincentbommert/ecommerce",
      },
      {
        id: 2,
        title: "Dashboard Analytics",
        description:
          "Tableau de bord d'analyse de données avec visualisations interactives et rapports personnalisables. Utilise D3.js et React pour des graphiques dynamiques.",
        image: "/placeholder.svg?height=300&width=600",
        tags: ["React", "D3.js", "TypeScript", "Firebase", "Material UI"],
        link: "https://dashboard-analytics.com",
        github: "https://github.com/vincentbommert/dashboard",
      },
      {
        id: 3,
        title: "Social Media App",
        description:
          "Application de réseau social avec fonctionnalités de messagerie, profils utilisateurs et fil d'actualité. Construite avec React Native pour iOS et Android.",
        image:
          "/placeholder.svg?height=300&  Construite avec React Native pour iOS et Android.",
        tags: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
        link: "https://social-media-app.com",
        github: "https://github.com/vincentbommert/social-app",
      },
      {
        id: 4,
        title: "Portfolio Interactif",
        description:
          "Portfolio interactif avec animations et navigation fluide. Développé avec Three.js et GSAP pour des effets visuels impressionnants.",
        image: "/placeholder.svg?height=300&width=600",
        tags: ["Three.js", "GSAP", "JavaScript", "HTML5", "CSS3"],
        link: "https://portfolio-interactif.com",
        github: "https://github.com/vincentbommert/portfolio",
      },
    ],
    skills: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "Vue.js",
          "TypeScript",
          "Tailwind CSS",
          "SASS",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Java", "REST API"],
      },
      {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      },
      {
        category: "Design",
        items: ["Figma", "Adobe XD", "UI/UX Design"],
      },
      {
        category: "DevOps",
        items: ["AWS", "CI/CD", "Git", "GitHub Actions", "Vercel"],
      },
    ],
    experience: [
      {
        company: "Tech Innovations",
        position: "Frontend Developer",
        period: "2022 - Présent",
        description:
          "Développement d'applications web complexes avec React et Next.js. Mise en place d'architectures frontend scalables et optimisation des performances.",
      },
      {
        company: "Digital Solutions",
        position: "Full Stack Developer",
        period: "2019 - 2022",
        description:
          "Création d'applications web complètes, du backend au frontend. Utilisation de Node.js, Express, MongoDB et React pour développer des solutions sur mesure.",
      },
      {
        company: "Creative Agency",
        position: "UI/UX Designer & Developer",
        period: "2017 - 2019",
        description:
          "Conception et développement d'interfaces utilisateur pour des clients variés. Création de maquettes, prototypes et implémentation en HTML, CSS et JavaScript.",
      },
    ],
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", {
      contactName,
      contactEmail,
      contactMessage,
    });
    // Reset form
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    // In a real app, this would send the message to a backend
    alert("Message envoyé avec succès!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
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
          {/* Hero section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30">
                <Image
                  src={portfolioData.personal.avatar || "/placeholder.svg"}
                  alt={portfolioData.personal.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {portfolioData.personal.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 mb-4">
                {portfolioData.personal.title}
              </h2>
              <p className="text-gray-300 mb-6">{portfolioData.personal.bio}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                  {portfolioData.personal.location}
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-2 text-blue-400" />
                  {portfolioData.personal.email}
                </div>
              </div>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={portfolioData.personal.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue="projects"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-4 mb-8 bg-gray-800/50">
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-blue-600"
              >
                Projets
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-blue-600"
              >
                Compétences
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-blue-600"
              >
                Expérience
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-blue-600"
              >
                Contact
              </TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-gray-800/50 border-gray-700 overflow-hidden"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-blue-900/50 text-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white flex items-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.skills.map((skillGroup, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-300">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className="bg-blue-900/50 text-blue-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <div className="space-y-8">
                {portfolioData.experience.map((exp, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-blue-300">
                            {exp.position}
                          </CardTitle>
                          <CardDescription className="text-gray-300">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-blue-500 text-blue-300"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-300">
                    Contactez-moi
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Envoyez-moi un message et je vous répondrai dès que
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Nom
                      </label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Votre message..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white min-h-[150px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
