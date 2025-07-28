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
  const initialProducts = useMemo(
    () => [
      {
        sn: 1,
        date: "2023-07-20",
        supplier: "Tech Solutions Inc.",
        item: "Laptop",
        category: "Electronics",
        quantity: 2,
        unitPrice: 1200.0,
        totalPrice: 2400.0,
        paymentMethod: "Credit Card",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 2,
        date: "2023-07-19",
        supplier: "Office Supplies Co.",
        item: "Printer",
        category: "Office Equipment",
        quantity: 1,
        unitPrice: 350.0,
        totalPrice: 350.0,
        paymentMethod: "Bank Transfer",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 3,
        date: "2023-07-18",
        supplier: "Furniture World",
        item: "Office Chair",
        category: "Furniture",
        quantity: 5,
        unitPrice: 150.0,
        totalPrice: 750.0,
        paymentMethod: "Credit Card",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 4,
        date: "2023-07-17",
        supplier: "Software Hub",
        item: "Software License",
        category: "Software",
        quantity: 10,
        unitPrice: 50.0,
        totalPrice: 500.0,
        paymentMethod: "Online Payment",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 5,
        date: "2023-07-16",
        supplier: "Hardware Depot",
        item: "External Hard Drive",
        category: "Electronics",
        quantity: 3,
        unitPrice: 80.0,
        totalPrice: 240.0,
        paymentMethod: "Credit Card",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 6,
        date: "2023-07-15",
        supplier: "Stationery Mart",
        item: "Notebooks",
        category: "Office Supplies",
        quantity: 20,
        unitPrice: 5.0,
        totalPrice: 100.0,
        paymentMethod: "Cash",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 7,
        date: "2023-07-14",
        supplier: "Cleaning Solutions",
        item: "Cleaning Supplies",
        category: "Maintenance",
        quantity: 1,
        unitPrice: 75.0,
        totalPrice: 75.0,
        paymentMethod: "Credit Card",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 8,
        date: "2023-07-13",
        supplier: "Food Distributors",
        item: "Coffee Beans",
        category: "Pantry",
        quantity: 4,
        unitPrice: 25.0,
        totalPrice: 100.0,
        paymentMethod: "Bank Transfer",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 9,
        date: "2023-07-12",
        supplier: "Tech Solutions Inc.",
        item: "Monitor",
        category: "Electronics",
        quantity: 3,
        unitPrice: 250.0,
        totalPrice: 750.0,
        paymentMethod: "Credit Card",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 10,
        date: "2023-07-11",
        supplier: "Office Supplies Co.",
        item: "Pens",
        category: "Office Supplies",
        quantity: 50,
        unitPrice: 1.0,
        totalPrice: 50.0,
        paymentMethod: "Cash",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 11,
        date: "2023-07-10",
        supplier: "Furniture World",
        item: "Desk Lamp",
        category: "Furniture",
        quantity: 8,
        unitPrice: 40.0,
        totalPrice: 320.0,
        paymentMethod: "Online Payment",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 12,
        date: "2023-07-09",
        supplier: "Software Hub",
        item: "Antivirus Software",
        category: "Software",
        quantity: 1,
        unitPrice: 60.0,
        totalPrice: 60.0,
        paymentMethod: "Credit Card",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 13,
        date: "2023-07-08",
        supplier: "Hardware Depot",
        item: "USB Drive",
        category: "Electronics",
        quantity: 15,
        unitPrice: 10.0,
        totalPrice: 150.0,
        paymentMethod: "Bank Transfer",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 14,
        date: "2023-07-07",
        supplier: "Stationery Mart",
        item: "Stapler",
        category: "Office Supplies",
        quantity: 10,
        unitPrice: 8.0,
        totalPrice: 80.0,
        paymentMethod: "Cash",
        billImage: "https://github.com/hngngn.png",
      },
      {
        sn: 15,
        date: "2023-07-06",
        supplier: "Cleaning Solutions",
        item: "Hand Sanitizer",
        category: "Maintenance",
        quantity: 20,
        unitPrice: 12.0,
        totalPrice: 240.0,
        paymentMethod: "Credit Card",
        billImage: "https://github.com/hngngn.png",
      },
    ],
    []
  );

  const [products] = useState(initialProducts);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({
    sn: true,
    date: true,
    supplier: true,
    item: true,
    category: true,
    quantity: true,
    unitPrice: true,
    totalPrice: true,
    paymentMethod: true,
    billImage: true,
    action: true,
  });

  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return products;
    }
    return products.filter((product) =>
      product.item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(
        paginatedProducts.map((product) => product.sn)
      );
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

  const allRowsSelected = paginatedProducts.every((product) =>
    selectedRows.has(product.sn)
  );
  const someRowsSelected =
    paginatedProducts.some((product) => selectedRows.has(product.sn)) &&
    !allRowsSelected;
    console.log(someRowsSelected)

  const columns = [
    { id: "sn", name: "SN" },
    { id: "date", name: "Date" },
    { id: "supplier", name: "Supplier" },
    { id: "item", name: "Item" },
    { id: "category", name: "Category" },
    { id: "quantity", name: "Quantity" },
    { id: "unitPrice", name: "Unit Price" },
    { id: "totalPrice", name: "Total Price" },
    { id: "paymentMethod", name: "Payment Method" },
    { id: "billImage", name: "Bill Image" },
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              Add Product
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
              {paginatedProducts.map((product) => (
                <TableRow key={product.sn}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(product.sn)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(product.sn, checked as boolean)
                      }
                      aria-label={`Select row ${product.sn}`}
                      className="translate-y-[2px]"
                    />
                  </TableCell>
                  {columnVisibility.sn && (
                    <TableCell className="font-medium">{product.sn}</TableCell>
                  )}
                  {columnVisibility.date && (
                    <TableCell>{product.date}</TableCell>
                  )}
                  {columnVisibility.supplier && (
                    <TableCell>{product.supplier}</TableCell>
                  )}
                  {columnVisibility.item && (
                    <TableCell>{product.item}</TableCell>
                  )}
                  {columnVisibility.category && (
                    <TableCell>{product.category}</TableCell>
                  )}
                  {columnVisibility.quantity && (
                    <TableCell>{product.quantity}</TableCell>
                  )}
                  {columnVisibility.unitPrice && (
                    <TableCell>{`$${product.unitPrice.toFixed(2)}`}</TableCell>
                  )}
                  {columnVisibility.totalPrice && (
                    <TableCell>{`$${product.totalPrice.toFixed(2)}`}</TableCell>
                  )}
                  {columnVisibility.paymentMethod && (
                    <TableCell>{product.paymentMethod}</TableCell>
                  )}
                  {columnVisibility.billImage && (
                    <TableCell>
                      <Image
                        src={product.billImage || "/placeholder.svg"}
                        alt={`Bill for ${product.item}`}
                        width={32}
                        height={32}
                        className="object-cover rounded-md"
                      />
                    </TableCell>
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
            {selectedRows.size} of {filteredProducts.length} row(s) selected.
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
