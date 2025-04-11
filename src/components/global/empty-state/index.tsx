import { ShoppingCart, Heart, User, Search, ShoppingBag, Package } from "lucide-react"
import type { ReactNode } from "react"

interface EmptyStateProps {
  title: string
  description: string
  icon: "shopping-cart" | "heart" | "user" | "search" | "shopping-bag" | "package"
  action?: ReactNode
}

export default function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  const getIcon = () => {
    switch (icon) {
      case "shopping-cart":
        return <ShoppingCart className="h-16 w-16 text-gray-300" />
      case "heart":
        return <Heart className="h-16 w-16 text-gray-300" />
      case "user":
        return <User className="h-16 w-16 text-gray-300" />
      case "search":
        return <Search className="h-16 w-16 text-gray-300" />
      case "shopping-bag":
        return <ShoppingBag className="h-16 w-16 text-gray-300" />
      case "package":
        return <Package className="h-16 w-16 text-gray-300" />
      default:
        return <ShoppingCart className="h-16 w-16 text-gray-300" />
    }
  }

  return (
    <div className="empty-state">
      <div className="empty-state-icon">{getIcon()}</div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-description">{description}</p>
      {action}
    </div>
  )
}
