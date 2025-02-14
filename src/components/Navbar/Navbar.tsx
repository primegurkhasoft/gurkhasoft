"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";

import Logo from "@/utils/logo";
import { Button } from "@/utils/button";

// Define the type for a single navigation item
type NavItem = {
  href?: string; // Optional href for non-dropdown items
  isDropdown?: boolean; // Optional flag for dropdown items
  sections?: {
    [key: string]: Array<{ title: string; href: string }>; // Sections for dropdown items
  };
};

// Define the type for the navItems object
type NavItems = {
  [key: string]: NavItem;
};

// Define the navItems object with proper typing
const navItems: NavItems = {
  Home: { href: "/" },
  Services: {
    isDropdown: true,
    sections: {
      DEVELOP: [
        { title: "Digital Marketing", href: "/services" },
        { title: "SEO", href: "/services" },
        { title: "Website Development", href: "/services" },
        { title: "Software Development", href: "/services" },
        { title: "QA and Testing", href: "/services" },
        { title: "E-commerce", href: "/services" },
        { title: "AI", href: "/services" },
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
  Projects: { href: "/project" },
  FAQ: { href: "/faq" },
  Career: { href: "/career" },
};

export function Navbar() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Make navbar transparent after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full px-6 py-3 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"}  z-[300] `}>
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
                                      <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
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
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Button className="hidden md:flex bg-[#39D6F7] hover:bg-[#39d7f7bd] px-5 py-2 rounded-md">Sign up</Button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
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
                <Logo />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 p-4">
                {Object.entries(navItems).map(([category, content]) => (
                  <div key={category} className="mb-4">
                    <Link href={content.href || "#"} className="text-lg font-semibold text-gray-900 hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                      {category}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
