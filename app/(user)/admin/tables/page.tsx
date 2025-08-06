"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table";
import { Pencil, Trash, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TableItem {
  sn: number;
  tableName: string;
  capacity: number;
  department: string;
  status: string;
}

export default function TablesPage() {
  const initialTables = useMemo(
    () => [
      {
        sn: 1,
        tableName: "Table A",
        capacity: 4,
        department: "Dining",
        status: "Available",
      },
      {
        sn: 2,
        tableName: "Table B",
        capacity: 6,
        department: "Bar",
        status: "Occupied",
      },
      {
        sn: 3,
        tableName: "Table C",
        capacity: 2,
        department: "Outdoor",
        status: "Maintenance",
      },
      {
        sn: 4,
        tableName: "Table D",
        capacity: 8,
        department: "Dining",
        status: "Available",
      },
      {
        sn: 5,
        tableName: "Table E",
        capacity: 4,
        department: "Dining",
        status: "Available",
      },
      {
        sn: 6,
        tableName: "Table F",
        capacity: 6,
        department: "Bar",
        status: "Occupied",
      },
      {
        sn: 7,
        tableName: "Table G",
        capacity: 2,
        department: "Outdoor",
        status: "Maintenance",
      },
      {
        sn: 8,
        tableName: "Table H",
        capacity: 8,
        department: "Dining",
        status: "Available",
      },
      {
        sn: 9,
        tableName: "Table I",
        capacity: 4,
        department: "Dining",
        status: "Available",
      },
      {
        sn: 10,
        tableName: "Table J",
        capacity: 6,
        department: "Bar",
        status: "Occupied",
      },
      {
        sn: 11,
        tableName: "Table K",
        capacity: 2,
        department: "Outdoor",
        status: "Maintenance",
      },
      {
        sn: 12,
        tableName: "Table L",
        capacity: 8,
        department: "Dining",
        status: "Available",
      },
      {
        sn: 13,
        tableName: "Table M",
        capacity: 4,
        department: "Dining",
        status: "Available",
      },
      {
        sn: 14,
        tableName: "Table N",
        capacity: 6,
        department: "Bar",
        status: "Occupied",
      },
      {
        sn: 15,
        tableName: "Table O",
        capacity: 2,
        department: "Outdoor",
        status: "Maintenance",
      },
    ],
    []
  );

  const columns: ColumnDefinition<TableItem>[] = useMemo(
    () => [
      { id: "sn", name: "SN" },
      { id: "tableName", name: "Table Name" },
      { id: "capacity", name: "Capacity" },
      { id: "department", name: "Department" },
      { id: "status", name: "Status" },
      {
        id: "action",
        name: "Action",
        align: "center",
        render: (table: TableItem) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", table)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", table)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        ),
      },
      {
        id: "qrCode",
        name: "QR Code",
        align: "center",
        render: (table: TableItem) => (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => console.log("View QR Code for", table)}
          >
            <QrCode className="h-4 w-4" />
            <span className="sr-only">View QR Code</span>
          </Button>
        ),
      },
    ],
    []
  );

  const initialColumnVisibility = {
    sn: true,
    tableName: true,
    capacity: true,
    department: true,
    status: true,
    action: true,
    qrCode: true,
  };

  const handleAddTable = () => {
    console.log("Add Table clicked");
    // Implement add table logic here
  };

  return (
    <DataTable
      data={initialTables}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by table name..."
      addLabel="Add Table"
      onAddClick={handleAddTable}
      searchKey="tableName"
    />
  );
}
