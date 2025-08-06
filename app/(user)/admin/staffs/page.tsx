"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface StaffItem {
  sn: number;
  staffName: string;
  email: string;
  position: string;
  address: string;
  phone: string;
  salary: string;
  role: string;
  image: string;
  status: string;
}

export default function StaffPage() {
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
        status: "Active",
      },
      {
        sn: 12,
        staffName: "Ava Orange",
        email: "ava.o@example.com",
        position: "Bartender",
        address: "909 Grape St",
        phone: "456-456-4567",
        salary: "$36,00  0",
        role: "Kitchen",
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
        status: "Active",
      },
    ],
    []
  );

  const columns: ColumnDefinition<StaffItem>[] = useMemo(
    () => [
      { id: "sn", name: "SN" },
      { id: "staffName", name: "Staff Name" },
      { id: "email", name: "Email" },
      { id: "position", name: "Position" },
      { id: "address", name: "Address" },
      { id: "phone", name: "Phone" },
      { id: "salary", name: "Salary" },
      { id: "role", name: "Role" },
      {
        id: "image",
        name: "Image",
        render: (staff: StaffItem) => (
          <Image
            src={
              staff.image || "/placeholder.svg?height=32&width=32&query=person"
            }
            alt={staff.staffName}
            width={32}
            height={32}
            className="object-cover rounded-full"
          />
        ),
      },
      { id: "status", name: "Status" },
      {
        id: "action",
        name: "Action",
        align: "center",
        render: (staff: StaffItem) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", staff)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", staff)}
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
  };

  const handleAddStaff = () => {
    console.log("Add Staff clicked");
    // Implement add staff logic here
  };

  return (
    <DataTable
      data={initialStaff}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by staff name..."
      addLabel="Add Staff"
      onAddClick={handleAddStaff}
      searchKey="staffName"
    />
  );
}
