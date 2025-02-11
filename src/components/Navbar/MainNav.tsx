"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

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

export function MainNav() {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

    return (
        <nav className="flex items-center gap-6">
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
    )
}

