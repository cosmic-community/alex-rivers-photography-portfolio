// app/photos/[slug]/page.tsx
import { getPhoto } from '@/lib/cosmic'
import { Photo } from '@/types'
import Link from 'next/link'
import CategoryBadge from '@/components/CategoryBadge'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PhotoPage({ params }: PageProps) {
  const { slug } = await params
  const photo = await getPhoto(slug) as Photo | null

  if (!photo) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Photo Not Found</h1>
        <Link href="/" className="text-accent hover:underline">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/" 
        className="inline-block text-accent hover:underline mb-6"
      >
        ← Back to Galleries
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Photo */}
        <div className="relative">
          <img
            src={`${photo.metadata.image.imgix_url}?w=1200&h=1600&fit=max&auto=format,compress`}
            alt={photo.metadata.title}
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{photo.metadata.title}</h1>
          
          {photo.metadata.category && (
            <div className="mb-6">
              <CategoryBadge category={photo.metadata.category} />
            </div>
          )}

          {photo.metadata.description && (
            <p className="text-gray-300 mb-8 text-lg">
              {photo.metadata.description}
            </p>
          )}

          {/* Location and Date */}
          <div className="mb-8 space-y-2">
            {photo.metadata.location && (
              <div className="flex items-start gap-2">
                <span className="text-muted font-medium min-w-[100px]">Location:</span>
                <span className="text-gray-300">{photo.metadata.location}</span>
              </div>
            )}
            {photo.metadata.capture_date && (
              <div className="flex items-start gap-2">
                <span className="text-muted font-medium min-w-[100px]">Date:</span>
                <span className="text-gray-300">
                  {new Date(photo.metadata.capture_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            )}
          </div>

          {/* Camera Settings (EXIF) */}
          {photo.metadata.camera_settings && (
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Camera Settings</h2>
              <div className="space-y-3">
                {photo.metadata.camera_settings.camera && (
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-muted">Camera</span>
                    <span className="text-gray-300 font-medium">
                      {photo.metadata.camera_settings.camera}
                    </span>
                  </div>
                )}
                {photo.metadata.camera_settings.lens && (
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-muted">Lens</span>
                    <span className="text-gray-300 font-medium">
                      {photo.metadata.camera_settings.lens}
                    </span>
                  </div>
                )}
                {photo.metadata.camera_settings.focal_length && (
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-muted">Focal Length</span>
                    <span className="text-gray-300 font-medium">
                      {photo.metadata.camera_settings.focal_length}
                    </span>
                  </div>
                )}
                {photo.metadata.camera_settings.aperture && (
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-muted">Aperture</span>
                    <span className="text-gray-300 font-medium">
                      {photo.metadata.camera_settings.aperture}
                    </span>
                  </div>
                )}
                {photo.metadata.camera_settings.shutter_speed && (
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-muted">Shutter Speed</span>
                    <span className="text-gray-300 font-medium">
                      {photo.metadata.camera_settings.shutter_speed}
                    </span>
                  </div>
                )}
                {photo.metadata.camera_settings.iso && (
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-muted">ISO</span>
                    <span className="text-gray-300 font-medium">
                      {photo.metadata.camera_settings.iso}
                    </span>
                  </div>
                )}
                {photo.metadata.camera_settings.nd_filter && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Filter</span>
                    <span className="text-gray-300 font-medium">
                      {photo.metadata.camera_settings.nd_filter}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}