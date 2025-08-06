"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table"; // Import ColumnDefinition
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Product {
  sn: number;
  productName: string;
  category: string;
  units: string;
  image: string;
  status: string;
}

export default function ProductsPage() {
  const initialProducts = useMemo(
    () => [
      {
        sn: 1,
        productName: "Apple",
        category: "Fruit",
        units: "kg",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 2,
        productName: "Milk",
        category: "Dairy",
        units: "Liter",
        image: "/placeholder.svg?height=32&width=32",
        status: "Low Stock",
      },
      {
        sn: 3,
        productName: "Bread",
        category: "Bakery",
        units: "pc",
        image: "/placeholder.svg?height=32&width=32",
        status: "Out of Stock",
      },
      {
        sn: 4,
        productName: "Chicken Breast",
        category: "Meat",
        units: "kg",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 5,
        productName: "Eggs",
        category: "Dairy",
        units: "Dozen",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 6,
        productName: "Rice",
        category: "Grains",
        units: "kg",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 7,
        productName: "Tomatoes",
        category: "Vegetable",
        units: "kg",
        image: "/placeholder.svg?height=32&width=32",
        status: "Low Stock",
      },
      {
        sn: 8,
        productName: "Cheese",
        category: "Dairy",
        units: "pc",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 9,
        productName: "Pasta",
        category: "Grains",
        units: "pc",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 10,
        productName: "Orange Juice",
        category: "Beverage",
        units: "Liter",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 11,
        productName: "Salmon",
        category: "Seafood",
        units: "kg",
        image: "/placeholder.svg?height=32&width=32",
        status: "Low Stock",
      },
      {
        sn: 12,
        productName: "Potatoes",
        category: "Vegetable",
        units: "kg",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 13,
        productName: "Yogurt",
        category: "Dairy",
        units: "pc",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 14,
        productName: "Coffee",
        category: "Beverage",
        units: "pc",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
      {
        sn: 15,
        productName: "Bananas",
        category: "Fruit",
        units: "kg",
        image: "/placeholder.svg?height=32&width=32",
        status: "In Stock",
      },
    ],
    []
  );

  const columns: ColumnDefinition<Product>[] = useMemo(
    // Explicitly type the columns array
    () => [
      { id: "sn", name: "SN" },
      { id: "productName", name: "Product Name" },
      { id: "category", name: "Category" },
      { id: "units", name: "Units" },
      {
        id: "image",
        name: "Image",
        render: (product: Product) => (
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.productName}
            width={32}
            height={32}
            className="object-cover rounded-md"
          />
        ),
      },
      { id: "status", name: "Status" },
      {
        id: "action",
        name: "Action",
        align: "center",
        render: (product: Product) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", product)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", product)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const initialColumnVisibility = {
    sn: true,
    productName: true,
    category: true,
    units: true,
    image: true,
    status: true,
    action: true,
  };

  const handleAddProduct = () => {
    console.log("Add Product clicked");
    // Implement add product logic here
  };

  return (
    <DataTable
      data={initialProducts}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by product name..."
      addLabel="Add Product"
      onAddClick={handleAddProduct}
      searchKey="productName"
    />
  );
}
