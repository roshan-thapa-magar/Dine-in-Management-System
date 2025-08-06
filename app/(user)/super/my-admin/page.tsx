"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Admin {
  sn: number;
  userName: string;
  email: string;
  phone: string;
  address: string;
  restaurantName: string;
  joinDate: string;
  endDate: string;
  image: string;
  status: string;
}

export default function AdminsPage() {
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
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
        image: "/placeholder.svg?height=32&width=32",
        status: "Active",
      },
    ],
    []
  );

  const columns: ColumnDefinition<Admin>[] = useMemo(
    () => [
      { id: "sn", name: "SN" },
      { id: "userName", name: "User Name" },
      { id: "email", name: "Email" },
      { id: "phone", name: "Phone" },
      { id: "address", name: "Address" },
      { id: "restaurantName", name: "Restaurant Name" },
      { id: "joinDate", name: "Join Date" },
      { id: "endDate", name: "End Date" },
      {
        id: "image",
        name: "Image",
        render: (admin: Admin) => (
          <Image
            src={
              admin.image || "/placeholder.svg?height=32&width=32&query=person"
            }
            alt={admin.userName}
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
        render: (admin: Admin) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", admin)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", admin)}
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
  };

  const handleAddAdmin = () => {
    console.log("Add Admin clicked");
    // Implement add admin logic here
  };

  return (
    <DataTable
      data={initialAdmins}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by user name..."
      addLabel="Add Admin"
      onAddClick={handleAddAdmin}
      searchKey="userName"
    />
  );
}
