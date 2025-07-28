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
import Image from "next/image";

export default function Page() {
  const initialStaff = useMemo(
    () => [
      {
        sn: 1,
        staffName: "John Doe",
        email: "john.d@example.com",
        position: "Manager",
        address: "123 Maple St",
        phone: "111-222-3333",
        salary: "$60,000",
        role: "Cashier",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 2,
        staffName: "Jane Smith",
        email: "jane.s@example.com",
        position: "Chef",
        address: "456 Oak Ave",
        phone: "444-555-6666",
        salary: "$55,000",
        role: "Kitchen",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 3,
        staffName: "Peter Jones",
        email: "peter.j@example.com",
        position: "Waiter",
        address: "789 Pine Ln",
        phone: "777-888-9999",
        salary: "$30,000",
        role: "Waiter",
        image: "https://github.com/leerob.png",
        status: "Inactive",
      },
      {
        sn: 4,
        staffName: "Sarah Davis",
        email: "sarah.d@example.com",
        position: "Bartender",
        address: "101 Elm Rd",
        phone: "000-111-2222",
        salary: "$35,000",
        role: "Kitchen",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 5,
        staffName: "Michael Brown",
        email: "michael.b@example.com",
        position: "Dishwasher",
        address: "202 Birch Blvd",
        phone: "333-444-5555",
        salary: "$25,000",
        role: "Waiter",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 6,
        staffName: "Emily White",
        email: "emily.w@example.com",
        position: "Hostess",
        address: "303 Cedar Ct",
        phone: "666-777-8888",
        salary: "$28,000",
        role: "Waiter",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 7,
        staffName: "David Green",
        email: "david.g@example.com",
        position: "Sous Chef",
        address: "404 Spruce St",
        phone: "999-000-1111",
        salary: "$45,000",
        role: "Kitchen",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 8,
        staffName: "Olivia Black",
        email: "olivia.b@example.com",
        position: "Waiter",
        address: "505 Willow Way",
        phone: "222-333-4444",
        salary: "$30,000",
        role: "Waiter",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 9,
        staffName: "Daniel Blue",
        email: "daniel.b@example.com",
        position: "Manager",
        address: "606 Poplar Pl",
        phone: "555-666-7777",
        salary: "$62,000",
        role: "Kitchen",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 10,
        staffName: "Sophia Red",
        email: "sophia.r@example.com",
        position: "Chef",
        address: "707 Ash Ave",
        phone: "888-999-0000",
        salary: "$58,000",
        role: "Kitchen",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 11,
        staffName: "Liam Yellow",
        email: "liam.y@example.com",
        position: "Waiter",
        address: "808 Cherry Ct",
        phone: "123-123-1234",
        salary: "$31,000",
        role: "Waiter",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 12,
        staffName: "Ava Orange",
        email: "ava.o@example.com",
        position: "Bartender",
        address: "909 Grape St",
        phone: "456-456-4567",
        salary: "$36,000",
        role: "Kitchen",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 13,
        staffName: "Noah Purple",
        email: "noah.p@example.com",
        position: "Dishwasher",
        address: "1010 Plum Pkwy",
        phone: "789-789-7890",
        salary: "$26,000",
        role: "Waiter",
        image: "https://github.com/leerob.png",
        status: "Inactive",
      },
      {
        sn: 14,
        staffName: "Isabella Pink",
        email: "isabella.p@example.com",
        position: "Hostess",
        address: "1111 Peach Ln",
        phone: "000-111-2222",
        salary: "$29,000",
        role: "Waiter",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 15,
        staffName: "James Gold",
        email: "james.g@example.com",
        position: "Sous Chef",
        address: "1212 Silver St",
        phone: "333-222-1111",
        salary: "$47,000",
        role: "Kitchen",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
    ],
    []
  );

  const [staff, setStaff] = useState(initialStaff);
  console.log(setStaff)
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({
    sn: true,
    staffName: true,
    email: true,
    position: true,
    address: true,
    phone: true,
    salary: true,
    role: true,
    image: true,
    status: true,
    action: true,
  });

  const totalPages = Math.ceil(staff.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedStaff = staff.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(paginatedStaff.map((s) => s.sn));
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

  const allRowsSelected = paginatedStaff.every((s) => selectedRows.has(s.sn));
  const someRowsSelected =
    paginatedStaff.some((s) => selectedRows.has(s.sn)) && !allRowsSelected;
   console.log(someRowsSelected)
  const columns = [
    { id: "sn", name: "SN" },
    { id: "staffName", name: "Staff Name" },
    { id: "email", name: "Email" },
    { id: "position", name: "Position" },
    { id: "address", name: "Address" },
    { id: "phone", name: "Phone" },
    { id: "salary", name: "Salary" },
    { id: "role", name: "Role" },
    { id: "image", name: "Image" },
    { id: "status", name: "Status" },
    { id: "action", name: "Action", align: "center" },
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
            <Button variant={"outline"} className="h-10 px-4">
              <Plus className="w-4 h-4 mr-2" />
              Add Staff
            </Button>
          </div>
        </div>
      </div>

      {/* Staff Section - Scrollable */}
      <div className="flex-1 overflow-auto px-4 hide-scrollbar ">
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
              {paginatedStaff.map((s) => (
                <TableRow key={s.sn}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(s.sn)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(s.sn, checked as boolean)
                      }
                      aria-label={`Select row ${s.sn}`}
                      className="translate-y-[2px]"
                    />
                  </TableCell>
                  {columnVisibility.sn && (
                    <TableCell className="font-medium">{s.sn}</TableCell>
                  )}
                  {columnVisibility.staffName && (
                    <TableCell>{s.staffName}</TableCell>
                  )}
                  {columnVisibility.email && <TableCell>{s.email}</TableCell>}
                  {columnVisibility.position && (
                    <TableCell>{s.position}</TableCell>
                  )}
                  {columnVisibility.address && (
                    <TableCell>{s.address}</TableCell>
                  )}
                  {columnVisibility.phone && <TableCell>{s.phone}</TableCell>}
                  {columnVisibility.salary && <TableCell>{s.salary}</TableCell>}
                  {columnVisibility.role && <TableCell>{s.role}</TableCell>}
                  {columnVisibility.image && (
                    <TableCell>
                      <Image
                        src={s.image || "/placeholder.svg"}
                        alt={s.staffName}
                        width={32}
                        height={32}
                        className="object-cover rounded-full"
                      />
                    </TableCell>
                  )}
                  {columnVisibility.status && <TableCell>{s.status}</TableCell>}
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
      </div>

      {/* Footer Section - Fixed */}
      <div className="flex-shrink-0 border-t bg-background p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            {selectedRows.size} of {staff.length} row(s) selected.
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
