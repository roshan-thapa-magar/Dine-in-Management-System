"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table"; // Import ColumnDefinition
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Unit {
  sn: number;
  unitName: string;
  status: string;
}

export default function UnitsPage() {
  const initialUnits = useMemo(
    () => [
      { sn: 1, unitName: "Kilogram (kg)", status: "Active" },
      { sn: 2, unitName: "Liter (L)", status: "Active" },
      { sn: 3, unitName: "Piece (pc)", status: "Inactive" },
      { sn: 4, unitName: "Meter (m)", status: "Active" },
      { sn: 5, unitName: "Dozen (dz)", status: "Active" },
      { sn: 6, unitName: "Gram (g)", status: "Inactive" },
      { sn: 7, unitName: "Milliliter (mL)", status: "Active" },
      { sn: 8, unitName: "Box", status: "Active" },
      { sn: 9, unitName: "Carton", status: "Inactive" },
      { sn: 10, unitName: "Pound (lb)", status: "Active" },
      { sn: 11, unitName: "Gallon (gal)", status: "Active" },
      { sn: 12, unitName: "Roll", status: "Inactive" },
      { sn: 13, unitName: "Pack", status: "Active" },
      { sn: 14, unitName: "Bundle", status: "Active" },
      { sn: 15, unitName: "Set", status: "Inactive" },
    ],
    []
  );

  const columns: ColumnDefinition<Unit>[] = useMemo(
    // Explicitly type the columns array
    () => [
      { id: "sn", name: "SN" },
      { id: "unitName", name: "Unit Name" },
      { id: "status", name: "Status" },
      {
        id: "action",
        name: "Action",
        align: "center",
        render: (unit: Unit) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", unit)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", unit)}
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
    unitName: true,
    status: true,
    action: true,
  };

  const handleAddUnit = () => {
    console.log("Add Unit clicked");
    // Implement add unit logic here
  };

  return (
    <DataTable
      data={initialUnits}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by unit name..."
      addLabel="Add Unit"
      onAddClick={handleAddUnit}
      searchKey="unitName"
    />
  );
}
