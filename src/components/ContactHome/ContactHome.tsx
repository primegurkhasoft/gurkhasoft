"use client"

import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function ContactHome() {
    const router = useRouter();
    
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 space-y-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="rounded-3xl bg-[#1D1E3D] p-8 text-white">
                    <div className="flex items-center gap-4 mb-2">
                        <Image
                            src="/Images/Logo/first.png"
                            alt="Netlify logo"
                            width={100}
                            height={100}
                        />
                        <div className="text-3xl">/</div>
                        <h2 className="text-2xl text-yellow-500">Projects</h2>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Increase in developer productivity",
                            "Increase in site reliability",
                            "Quality on par with extremely high standards",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="rounded-full bg-white/10 p-1">
                                    <Check className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <div className="text-sm font-medium text-blue-600">Customer Story</div>
                    <h2 className="text-3xl font-bold tracking-tight">Mammut means quality - in brand and in technology</h2>
                    <p className="text-gray-600">
                        Mammut came to PG Soft because they needed a performant, interoperable Composable Web Platform that could
                        deliver a best-in-class digital brand experience for their customers. They needed a partner that could keep
                        their site reliable and performant during peak retail season and unexpected traffic spikes.
                    </p>
                    <Link href="/project" className="group inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                        View the Projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>

            <div className="text-center space-y-8">
                <h2 className="text-3xl font-bold md:text-4xl">Ready to take the first step?</h2>
                <button 
                onClick={()=>router.push("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

