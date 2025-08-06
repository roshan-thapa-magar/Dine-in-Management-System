"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Department {
  sn: number;
  departmentName: string;
  status: string;
}

export default function DepartmentsPage() {
  const initialDepartments = useMemo(
    () => [
      { sn: 1, departmentName: "Sales", status: "Active" },
      { sn: 2, departmentName: "Marketing", status: "Active" },
      { sn: 3, departmentName: "Human Resources", status: "Inactive" },
      { sn: 4, departmentName: "Finance", status: "Active" },
      { sn: 5, departmentName: "Operations", status: "Active" },
      { sn: 6, departmentName: "Customer Support", status: "Inactive" },
      { sn: 7, departmentName: "Research & Development", status: "Active" },
      { sn: 8, departmentName: "IT", status: "Active" },
      { sn: 9, departmentName: "Legal", status: "Inactive" },
      { sn: 10, departmentName: "Product Management", status: "Active" },
      { sn: 11, departmentName: "Quality Assurance", status: "Active" },
      { sn: 12, departmentName: "Logistics", status: "Inactive" },
      { sn: 13, departmentName: "Public Relations", status: "Active" },
      { sn: 14, departmentName: "Training", status: "Active" },
      { sn: 15, departmentName: "Administration", status: "Inactive" },
    ],
    []
  );

  const columns: ColumnDefinition<Department>[] = useMemo(
    () => [
      { id: "sn", name: "SN" },
      { id: "departmentName", name: "Department Name" },
      { id: "status", name: "Status" },
      {
        id: "action",
        name: "Action",
        align: "center",
        render: (department: Department) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", department)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", department)}
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
    departmentName: true,
    status: true,
    action: true,
  };

  const handleAddDepartment = () => {
    console.log("Add Department clicked");
    // Implement add department logic here
  };

  return (
    <DataTable
      data={initialDepartments}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by department name..."
      addLabel="Add Department"
      onAddClick={handleAddDepartment}
      searchKey="departmentName"
    />
  );
}
