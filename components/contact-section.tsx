"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance">
              Let&apos;s build something that <span className="text-purple-500">works</span>.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to <span className="text-purple-400">automate</span> your business with{" "}
              <span className="text-purple-400">AI</span>? Get in touch for a free consultation.
            </p>

            <div className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                <Phone className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 8454055228</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="group bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300"
            >
              <a href="tel:+918454055228">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div
            className={`bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
