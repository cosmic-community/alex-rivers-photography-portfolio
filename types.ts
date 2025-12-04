// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Gallery type
export interface Gallery extends CosmicObject {
  type: 'galleries';
  metadata: {
    name: string;
    description?: string;
    cover_image: {
      url: string;
      imgix_url: string;
    };
    photos?: Photo[];
    category?: Category;
    year?: number;
  };
}

// Photo type
export interface Photo extends CosmicObject {
  type: 'photos';
  metadata: {
    title: string;
    description?: string;
    image: {
      url: string;
      imgix_url: string;
    };
    category?: Category;
    camera_settings?: {
      camera?: string;
      lens?: string;
      focal_length?: string;
      aperture?: string;
      shutter_speed?: string;
      iso?: number;
      nd_filter?: string;
    };
    location?: string;
    capture_date?: string;
  };
}

// Category type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
  };
}

// About type
export interface About extends CosmicObject {
  type: 'about';
  metadata: {
    name: string;
    tagline?: string;
    bio: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    skills?: string[];
    experience_years?: number;
    awards?: string;
  };
}

// Contact Info type
export interface ContactInfo extends CosmicObject {
  type: 'contact-info';
  metadata: {
    email: string;
    phone?: string;
    studio_address?: string;
    social_media?: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
      behance?: string;
      '500px'?: string;
    };
    availability_status?: {
      key: string;
      value: string;
    };
    booking_enabled?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isGallery(obj: CosmicObject): obj is Gallery {
  return obj.type === 'galleries';
}

export function isPhoto(obj: CosmicObject): obj is Photo {
  return obj.type === 'photos';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}