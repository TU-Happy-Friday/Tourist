import Link from 'next/link'

// Simple icon components to avoid lucide-react import issues
const MapPinIcon = () => <span className="h-4 w-4">📍</span>
const MailIcon = () => <span className="h-4 w-4">✉️</span>
const PhoneIcon = () => <span className="h-4 w-4">📞</span>
const FacebookIcon = () => <span className="h-5 w-5">📘</span>
const InstagramIcon = () => <span className="h-5 w-5">📷</span>
const TwitterIcon = () => <span className="h-5 w-5">🐦</span>

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="text-sm font-bold">T</span>
              </div>
              <span className="text-xl font-bold">Tourist</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the most beautiful destinations in Thailand. From ancient temples to pristine beaches,
              let us help you plan your perfect trip.
            </p>
            <div className="flex space-x-4">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPinIcon />
                <span className="text-sm">Bangkok, Thailand</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MailIcon />
                <span className="text-sm">info@tourist.th</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <PhoneIcon />
                <span className="text-sm">+66 2 123 4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tourist Thailand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}