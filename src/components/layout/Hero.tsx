import { Search, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Amazing Places in
            <span className="text-primary"> Thailand</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore the most beautiful destinations, from ancient temples to pristine beaches.
            Your journey starts here.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, cities, or attractions..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/600 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">15</div>
              <div className="text-gray-600">Provinces</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">8</div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}