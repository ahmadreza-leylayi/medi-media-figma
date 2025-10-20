'use client'
import { NavbarLink } from "@/lib/types"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const links: NavbarLink[] = [
        {
            title: "HOME",
            href: "/",
        },
        {
            title: "SHOP",
            href: "/shop",
        },
        {
            title: "PAGES",
            href: "/pages",
        },
        {
            title: "CONTACT US",
            href: "/contact",
        },
    ]

    return (

        <div className="bg-[#C08A46] shadow-md sticky top-0 z-50 w-full">
            <nav className="relative flex items-center justify-between p-2 max-w-7xl mx-auto gap-4">

                <div className="flex items-center gap-2">
                    <Image src="/icons/watch2.png" alt="watch Logo" width={50} height={50} />
                    <div className="flex-col flex">
                        <span className="font-serif text-2xl">BRIONZZ</span>
                        <span className="font-serif text-sm text-[#f1e9d0d9]">Luxury Watch</span>
                    </div>
                </div>

                {/* Desktop links */}
                <ul className="hidden md:flex space-x-6 font-serif text-sm ">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-[#f1e9d0d9]">

                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* mobile menu button */}
                <div className="flex items-center gap-4">
                    <MobileMenuButton />

                    <div className="gap-4 flex items-center ">
                        <Image src="/icons/person.png" alt="User Icon" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/basket.png" alt="Basket Icon" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/search.png" alt="Search Icon" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/iran.png" alt="Iran Icon" width={20} height={20} className="cursor-pointer" />
                    </div>
                </div>

            </nav>
        </div>
    )
}

function MobileMenuButton() {

    const [open, setOpen] = useState(false)

    return (
        <div className="md:hidden">
            <button
                aria-label="Toggle menu"
                onClick={() => setOpen((s) => !s)}
                className="p-2 rounded-md focus:outline-none"
            >
                {/*  hamburger icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && <MobileMenu links={[
                { title: "HOME", href: "/" },
                { title: "SHOP", href: "/shop" },
                { title: "PAGES", href: "/pages" },
                { title: "CONTACT US", href: "/contact" },
            ]} onClose={() => setOpen(false)} />}
        </div>
    )
}

function MobileMenu({ links, onClose }: { links: NavbarLink[]; onClose: () => void }) {
    return (
        <div className="absolute left-0 right-0 top-full bg-[#C08A46] md:hidden z-40 shadow-md">
            <ul className="flex flex-col p-4 space-y-2 font-serif text-sm">
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            onClick={onClose}
                            className="block w-full py-2 hover:text-[#f1e9d0d9]"
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
