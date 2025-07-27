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
  const initialAdmins = useMemo(
    () => [
      {
        sn: 1,
        userName: "Alice Smith",
        email: "alice.s@example.com",
        phone: "123-456-7890",
        address: "123 Main St",
        restaurantName: "The Gourmet Place",
        joinDate: "2023-01-15",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 2,
        userName: "Bob Johnson",
        email: "bob.j@example.com",
        phone: "098-765-4321",
        address: "456 Oak Ave",
        restaurantName: "Burger Haven",
        joinDate: "2022-03-20",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 3,
        userName: "Charlie Brown",
        email: "charlie.b@example.com",
        phone: "555-123-4567",
        address: "789 Pine Ln",
        restaurantName: "Pizza Palace",
        joinDate: "2021-11-01",
        endDate: "2024-06-30",
        image: "https://github.com/leerob.png",
        status: "Inactive",
      },
      {
        sn: 4,
        userName: "Diana Prince",
        email: "diana.p@example.com",
        phone: "111-222-3333",
        address: "101 Hero Blvd",
        restaurantName: "Wonder Cafe",
        joinDate: "2023-07-01",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 5,
        userName: "Eve Adams",
        email: "eve.a@example.com",
        phone: "444-555-6666",
        address: "202 Secret St",
        restaurantName: "Hidden Gem Bistro",
        joinDate: "2022-09-10",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 6,
        userName: "Frank White",
        email: "frank.w@example.com",
        phone: "777-888-9999",
        address: "303 Mystery Rd",
        restaurantName: "The Unknown Diner",
        joinDate: "2021-05-25",
        endDate: "2024-01-31",
        image: "https://github.com/leerob.png",
        status: "Inactive",
      },
      {
        sn: 7,
        userName: "Grace Lee",
        email: "grace.l@example.com",
        phone: "999-000-1111",
        address: "404 Serene Dr",
        restaurantName: "Peaceful Eats",
        joinDate: "2023-02-14",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 8,
        userName: "Henry King",
        email: "henry.k@example.com",
        phone: "222-333-4444",
        address: "505 Royal Ct",
        restaurantName: "King's Feast",
        joinDate: "2022-06-01",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 9,
        userName: "Ivy Green",
        email: "ivy.g@example.com",
        phone: "666-777-8888",
        address: "606 Garden Path",
        restaurantName: "Green Leaf Cafe",
        joinDate: "2023-04-05",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 10,
        userName: "Jack Black",
        email: "jack.b@example.com",
        phone: "333-444-5555",
        address: "707 Dark Alley",
        restaurantName: "Night Owl Bistro",
        joinDate: "2022-01-01",
        endDate: "2023-12-31",
        image: "https://github.com/leerob.png",
        status: "Inactive",
      },
      {
        sn: 11,
        userName: "Karen White",
        email: "karen.w@example.com",
        phone: "123-123-1234",
        address: "808 Sunny Rd",
        restaurantName: "Sunshine Diner",
        joinDate: "2023-08-20",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 12,
        userName: "Liam Red",
        email: "liam.r@example.com",
        phone: "456-456-4567",
        address: "909 Crimson St",
        restaurantName: "Red Dragon Inn",
        joinDate: "2022-04-10",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 13,
        userName: "Mia Blue",
        email: "mia.b@example.com",
        phone: "789-789-7890",
        address: "1010 Ocean Dr",
        restaurantName: "Blue Wave Cafe",
        joinDate: "2023-03-01",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 14,
        userName: "Noah Green",
        email: "noah.g@example.com",
        phone: "000-111-2222",
        address: "1111 Forest Rd",
        restaurantName: "Greenwood Eatery",
        joinDate: "2022-10-15",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
      {
        sn: 15,
        userName: "Olivia Purple",
        email: "olivia.p@example.com",
        phone: "333-222-1111",
        address: "1212 Lavender Ln",
        restaurantName: "Purple Haze Bistro",
        joinDate: "2023-06-25",
        endDate: "N/A",
        image: "https://github.com/leerob.png",
        status: "Active",
      },
    ],
    []
  );

  const [admins, setAdmins] = useState(initialAdmins);
  console.log(setAdmins)
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({
    sn: true,
    userName: true,
    email: true,
    phone: true,
    address: true,
    restaurantName: true,
    joinDate: true,
    endDate: true,
    image: true,
    status: true,
    action: true,
  });

  const totalPages = Math.ceil(admins.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedAdmins = admins.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(paginatedAdmins.map((admin) => admin.sn));
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

  const allRowsSelected = paginatedAdmins.every((admin) =>
    selectedRows.has(admin.sn)
  );
  const someRowsSelected =
    paginatedAdmins.some((admin) => selectedRows.has(admin.sn)) &&
    !allRowsSelected;
  console.log(someRowsSelected);
  const columns = [
    { id: "sn", name: "SN" },
    { id: "userName", name: "User Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
    { id: "address", name: "Address" },
    { id: "restaurantName", name: "Restaurant Name" },
    { id: "joinDate", name: "Join Date" },
    { id: "endDate", name: "End Date" },
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
            Add Admin
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
            {paginatedAdmins.map((admin) => (
              <TableRow key={admin.sn}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(admin.sn)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(admin.sn, checked as boolean)
                    }
                    aria-label={`Select row ${admin.sn}`}
                    className="translate-y-[2px]"
                  />
                </TableCell>
                {columnVisibility.sn && (
                  <TableCell className="font-medium">{admin.sn}</TableCell>
                )}
                {columnVisibility.userName && (
                  <TableCell>{admin.userName}</TableCell>
                )}
                {columnVisibility.email && <TableCell>{admin.email}</TableCell>}
                {columnVisibility.phone && <TableCell>{admin.phone}</TableCell>}
                {columnVisibility.address && (
                  <TableCell>{admin.address}</TableCell>
                )}
                {columnVisibility.restaurantName && (
                  <TableCell>{admin.restaurantName}</TableCell>
                )}
                {columnVisibility.joinDate && (
                  <TableCell>{admin.joinDate}</TableCell>
                )}
                {columnVisibility.endDate && (
                  <TableCell>{admin.endDate}</TableCell>
                )}
                {columnVisibility.image && (
                  <TableCell>
                    <Image
                      src={admin.image || "/placeholder.svg"}
                      alt={admin.userName}
                      width={32}
                      height={32}
                      className="object-cover rounded-full"
                    />
                  </TableCell>
                )}
                {columnVisibility.status && (
                  <TableCell>{admin.status}</TableCell>
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
      </div>
      {/* Footer Section - Fixed */}
      <div className="flex-shrink-0 border-t bg-background p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            {selectedRows.size} of {admins.length} row(s) selected.
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
