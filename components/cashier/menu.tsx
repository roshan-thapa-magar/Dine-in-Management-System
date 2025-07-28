import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Menu() {
  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <div className="w-36 sm:w-40 md:w-44 border-r flex flex-col">
        {/* Categories Header */}
        <div className="p-3 border-b h-12 flex items-center">
          <h2 className="font-semibold text-sm">Categories</h2>
        </div>
        {/* Categories List */}
        <ul className="flex-1 overflow-y-auto hide-scrollbar p-2 space-y-1 text-sm">
          {[
            "Starters",
            "Main Course",
            "Desserts",
            "Drinks",
            "Salads",
            "Soups",
            "Snacks",
            "Special Combos",
            "Breakfast",
            "Pasta & Noodles",
            "Starters",
            "Main Course",
            "Desserts",
            "Drinks",
            "Salads",
            "Soups",
            "Snacks",
            "Special Combos",
            "Breakfast",
            "Pasta & Noodles",
          ].map((cat, i) => (
            <li
              key={i}
              className="cursor-pointer hover:bg-muted p-2 rounded transition"
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
      {/* Right Items Area */}
      <div className="flex-1 flex flex-col">
        {/* Search Header */}
        <div className="flex items-center gap-2 p-3 border-b h-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search items..."
              className="pl-9 pr-4 py-2 h-10"
            />
          </div>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by category..."
              className="pl-9 pr-4 py-2 h-10"
            />
          </div>
        </div>
        {/* Items Grid */}
        <div className="flex-1 overflow-y-auto hide-scrollbar p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: "Chicken Biryani", price: "₹250" },
            { name: "Paneer Butter Masala", price: "₹220" },
            { name: "Chocolate Cake", price: "₹150" },
            { name: "Fresh Juice", price: "₹80" },
            { name: "Veg Burger", price: "₹120" },
            { name: "French Fries", price: "₹90" },
            { name: "Momos (10 pcs)", price: "₹130" },
            { name: "Pasta Alfredo", price: "₹200" },
            { name: "Chicken Biryani", price: "₹250" },
            { name: "Paneer Butter Masala", price: "₹220" },
            { name: "Chocolate Cake", price: "₹150" },
            { name: "Fresh Juice", price: "₹80" },
            { name: "Veg Burger", price: "₹120" },
            { name: "French Fries", price: "₹90" },
            { name: "Momos (10 pcs)", price: "₹130" },
            { name: "Pasta Alfredo", price: "₹200" },
            { name: "Chicken Biryani", price: "₹250" },
            { name: "Paneer Butter Masala", price: "₹220" },
            { name: "Chocolate Cake", price: "₹150" },
            { name: "Fresh Juice", price: "₹80" },
            { name: "Veg Burger", price: "₹120" },
            { name: "French Fries", price: "₹90" },
            { name: "Momos (10 pcs)", price: "₹130" },
            { name: "Pasta Alfredo", price: "₹200" },
            { name: "Chicken Biryani", price: "₹250" },
            { name: "Paneer Butter Masala", price: "₹220" },
            { name: "Chocolate Cake", price: "₹150" },
            { name: "Fresh Juice", price: "₹80" },
            { name: "Veg Burger", price: "₹120" },
            { name: "French Fries", price: "₹90" },
            { name: "Momos (10 pcs)", price: "₹130" },
            { name: "Pasta Alfredo", price: "₹200" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 border rounded hover:shadow-sm transition cursor-pointer"
            >
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
