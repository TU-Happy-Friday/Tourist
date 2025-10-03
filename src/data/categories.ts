import { Category } from '@/types'

export const categories: Category[] = [
  {
    id: "1",
    name: "Temples",
    nameTh: "วัด",
    slug: "temples",
    icon: "Building",
    color: "bg-orange-100 text-orange-600",
    description: "Sacred temples and spiritual sites",
    count: 12
  },
  {
    id: "2",
    name: "Beaches",
    nameTh: "หาดทะเล",
    slug: "beaches",
    icon: "Beach",
    color: "bg-blue-100 text-blue-600",
    description: "Beautiful beaches and islands",
    count: 8
  },
  {
    id: "3",
    name: "Mountains",
    nameTh: "ภูเขา",
    slug: "mountains",
    icon: "Mountain",
    color: "bg-green-100 text-green-600",
    description: "Scenic mountain areas and viewpoints",
    count: 6
  },
  {
    id: "4",
    name: "National Parks",
    nameTh: "อุทยานแห่งชาติ",
    slug: "national-parks",
    icon: "Trees",
    color: "bg-emerald-100 text-emerald-600",
    description: "Protected natural areas and wildlife",
    count: 10
  },
  {
    id: "5",
    name: "Museums",
    nameTh: "พิพิธภัณฑ์",
    slug: "museums",
    icon: "Camera",
    color: "bg-purple-100 text-purple-600",
    description: "Cultural and historical museums",
    count: 7
  },
  {
    id: "6",
    name: "Food & Dining",
    nameTh: "อาหารและร้านอาหาร",
    slug: "food-dining",
    icon: "Utensils",
    color: "bg-red-100 text-red-600",
    description: "Restaurants and food experiences",
    count: 15
  },
  {
    id: "7",
    name: "Markets",
    nameTh: "ตลาด",
    slug: "markets",
    icon: "ShoppingCart",
    color: "bg-yellow-100 text-yellow-600",
    description: "Traditional and modern markets",
    count: 9
  },
  {
    id: "8",
    name: "Historical Sites",
    nameTh: "สถานที่ทางประวัติศาสตร์",
    slug: "historical",
    icon: "Clock",
    color: "bg-amber-100 text-amber-600",
    description: "Historical ruins and heritage sites",
    count: 11
  }
]

export function getCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | null {
  return categories.find(c => c.slug === slug) || null
}