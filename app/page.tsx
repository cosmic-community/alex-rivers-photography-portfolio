import { getGalleries, getCategories } from '@/lib/cosmic'
import { Gallery, Category } from '@/types'
import Link from 'next/link'
import CategoryBadge from '@/components/CategoryBadge'

export default async function Home() {
  const galleries = await getGalleries() as Gallery[]
  const categories = await getCategories() as Category[]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Alex Rivers Photography
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Visual storyteller capturing moments that matter
        </p>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <CategoryBadge key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {/* Galleries Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Galleries</h2>
        {galleries.length === 0 ? (
          <p className="text-center text-muted">No galleries available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery) => (
              <Link 
                key={gallery.id} 
                href={`/galleries/${gallery.slug}`}
                className="group relative overflow-hidden rounded-lg bg-secondary transition-all hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={`${gallery.metadata.cover_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={gallery.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{gallery.metadata.name}</h3>
                    {gallery.metadata.category && (
                      <span className="text-sm text-gray-300">
                        {gallery.metadata.category.metadata.name}
                      </span>
                    )}
                    {gallery.metadata.year && (
                      <span className="text-sm text-gray-400 ml-2">
                        • {gallery.metadata.year}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}