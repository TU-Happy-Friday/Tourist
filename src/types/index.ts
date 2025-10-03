export interface Destination {
  id: string
  slug: string
  name: string
  nameTh: string
  description: string
  descriptionTh: string
  category: string
  location: {
    city: string
    province: string
    coordinates: { lat: number; lng: number }
  }
  images: string[]
  rating: number
  priceRange: string
  openingHours: string
  tags: string[]
  highlights: string[]
  reviews: Review[]
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

export interface Category {
  id: string
  name: string
  nameTh: string
  slug: string
  icon: string
  color: string
  description: string
  count: number
}