export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted">
          <p>&copy; {currentYear} Alex Rivers Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}