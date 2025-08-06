"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table"; // Import ColumnDefinition
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Category {
  sn: number;
  categoryName: string;
  status: string;
}

export default function CategoriesPage() {
  const initialCategories = useMemo(
    () => [
      { sn: 1, categoryName: "Appetizers", status: "Active" },
      { sn: 2, categoryName: "Main Courses", status: "Active" },
      { sn: 3, categoryName: "Desserts", status: "Inactive" },
      { sn: 4, categoryName: "Beverages", status: "Active" },
      { sn: 5, categoryName: "Soups", status: "Active" },
      { sn: 6, categoryName: "Salads", status: "Active" },
      { sn: 7, categoryName: "Breakfast", status: "Inactive" },
      { sn: 8, categoryName: "Lunch", status: "Active" },
      { sn: 9, categoryName: "Dinner", status: "Active" },
      { sn: 10, categoryName: "Snacks", status: "Active" },
      { sn: 11, categoryName: "Kids Menu", status: "Active" },
      { sn: 12, categoryName: "Specials", status: "Inactive" },
      { sn: 13, categoryName: "Vegan Options", status: "Active" },
      { sn: 14, categoryName: "Gluten-Free", status: "Active" },
      { sn: 15, categoryName: "Seasonal", status: "Active" },
    ],
    []
  );

  const columns: ColumnDefinition<Category>[] = useMemo(
    // Explicitly type the columns array
    () => [
      { id: "sn", name: "SN" },
      { id: "categoryName", name: "Category Name" },
      { id: "status", name: "Status" },
      {
        id: "action",
        name: "Action",
        align: "center",
        render: (category: Category) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", category)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", category)}
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
    categoryName: true,
    status: true,
    action: true,
  };

  const handleAddCategory = () => {
    console.log("Add Category clicked");
    // Implement add category logic here
  };

  return (
    <DataTable
      data={initialCategories}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by category name..."
      addLabel="Add Category"
      onAddClick={handleAddCategory}
      searchKey="categoryName"
    />
  );
}
