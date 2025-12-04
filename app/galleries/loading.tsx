export default function GalleryLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent mb-4"></div>
          <p className="text-muted">Loading gallery...</p>
        </div>
      </div>
    </div>
  )
}