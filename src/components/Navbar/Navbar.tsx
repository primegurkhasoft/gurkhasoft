"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search } from "lucide-react"

import { Button } from "@/utils/button"

const navItems = {
  Platform: {
    DEVELOP: [
      { title: "Edge Functions", href: "#" },
      { title: "Forms", href: "#" },
      { title: "Identity", href: "#" },
      { title: "Edge Middleware", href: "#" },
    ],
    DEPLOY: [
      { title: "CI/CD Pipeline", href: "#" },
      { title: "Edge Network", href: "#" },
      { title: "Split Testing", href: "#" },
      { title: "Monitoring", href: "#" },
    ],
  },
  Solutions: {
    "WHY US?": [
      { title: "Resources & Guides", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Security", href: "#" },
    ],
    "USE CASES": [
      { title: "Company Websites", href: "#" },
      { title: "E-commerce", href: "#" },
      { title: "Web Apps", href: "#" },
      { title: "Large Sites", href: "#" },
    ],
  },
  Integrations: {
    POPULAR: [
      { title: "GitHub", href: "#" },
      { title: "GitLab", href: "#" },
      { title: "Bitbucket", href: "#" },
    ],
    CATEGORIES: [
      { title: "CMS", href: "#" },
      { title: "Ecommerce", href: "#" },
      { title: "Frameworks", href: "#" },
    ],
  },
  Docs: {
    LEARN: [
      { title: "Getting Started", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "API Reference", href: "#" },
    ],
    RESOURCES: [
      { title: "Community", href: "#" },
      { title: "Support", href: "#" },
      { title: "Status", href: "#" },
    ],
  },
  Pricing: {
    PLANS: [
      { title: "Free", href: "#" },
      { title: "Pro", href: "#" },
      { title: "Business", href: "#" },
      { title: "Enterprise", href: "#" },
    ],
    COMPARE: [
      { title: "Features", href: "#" },
      { title: "FAQ", href: "#" },
    ],
  },
}

export function Navbar() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <nav className="hidden md:flex items-center ml-8 space-x-4">
            {Object.entries(navItems).map(([category, sections]) => (
              <div key={category} className="relative">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setOpenDropdown(category)}
                  onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                >
                  {category}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {openDropdown === category && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[500px] rounded-lg border bg-white shadow-lg"
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-6 p-6">
                        {Object.entries(sections).map(([section, items]) => (
                          <div key={section}>
                            <h3 className="font-semibold text-gray-400 mb-3 text-sm">{section}</h3>
                            <ul className="space-y-2">
                              {items.map((item) => (
                                <motion.li key={item.title} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                                  >
                                    {item.title}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Link href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
            Log in
          </Link>
          <Button className="hidden md:flex">Sign up</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex-1 p-4">
                {Object.entries(navItems).map(([category, sections]) => (
                  <div key={category} className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">{category}</h2>
                    {Object.entries(sections).map(([section, items]) => (
                      <div key={section} className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">{section}</h3>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-600 hover:text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </nav>
              <div className="p-4 border-t">
                <Button className="w-full mb-2" onClick={() => setMobileMenuOpen(false)}>
                  Sign up
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

