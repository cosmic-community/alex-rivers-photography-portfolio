import { getContactInfo } from '@/lib/cosmic'
import { ContactInfo } from '@/types'

export default async function ContactPage() {
  const contact = await getContactInfo() as ContactInfo | null

  if (!contact) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact information not available</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Get In Touch
        </h1>

        {/* Availability Status */}
        {contact.metadata.availability_status && (
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${
              contact.metadata.availability_status.key === 'available' 
                ? 'bg-green-900/30 text-green-400 border border-green-700'
                : contact.metadata.availability_status.key === 'limited'
                ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700'
                : 'bg-red-900/30 text-red-400 border border-red-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              {contact.metadata.availability_status.value}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Email */}
          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-lg font-semibold text-muted mb-2">Email</h2>
            <a 
              href={`mailto:${contact.metadata.email}`}
              className="text-xl text-accent hover:underline"
            >
              {contact.metadata.email}
            </a>
          </div>

          {/* Phone */}
          {contact.metadata.phone && (
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-lg font-semibold text-muted mb-2">Phone</h2>
              <a 
                href={`tel:${contact.metadata.phone}`}
                className="text-xl text-accent hover:underline"
              >
                {contact.metadata.phone}
              </a>
            </div>
          )}

          {/* Studio Address */}
          {contact.metadata.studio_address && (
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-lg font-semibold text-muted mb-2">Studio Address</h2>
              <address className="text-gray-300 not-italic whitespace-pre-line">
                {contact.metadata.studio_address}
              </address>
            </div>
          )}

          {/* Social Media */}
          {contact.metadata.social_media && Object.keys(contact.metadata.social_media).length > 0 && (
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-lg font-semibold text-muted mb-4">Connect on Social Media</h2>
              <div className="flex flex-wrap gap-4">
                {contact.metadata.social_media.instagram && (
                  <a
                    href={contact.metadata.social_media.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {contact.metadata.social_media.facebook && (
                  <a
                    href={contact.metadata.social_media.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    Facebook
                  </a>
                )}
                {contact.metadata.social_media.twitter && (
                  <a
                    href={contact.metadata.social_media.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {contact.metadata.social_media.behance && (
                  <a
                    href={contact.metadata.social_media.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    Behance
                  </a>
                )}
                {contact.metadata.social_media['500px'] && (
                  <a
                    href={contact.metadata.social_media['500px']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    500px
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Booking Status */}
          {contact.metadata.booking_enabled && (
            <div className="text-center mt-8">
              <p className="text-muted mb-4">
                I'm currently accepting new projects and collaborations
              </p>
              <a
                href={`mailto:${contact.metadata.email}?subject=Project Inquiry`}
                className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Send Project Inquiry
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}