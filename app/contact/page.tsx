"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Send, Mail, Phone, MapPin, Check } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // In a real application, you would send this data to your server
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-600 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au jeu
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">Contactez-nous</h1>

          <p className="text-xl text-cyan-100 mb-12">
            Vous avez une question ou un projet en tête ? N'hésitez pas à nous contacter, nous serons ravis d'échanger
            avec vous.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cyan-800/30 p-6 rounded-xl text-center">
              <Mail className="h-10 w-10 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-cyan-100">contact@pixelrunner.com</p>
            </div>

            <div className="bg-cyan-800/30 p-6 rounded-xl text-center">
              <Phone className="h-10 w-10 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-cyan-100">+33 1 23 45 67 89</p>
            </div>

            <div className="bg-cyan-800/30 p-6 rounded-xl text-center">
              <MapPin className="h-10 w-10 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Adresse</h3>
              <p className="text-cyan-100">42 Rue du Pixel, Paris</p>
            </div>
          </div>

          {formSubmitted ? (
            <div className="bg-cyan-800/30 p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Message envoyé !</h2>
              <p className="text-cyan-100 mb-6">
                Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
              </p>
              <Button onClick={() => setFormSubmitted(false)} className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Envoyer un autre message
              </Button>
            </div>
          ) : (
            <div className="bg-cyan-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-cyan-100 mb-2">
                      Nom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-cyan-900/50 border-cyan-700 text-white placeholder:text-cyan-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cyan-100 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-cyan-900/50 border-cyan-700 text-white placeholder:text-cyan-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-cyan-100 mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-cyan-900/50 border-cyan-700 text-white placeholder:text-cyan-400"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-cyan-100 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-cyan-900/50 border-cyan-700 text-white placeholder:text-cyan-400 min-h-[150px]"
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
