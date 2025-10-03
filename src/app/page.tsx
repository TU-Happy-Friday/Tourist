import Hero from '@/components/layout/Hero'
import FeaturedDestinations from '@/components/cards/FeaturedDestinations'
import Categories from '@/components/layout/Categories'

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedDestinations />
    </main>
  )
}