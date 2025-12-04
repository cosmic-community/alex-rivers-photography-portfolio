# Alex Rivers Photography Portfolio

![Portfolio Banner](https://imgix.cosmicjs.com/7f9a9bb0-d0cc-11f0-b20e-1d251587b0cd-photo-1544005313-94ddf0286df2-1764823715526.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A stunning, professional photography portfolio website built with Next.js 16 and Cosmic CMS. This application showcases the work of photographer Alex Rivers, featuring beautiful galleries, individual photo details with EXIF metadata, an engaging about page, and comprehensive contact information.

## Features

- **Dynamic Photo Galleries** - Three curated collections (Mountain Landscapes, Urban Exploration, Portrait Studies) with category organization
- **Detailed Photo Pages** - Individual pages for each photo with full-resolution images and complete camera settings (EXIF data)
- **Category Filtering** - Browse photos by style: Landscape, Urban, or Portrait photography
- **Professional About Section** - Comprehensive photographer bio with profile photo, skills, experience timeline, and awards
- **Contact Information** - Full contact details including email, phone, studio address, social media links, and availability status
- **Responsive Design** - Beautiful, modern interface that works perfectly on all devices
- **Image Optimization** - High-resolution images optimized with imgix for fast loading and retina displays
- **SEO Optimized** - Server-side rendering with Next.js 16 for excellent search engine visibility

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=693111fe3584465d0a2f6b07&clone_repository=693113963584465d0a2f6b49)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a photography portfolio website with content models for a photographer's work. Include models for photo galleries, individual photos with metadata, photographer bio/about section, contact information, and project categories. Add sample content with demo photos, gallery descriptions, and professional photographer information."

### Code Generation Prompt

> "Based on the content model I created for 'Create a photography portfolio website with content models for a photographer's work. Include models for photo galleries, individual photos with metadata, photographer bio/about section, contact information, and project categories. Add sample content with demo photos, gallery descriptions, and professional photographer information.', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 16** - React framework with App Router for server-side rendering
- **TypeScript** - Strict type checking for reliability
- **Cosmic CMS** - Headless CMS for content management
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with the photography portfolio content model

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd photography-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching All Galleries

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: galleries } = await cosmic.objects
  .find({ type: 'galleries' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting a Single Photo

```typescript
const { object: photo } = await cosmic.objects
  .findOne({
    type: 'photos',
    slug: 'mountain-summit-at-sunrise'
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Filtering Photos by Category

```typescript
const { objects: photos } = await cosmic.objects
  .find({
    type: 'photos',
    'metadata.category': categoryId
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses the following Cosmic content models:

### Galleries
- Name (text)
- Description (html-textarea)
- Cover Image (file)
- Photos (objects relationship)
- Category (object relationship)
- Year (number)

### Photos
- Title (text)
- Description (textarea)
- Image (file)
- Category (object relationship)
- Camera Settings (json) - EXIF data
- Location (text)
- Capture Date (date)

### Categories
- Name (text)
- Description (textarea)

### About
- Name (text)
- Tagline (text)
- Bio (html-textarea)
- Profile Photo (file)
- Skills (check-boxes)
- Experience Years (number)
- Awards (textarea)

### Contact Info
- Email (text)
- Phone (text)
- Studio Address (textarea)
- Social Media Links (json)
- Availability Status (select-dropdown)
- Booking Enabled (switch)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

<!-- README_END -->