// app/galleries/[slug]/page.tsx
import { getGallery } from '@/lib/cosmic'
import { Gallery } from '@/types'
import Link from 'next/link'
import CategoryBadge from '@/components/CategoryBadge'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function GalleryPage({ params }: PageProps) {
  const { slug } = await params
  const gallery = await getGallery(slug) as Gallery | null

  if (!gallery) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Gallery Not Found</h1>
        <Link href="/" className="text-accent hover:underline">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Gallery Header */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-block text-accent hover:underline mb-6"
        >
          ← Back to Galleries
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {gallery.metadata.name}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          {gallery.metadata.category && (
            <CategoryBadge category={gallery.metadata.category} />
          )}
          {gallery.metadata.year && (
            <span className="text-muted">{gallery.metadata.year}</span>
          )}
        </div>
        
        {gallery.metadata.description && (
          <div 
            className="prose prose-invert max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: gallery.metadata.description }}
          />
        )}
      </div>

      {/* Photos Grid */}
      {gallery.metadata.photos && gallery.metadata.photos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.metadata.photos.map((photo) => (
            <Link
              key={photo.id}
              href={`/photos/${photo.slug}`}
              className="group relative overflow-hidden rounded-lg bg-secondary transition-all hover:scale-105"
            >
              <div className="aspect-[3/2] relative">
                <img
                  src={`${photo.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt={photo.metadata.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-semibold">{photo.metadata.title}</h3>
                  {photo.metadata.location && (
                    <p className="text-sm text-gray-300">{photo.metadata.location}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No photos in this gallery</p>
      )}
    </div>
  )
}