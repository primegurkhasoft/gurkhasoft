import type { Metadata } from "next"
import { Clock, Globe, Mail, MapPin, Phone, Server, Code, Search, BarChart, Shield, Cloud, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Contact Us | TechSolutions IT Services",
  description:
    "Get in touch with our team for web hosting, software development, SEO, digital marketing and other IT services.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
            <p className="mt-2 text-muted-foreground">
              Have a question or need assistance? Our team is here to help you with all your IT needs.
            </p>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Our Office</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Prime Gurkha Soft</p>
                    <p className="text-sm text-muted-foreground"></p>
                    <p className="text-sm text-muted-foreground">Aloknagar, Kathmandu 44600, Nepal</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="font-medium">981-0965084</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="font-medium">primegurkhasoft@gmail.com                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <p className="font-medium">www.techsolutions.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="font-medium">Sunday - Friday: 9AM - 6PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Our Services</CardTitle>
                <CardDescription>Comprehensive IT solutions for your business</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Web Hosting</p>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Software Development</p>
                </div>
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">SEO Services</p>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Digital Marketing</p>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Cloud Solutions</p>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Mobile Application</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>{"Fill out the form below and we'll get back to you as soon as possible."}</CardDescription>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/your-formspree-endpoint" method="POST" className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" name="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" name="last-name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" name="company" />
                </div>

                <div className="space-y-2 bg-white">
                  <Label htmlFor="service">{"Service you're interested in"}</Label>
                  <Select name="service">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-sm">
                      <SelectItem value="web-hosting">Web Hosting</SelectItem>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="seo">SEO Services</SelectItem>
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200 hover:shadow-md"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
