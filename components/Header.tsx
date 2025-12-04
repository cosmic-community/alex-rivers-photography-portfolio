import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Alex Rivers
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Galleries
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}