import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import Link from "next/link"

const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Integrations", "Pricing", "Changelog", "Docs"],
    },
    {
        title: "Company",
        links: ["About Us", "Careers", "Press", "Partners", "Contact"],
    },
    {
        title: "Resources",
        links: ["Blog", "Newsletter", "Events", "Help Center", "Tutorials"],
    },
]

const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
]

export default function Footer() {
    return (
        <footer className="bg-gray-100 pt-16 pb-12 text-gray-600">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-1 lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Forge</h2>
                        <p className="mb-4">
                            Tech Forge is the modern web development rising company for individuals and enterprises to realize the full potential of a
                            scalable, customizable web architecture.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-grow px-4 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="inline-block hover:text-blue-600 transition-all duration-200 hover:translate-x-1"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm">&copy; 2025 Tech Forge. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        {socialLinks.map(({ icon: Icon, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-gray-400 hover:text-blue-600 transition-all duration-200 hover:translate-x-1"
                            >
                                <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

