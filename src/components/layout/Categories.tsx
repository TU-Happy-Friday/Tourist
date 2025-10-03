import {
  Mountain,
  Umbrella,
  Building,
  Trees,
  Camera,
  Utensils,
  ShoppingCart,
  Clock
} from 'lucide-react'
import { getCategories } from '@/data/categories'

const iconMap = {
  Building,
  Umbrella,
  Mountain,
  Trees,
  Camera,
  Utensils,
  ShoppingCart,
  Clock
}

const categories = getCategories().slice(0, 6) // Get first 6 categories

export default function Categories() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find exactly what you&apos;re looking for by browsing our curated categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap]
            return (
              <div
                key={category.name}
                className="group cursor-pointer"
              >
                <div className={`${category.color} rounded-lg p-6 text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                  <Icon className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{category.nameTh}</p>
                  <span className="text-xs text-gray-500">{category.count} places</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}