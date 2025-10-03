import { getDestinations } from '@/data/destinations'
import DestinationCard from './DestinationCard'
import Link from 'next/link'

export default function FeaturedDestinations() {
  const destinations = getDestinations().slice(0, 6) // Get first 6 destinations

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover Thailand&apos;s most popular and breathtaking destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-primary/600"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}