import { Destination } from '@/types'

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "grand-palace-bangkok",
    name: "Grand Palace",
    nameTh: "พระบรมมหาราชวัง",
    description: "A spectacular palace complex in Bangkok that served as the official residence of the Kings of Siam.",
    descriptionTh: "พระบรมมหาราชวัง อดีตเป็นที่ประทับของพระมหากษัตริย์แห่งประเทศสยาม ปัจจุบันเป็นสถานที่ท่องเที่ยวที่สำคัญ",
    category: "temples",
    location: {
      city: "Bangkok",
      province: "Bangkok",
      coordinates: { lat: 13.7500, lng: 100.5167 }
    },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
    ],
    rating: 4.8,
    priceRange: "$",
    openingHours: "8:30 AM - 3:30 PM",
    tags: ["Historical", "Architecture", "Must-See", "Cultural"],
    highlights: [
      "Wat Phra Kaew (Temple of the Emerald Buddha)",
      "Thai architecture and craftsmanship",
      "Historical significance",
      "Dress code required"
    ],
    reviews: [
      {
        id: "1",
        author: "John Doe",
        rating: 5,
        comment: "Absolutely breathtaking! The intricate details and golden temples are stunning.",
        date: "2024-01-15"
      },
      {
        id: "2",
        author: "Maria Garcia",
        rating: 4,
        comment: "Beautiful but very crowded. Go early morning to avoid crowds.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: "2",
    slug: "phi-phi-islands",
    name: "Phi Phi Islands",
    nameTh: "หมู่เกาะพีพี",
    description: "Stunning island archipelago in the Andaman Sea, known for crystal clear waters and dramatic limestone cliffs.",
    descriptionTh: "หมู่เกาะสวยงามในทะเลอันดามัน ขึ้นชื่อเรื่องน้ำทะเลใสสะอาดและหน้าผาหินปูนที่ตั้งโดดเด่น",
    category: "beaches",
    location: {
      city: "Krabi",
      province: "Krabi",
      coordinates: { lat: 7.7407, lng: 98.7784 }
    },
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop"
    ],
    rating: 4.7,
    priceRange: "$$",
    openingHours: "8:00 AM - 6:00 PM",
    tags: ["Island", "Snorkeling", "Diving", "Beach", "Nature"],
    highlights: [
      "Maya Bay (from The Beach movie)",
      "Crystal clear waters",
      "Excellent snorkeling spots",
      "Boat tours available"
    ],
    reviews: [
      {
        id: "3",
        author: "Sarah Johnson",
        rating: 5,
        comment: "Paradise on Earth! The water is so clear and the scenery is breathtaking.",
        date: "2024-01-20"
      }
    ]
  },
  {
    id: "3",
    slug: "chai-thai-railway-market",
    name: "Maeklong Railway Market",
    nameTh: "ตลาดรถไฟแม่กลอง",
    description: "Unique market where vendors sell goods directly on active railway tracks, pulling back awnings when trains pass.",
    descriptionTh: "ตลาดแห่งเดียวในโลกที่ร้านค้าวางสินค้าบนรางรถไฟที่ยังใช้งานได้ และต้องเลื่อนหลังคาเมื่อรถไฟผ่าน",
    category: "markets",
    location: {
      city: "Samut Songkhram",
      province: "Samut Songkhram",
      coordinates: { lat: 13.4107, lng: 100.0128 }
    },
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0acc2401915?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
    ],
    rating: 4.5,
    priceRange: "$",
    openingHours: "6:00 AM - 5:00 PM",
    tags: ["Market", "Unique", "Train", "Local Culture", "Shopping"],
    highlights: [
      "Train passes through market 8 times daily",
      "Fresh seafood and local produce",
      "Unique photo opportunities",
      "Authentic local experience"
    ],
    reviews: [
      {
        id: "4",
        author: "Mike Chen",
        rating: 4,
        comment: "Fascinating market! Make sure to check train schedule beforehand.",
        date: "2024-01-18"
      }
    ]
  },
  {
    id: "4",
    slug: "doi-suthep-temple",
    name: "Wat Phra That Doi Suthep",
    nameTh: "วัดพระธาตุดอยสุเทพ",
    description: "Sacred temple on a mountain overlooking Chiang Mai with panoramic views and golden chedi.",
    descriptionTh: "วัดศักดิ์สิทธิ์บนภูเขาที่สามารถมองเห็นวิวเชียงใหม่ได้ 360 องศา มีเจดีย์ทองคำที่งดงาม",
    category: "temples",
    location: {
      city: "Chiang Mai",
      province: "Chiang Mai",
      coordinates: { lat: 18.8056, lng: 98.9250 }
    },
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    ],
    rating: 4.9,
    priceRange: "$",
    openingHours: "6:00 AM - 6:00 PM",
    tags: ["Temple", "Mountain", "Views", "Spiritual", "Architecture"],
    highlights: [
      "306 steps to climb (or cable car)",
      "360-degree views of Chiang Mai",
      "Golden chedi with relic",
      "Sacred Buddhist pilgrimage site"
    ],
    reviews: [
      {
        id: "5",
        author: "Emma Wilson",
        rating: 5,
        comment: "The views are absolutely stunning! Worth the climb to the top.",
        date: "2024-01-22"
      }
    ]
  },
  {
    id: "5",
    slug: "ayutthaya-historical-park",
    name: "Ayutthaya Historical Park",
    nameTh: "อุทยานประวัติศาสตร์พระนครศรีอยุธยา",
    description: "UNESCO World Heritage site featuring impressive ruins of the ancient capital of Siam.",
    descriptionTh: "แหล่งมรดกโลกของยูเนสโก มีโบราณสถานที่งดงามของเมืองหลวงเก่าแห่งกรุงศรีอยุธยา",
    category: "historical",
    location: {
      city: "Ayutthaya",
      province: "Ayutthaya",
      coordinates: { lat: 14.3535, lng: 100.5686 }
    },
    images: [
      "https://images.unsplash.com/photo-1596436889106-be35e843f971?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    rating: 4.6,
    priceRange: "$",
    openingHours: "8:00 AM - 6:00 PM",
    tags: ["Historical", "UNESCO", "Ruins", "Architecture", "Culture"],
    highlights: [
      "Wat Mahathat (famous Buddha head in tree)",
      "Wat Phra Si Sanphet",
      "Ancient palace ruins",
      "Bike tours available"
    ],
    reviews: [
      {
        id: "6",
        author: "Robert Lee",
        rating: 4,
        comment: "Incredible historical site! Rent a bike to explore the entire park.",
        date: "2024-01-19"
      }
    ]
  },
  {
    id: "6",
    slug: "railay-beach-krabi",
    name: "Railay Beach",
    nameTh: "หาดไร่เลย์",
    description: "Stunning beach accessible only by boat, surrounded by dramatic limestone karsts and clear waters.",
    descriptionTh: "หาดที่สวยงามเข้าถึงได้เฉพาะทางเรือ ล้อมรอบด้วยภูเขาหินปูนที่ตั้งโดดเด่นและน้ำทะเลใส",
    category: "beaches",
    location: {
      city: "Krabi",
      province: "Krabi",
      coordinates: { lat: 8.0096, lng: 98.8420 }
    },
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop"
    ],
    rating: 4.8,
    priceRange: "$$",
    openingHours: "24 hours",
    tags: ["Beach", "Rock Climbing", "Kayaking", "Scenery", "Paradise"],
    highlights: [
      "World-class rock climbing",
      "Crystal clear waters",
      "Four beautiful beaches",
      "Accessible only by boat"
    ],
    reviews: [
      {
        id: "7",
        author: "Lisa Anderson",
        rating: 5,
        comment: "The most beautiful beach I've ever seen! Perfect for rock climbing too.",
        date: "2024-01-21"
      }
    ]
  }
]

export function getDestinations(): Destination[] {
  return destinations
}

export function getDestinationBySlug(slug: string): Destination | null {
  return destinations.find(d => d.slug === slug) || null
}

export function getDestinationsByCategory(category: string): Destination[] {
  return destinations.filter(d => d.category === category)
}

export function searchDestinations(query: string): Destination[] {
  const lowercaseQuery = query.toLowerCase()
  return destinations.filter(d =>
    d.name.toLowerCase().includes(lowercaseQuery) ||
    d.nameTh.toLowerCase().includes(lowercaseQuery) ||
    d.description.toLowerCase().includes(lowercaseQuery) ||
    d.descriptionTh.toLowerCase().includes(lowercaseQuery) ||
    d.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}