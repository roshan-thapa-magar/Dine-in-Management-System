"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Pencil,
  Trash,
  QrCode,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Settings2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const [tables] = useState(initialTables);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({
    sn: true,
    tableName: true,
    capacity: true,
    department: true,
    status: true,
    action: true,
    qrCode: true,
  });

  const totalPages = Math.ceil(tables.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedTables = tables.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(paginatedTables.map((table) => table.sn));
      setSelectedRows(newSelected);
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (sn: number, checked: boolean) => {
    setSelectedRows((prev) => {
      const newSelected = new Set(prev);
      if (checked) {
        newSelected.add(sn);
      } else {
        newSelected.delete(sn);
      }
      return newSelected;
    });
  };

  const handleColumnVisibilityChange = (column: string, checked: boolean) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [column]: checked,
    }));
  };

  const allRowsSelected = paginatedTables.every((table) =>
    selectedRows.has(table.sn)
  );

  const columns = [
    { id: "sn", name: "SN" },
    { id: "tableName", name: "Table Name" },
    { id: "capacity", name: "Capacity" },
    { id: "department", name: "Department" },
    { id: "status", name: "Status" },
    { id: "action", name: "Action", align: "center" },
    { id: "qrCode", name: "QR Code", align: "center" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header Section - Fixed */}
      <div className="flex-shrink-0 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name..."
              className="pl-9 pr-4 py-2 h-10 w-full rounded-md"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-10 px-4 bg-transparent">
                  <Settings2 className="w-4 h-4 mr-2" />
                  Customize Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {columns.map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={columnVisibility[column.id]}
                    onCheckedChange={(checked) =>
                      handleColumnVisibilityChange(column.id, checked)
                    }
                  >
                    {column.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="h-10 px-4 bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add Table
            </Button>
          </div>
        </div>
      </div>

      {/* Table Section - Scrollable */}
      <div className="flex-1 overflow-auto px-4">
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={allRowsSelected}
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all"
                    className="translate-y-[2px]"
                  />
                </TableHead>
                {columns
                  .filter((col) => columnVisibility[col.id])
                  .map((column) => (
                    <TableHead
                      key={column.id}
                      className={column.align === "center" ? "text-center" : ""}
                    >
                      {column.name}
                    </TableHead>
                  ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedTables.map((table) => (
                <TableRow key={table.sn}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(table.sn)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(table.sn, checked as boolean)
                      }
                      aria-label={`Select row ${table.sn}`}
                      className="translate-y-[2px]"
                    />
                  </TableCell>
                  {columnVisibility.sn && (
                    <TableCell className="font-medium">{table.sn}</TableCell>
                  )}
                  {columnVisibility.tableName && (
                    <TableCell>{table.tableName}</TableCell>
                  )}
                  {columnVisibility.capacity && (
                    <TableCell>{table.capacity}</TableCell>
                  )}
                  {columnVisibility.department && (
                    <TableCell>{table.department}</TableCell>
                  )}
                  {columnVisibility.status && (
                    <TableCell>{table.status}</TableCell>
                  )}
                  {columnVisibility.action && (
                    <TableCell className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  )}
                  {columnVisibility.qrCode && (
                    <TableCell className="text-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <QrCode className="h-4 w-4" />
                        <span className="sr-only">View QR Code</span>
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Footer Section - Fixed */}
      <div className="flex-shrink-0 border-t bg-background p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            {selectedRows.size} of {tables.length} row(s) selected.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm">Rows per page</span>
              <Select
                value={String(rowsPerPage)}
                onValueChange={(value) => {
                  setRowsPerPage(Number(value));
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">First page</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Last page</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
