'use client'

import { useState } from 'react'
import Link from 'next/link'

// Simple icon components to avoid lucide-react import issues
const SearchIcon = () => <span className="h-5 w-5">🔍</span>
const MenuIcon = () => <span className="h-5 w-5">☰</span>
const CloseIcon = () => <span className="h-5 w-5">✕</span>
const SunIcon = () => <span className="h-5 w-5">☀️</span>
const MoonIcon = () => <span className="h-5 w-5">🌙</span>

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <span className="text-sm font-bold">T</span>
            </div>
            <span className="text-xl font-bold">Tourist</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="text-sm font-medium hover:text-primary transition-colors">
              Destinations
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search button */}
            <button className="p-2 rounded-md hover:bg-accent transition-colors">
              <SearchIcon />
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-accent transition-colors"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/destinations" className="text-sm font-medium hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}