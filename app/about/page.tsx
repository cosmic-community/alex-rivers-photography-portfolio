import { getAbout } from '@/lib/cosmic'
import { About } from '@/types'

export default async function AboutPage() {
  const about = await getAbout() as About | null

  if (!about) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">About information not available</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {about.metadata.profile_photo && (
            <div className="mb-8">
              <img
                src={`${about.metadata.profile_photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                alt={about.metadata.name}
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-accent"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {about.metadata.name}
          </h1>
          {about.metadata.tagline && (
            <p className="text-xl text-muted">{about.metadata.tagline}</p>
          )}
          {about.metadata.experience_years && (
            <p className="text-accent font-semibold mt-2">
              {about.metadata.experience_years} years of experience
            </p>
          )}
        </div>

        {/* Bio */}
        {about.metadata.bio && (
          <div 
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: about.metadata.bio }}
          />
        )}

        {/* Skills */}
        {about.metadata.skills && about.metadata.skills.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {about.metadata.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-secondary px-4 py-2 rounded-full text-sm font-medium border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {about.metadata.awards && (
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
            <div className="prose prose-invert max-w-none">
              {about.metadata.awards.split('\n').map((award, index) => (
                <p key={index} className="mb-2 text-gray-300">
                  {award}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}