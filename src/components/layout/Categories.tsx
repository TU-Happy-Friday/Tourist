import { getCategories } from '@/data/categories'

// Simple icon components to avoid lucide-react import issues
const IconComponents = {
  Building: () => <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>,
  Umbrella: () => <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>,
  Mountain: () => <div className="w-8 h-8 bg-green-500 rounded-lg"></div>,
  Trees: () => <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>,
  Camera: () => <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>,
  Utensils: () => <div className="w-8 h-8 bg-red-500 rounded-lg"></div>,
  ShoppingCart: () => <div className="w-8 h-8 bg-yellow-500 rounded-lg"></div>,
  Clock: () => <div className="w-8 h-8 bg-gray-500 rounded-lg"></div>,
}

const iconMap = IconComponents

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
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || (() => <div className="w-8 h-8 bg-gray-500 rounded-lg"></div>)
            return (
              <div
                key={category.name}
                className="group cursor-pointer"
              >
                <div className={`${category.color} rounded-lg p-6 text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                  <div className="flex justify-center mb-3">
                    <IconComponent />
                  </div>
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