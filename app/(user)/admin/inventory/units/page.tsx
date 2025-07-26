"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Pencil,
  Trash,
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

export default function Page() {
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

  const [units, setUnits] = useState(initialUnits);
  console.log(setUnits)
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({
    sn: true,
    unitName: true,
    status: true,
    action: true,
  });

  const totalPages = Math.ceil(units.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedUnits = units.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(paginatedUnits.map((unit) => unit.sn));
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

  const allRowsSelected = paginatedUnits.every((unit) =>
    selectedRows.has(unit.sn)
  );
  const someRowsSelected =
    paginatedUnits.some((unit) => selectedRows.has(unit.sn)) &&
    !allRowsSelected;

    console.log(someRowsSelected)
  const columns = [
    { id: "sn", name: "SN" },
    { id: "unitName", name: "Unit Name" },
    { id: "status", name: "Status" },
    { id: "action", name: "Action", align: "center" },
  ];

  return (
    <div className="space-y-6 p-4">
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
          <Button variant={"outline"} className="h-10 px-4">
            <Plus className="w-4 h-4 mr-2" />
            Add Unit
          </Button>
        </div>
      </div>
      <div className="border rounded-md overflow-hidden">
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
            {paginatedUnits.map((unit) => (
              <TableRow key={unit.sn}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(unit.sn)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(unit.sn, checked as boolean)
                    }
                    aria-label={`Select row ${unit.sn}`}
                    className="translate-y-[2px]"
                  />
                </TableCell>
                {columnVisibility.sn && (
                  <TableCell className="font-medium">{unit.sn}</TableCell>
                )}
                {columnVisibility.unitName && (
                  <TableCell>{unit.unitName}</TableCell>
                )}
                {columnVisibility.status && (
                  <TableCell>{unit.status}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
        <div className="text-sm">
          {selectedRows.size} of {units.length} row(s) selected.
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm">Rows per page</span>
            <Select
              value={String(rowsPerPage)}
              onValueChange={(value) => {
                setRowsPerPage(Number(value));
                setCurrentPage(1); // Reset to first page when rows per page changes
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
  );
}
