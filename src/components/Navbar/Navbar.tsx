"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search, ChevronRight } from "lucide-react"

import Logo from "@/utils/logo"
import { Button } from "@/utils/button"

// Define the type for a single navigation item
type NavItem = {
  href?: string // Optional href for non-dropdown items
  isDropdown?: boolean // Optional flag for dropdown items
  sections?: {
    [key: string]: Array<{ title: string; href: string }> // Sections for dropdown items
  }
}

// Define the type for the navItems object
type NavItems = {
  [key: string]: NavItem
}

// Define the navItems object with proper typing
const navItems: NavItems = {
  Home: { href: "/" },
  Services: {
    isDropdown: true,
    sections: {
      DEVELOP: [
        { title: "Digital Marketing", href: "/services#digital-marketing" },
        { title: "SEO", href: "/services#seo" },
        { title: "Website Development", href: "/services#website-development" },
        { title: "Software Development", href: "/services#software-development" },
        { title: "QA and Testing", href: "/services#qa-testing" },
        { title: "E-commerce", href: "/services#ecommerce" },
        { title: "AI", href: "/services#ai" },
      ],
      DEPLOY: [
        { title: "Promotion Adds", href: "/services" },
        { title: "Website Ranking", href: "/services" },
        { title: "Prime Gorkha", href: "/services" },
        { title: "Split Testing", href: "/services" },
        { title: "Prime Gorkha E-commerce", href: "/services" },
      ],
    },
  },
  Solutions: {
    isDropdown: true,
    sections: {
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
  },
  // Projects: { href: "/project" },
  FAQ: { href: "/faq" },
  Career: { href: "/career" },
}

export function Navbar() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [mobileExpandedItems, setMobileExpandedItems] = React.useState<string[]>([])
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // Make navbar transparent after scrolling 50px
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    // Focus the search input when it opens
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // Handle clicking outside to close search
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchOpen && searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        // Check if the click was on the search button
        const target = event.target as HTMLElement
        if (!target.closest('[data-search-button="true"]')) {
          setSearchOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchOpen])

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const toggleMobileExpanded = (category: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category],
    )
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchOpen(false)
  }

  return (
    <>
      {/* Fixed navbar that's always visible */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-3 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <Logo />
            <nav className="hidden md:flex items-center ml-8 space-x-4">
              {Object.entries(navItems).map(([category, content]) => (
                <div key={category} className="relative">
                  {content.isDropdown ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                        onMouseEnter={() => setOpenDropdown(category)}
                        onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                      >
                        {category}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === category && content.sections && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-[500px] rounded-lg border bg-white shadow-lg"
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <div className="grid grid-cols-2 gap-6 p-6">
                              {Object.entries(content.sections).map(([section, items]) => (
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
                    </>
                  ) : (
                    <Link href={content.href || "#"} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      {category}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Button and Input */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="md:flex"
                onClick={() => setSearchOpen(!searchOpen)}
                data-search-button="true"
              >
                <Search className="h-5 w-5" />
              </Button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "300px" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 z-50"
                  >
                    <form onSubmit={handleSearchSubmit} className="flex w-full">
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#39D6F7]"
                      />
                      <button type="submit" className="bg-[#39D6F7] hover:bg-[#39d7f7bd] px-4 rounded-r-md text-white">
                        <Search className="h-5 w-5" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            {/* <Button className="hidden md:flex bg-[#39D6F7] hover:bg-[#39d7f7bd] px-5 py-2 rounded-md">Sign up</Button> */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under the navbar */}
      <div className="h-[88px]"></div>

      {/* Mobile menu - Full height and separate from the main navbar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white md:hidden"
          >
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b">
                <Logo />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-b">
                <form onSubmit={handleSearchSubmit} className="flex w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#39D6F7]"
                  />
                  <button type="submit" className="bg-[#39D6F7] hover:bg-[#39d7f7bd] px-4 rounded-r-md text-white">
                    <Search className="h-5 w-5" />
                  </button>
                </form>
              </div>

              <nav className="flex-1 p-4 overflow-y-auto">
                {Object.entries(navItems).map(([category, content]) => (
                  <div key={category} className="mb-4 border-b pb-2">
                    {content.isDropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 hover:text-gray-600"
                          onClick={() => toggleMobileExpanded(category)}
                        >
                          <span>{category}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              mobileExpandedItems.includes(category) ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileExpandedItems.includes(category) && content.sections && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 mt-2 space-y-4">
                                {Object.entries(content.sections).map(([section, items]) => (
                                  <div key={section} className="mt-3">
                                    <h3 className="font-semibold text-gray-400 mb-2 text-sm">{section}</h3>
                                    <ul className="space-y-2 pl-2">
                                      {items.map((item) => (
                                        <li key={item.title}>
                                          <Link
                                            href={item.href}
                                            className="flex items-center text-gray-600 hover:text-gray-900"
                                            onClick={() => setMobileMenuOpen(false)}
                                          >
                                            <ChevronRight className="h-4 w-4 mr-1" />
                                            <span>{item.title}</span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={content.href || "#"}
                        className="block text-lg font-semibold text-gray-900 hover:text-gray-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Footer Actions */}
              <div className="p-4 border-t mt-auto">
                <Link
                  href="#"
                  className="block text-center mb-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  className="w-full bg-[#39D6F7] hover:bg-[#39d7f7bd] py-2 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
