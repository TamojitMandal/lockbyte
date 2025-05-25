"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {SessionProvider} from "next-auth/react"
import UserButton from "./UserButton"


export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed w-full bg-black border-b border-gray-800 z-50">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-bold text-white hover:text-red-600">
          <span className="text-red-600 hover:text-white">H</span>ACTIFIED
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`text-sm ${pathname === "/" ? "text-red-600" : "text-white hover:text-red-600"}`}>
            HOME
          </Link>
          <Link
            href="/about"
            className={`text-sm ${pathname === "/about" ? "text-red-600" : "text-white hover:text-red-600"}`}
          >
            ABOUT US
          </Link>
          <Link
            href="/services"
            className={`text-sm ${pathname === "/services" ? "text-red-600" : "text-white hover:text-red-600"}`}
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className={`text-sm ${pathname === "/contact" ? "text-red-600" : "text-white hover:text-red-600"}`}
          >
            CONTACT US
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          
          <div>
            <SessionProvider>
              <UserButton />
            </SessionProvider>
          </div>

        </div>
      </div>
    </nav>
  )
}
