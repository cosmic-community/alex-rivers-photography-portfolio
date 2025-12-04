'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-muted mb-6">
          We encountered an error while loading this page.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}