import { Category } from '@/types'

interface CategoryBadgeProps {
  category: Category
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium border border-accent/30">
      {category.metadata.name}
    </span>
  )
}