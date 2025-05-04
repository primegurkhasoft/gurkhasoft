import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      title: "Digtal Marketing",
      image: "/Images/Services/DG.png",
      href: "#",
    },
    {
      title: "Search Engine Optimization",
      image: "/Images/Services/SEO.png",
      href: "#",
    },
    {
      title: "Software Development",
      image: "/Images/Services/SDLC.jpg",
      href: "#",
    },
    {
      title: "Web Development",
      image: "/Images/Services/webDev.jpg",
      href: "#",
    },
    {
      title: "Mobile Application",
      image: "/Images/Services/mobileapp.jpg",
      href: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certified Excellence</h2>
            <p className="max-w-[600px] text-gray-500 md:text-lg">
              From repairs and installations to preventative maintenance, we&apos;ve got you covered. Choose
              reliability, choose TechForge.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href="/services" className="inline-flex items-center text-blue-600 hover:blue-red-700 transition-colors">
              View All Services <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center text-blue-600 hover:blue-red-700 transition-colors">
              Call For Booking <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-lg bg-gray-100 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover brightness-75 transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">{service.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

