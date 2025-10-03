import Link from 'next/link'
import { MapPin, Star, Clock, DollarSign } from 'lucide-react'
import { Destination } from '@/types'

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{destination.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
          <span className="text-sm text-gray-500 capitalize">{destination.category}</span>
        </div>

        <p className="text-sm text-gray-600 mb-3">{destination.nameTh}</p>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {destination.location.city}, {destination.location.province}
        </div>

        {/* Details */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-xs">{destination.openingHours}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{destination.priceRange}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {destination.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {destination.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{destination.tags.length - 3}
            </span>
          )}
        </div>

        {/* Link */}
        <Link
          href={`/destinations/${destination.slug}`}
          className="block w-full text-center bg-primary text-primary-foreground rounded-md py-2 px-4 text-sm font-medium hover:bg-primary/600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}