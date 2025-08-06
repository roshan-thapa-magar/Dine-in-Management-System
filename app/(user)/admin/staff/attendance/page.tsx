"use client";

import { useMemo } from "react";
import DataTable, { type ColumnDefinition } from "@/components/data-table";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AttendanceItem {
  sn: number;
  date: string;
  employeeId: string; // New column
  staffName: string;
  status: string;
  checkInTime: string;
  checkOutTime: string;
  hoursWorked: string;
  leaveType?: string; // New optional column
}

export default function AttendancePage() {
  const initialAttendanceData = useMemo(
    () => [
      {
        sn: 1,
        date: "2025-07-29",
        employeeId: "EMP001", // Added data
        staffName: "John Doe",
        status: "Present",
        checkInTime: "09:00 AM",
        checkOutTime: "05:00 PM",
        hoursWorked: "8h 0m",
        leaveType: "N/A", // Added data
      },
      {
        sn: 2,
        date: "2025-07-29",
        employeeId: "EMP002", // Added data
        staffName: "Jane Smith",
        status: "Late",
        checkInTime: "09:30 AM",
        checkOutTime: "05:00 PM",
        hoursWorked: "7h 30m",
        leaveType: "N/A", // Added data
      },
      {
        sn: 3,
        date: "2025-07-29",
        employeeId: "EMP003", // Added data
        staffName: "Peter Jones",
        status: "Absent",
        checkInTime: "-",
        checkOutTime: "-",
        hoursWorked: "-",
        leaveType: "Sick Leave", // Added data
      },
      {
        sn: 4,
        date: "2025-07-29",
        employeeId: "EMP004", // Added data
        staffName: "Sarah Davis",
        status: "Present",
        checkInTime: "09:00 AM",
        checkOutTime: "05:00 PM",
        hoursWorked: "8h 0m",
        leaveType: "N/A", // Added data
      },
      {
        sn: 5,
        date: "2025-07-30",
        employeeId: "EMP001", // Added data
        staffName: "John Doe",
        status: "Present",
        checkInTime: "09:00 AM",
        checkOutTime: "05:00 PM",
        hoursWorked: "8h 0m",
        leaveType: "N/A", // Added data
      },
      {
        sn: 6,
        date: "2025-07-30",
        employeeId: "EMP002", // Added data
        staffName: "Jane Smith",
        status: "Present",
        checkInTime: "09:00 AM",
        checkOutTime: "05:00 PM",
        hoursWorked: "8h 0m",
        leaveType: "N/A", // Added data
      },
      {
        sn: 7,
        date: "2025-07-30",
        employeeId: "EMP003", // Added data
        staffName: "Peter Jones",
        status: "Late",
        checkInTime: "10:00 AM",
        checkOutTime: "06:00 PM",
        hoursWorked: "8h 0m",
        leaveType: "N/A", // Added data
      },
      {
        sn: 8,
        date: "2025-07-30",
        employeeId: "EMP004", // Added data
        staffName: "Sarah Davis",
        status: "Absent",
        checkInTime: "-",
        checkOutTime: "-",
        hoursWorked: "-",
        leaveType: "Vacation", // Added data
      },
    ],
    []
  );

  const columns: ColumnDefinition<AttendanceItem>[] = useMemo(
    () => [
      { id: "sn", name: "SN" },
      { id: "employeeId", name: "Employee ID" }, // New column definition
      { id: "date", name: "Date" },
      { id: "staffName", name: "Staff Name" },
      { id: "status", name: "Status" },
      { id: "checkInTime", name: "Check-in Time" },
      { id: "checkOutTime", name: "Check-out Time" },
      { id: "hoursWorked", name: "Hours Worked" },
      { id: "leaveType", name: "Leave Type" }, // New column definition
      {
        id: "action",
        name: "Action",
        align: "center",
        render: (attendance: AttendanceItem) => (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Edit", attendance)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => console.log("Delete", attendance)}
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
    employeeId: true, // Set visibility for new column
    date: true,
    staffName: true,
    status: true,
    checkInTime: true,
    checkOutTime: true,
    hoursWorked: true,
    leaveType: true, // Set visibility for new column
    action: true,
  };

  const handleAddAttendance = () => {
    console.log("Add Attendance clicked");
    // Implement add attendance logic here
  };

  return (
    <DataTable
      data={initialAttendanceData}
      columns={columns}
      initialColumnVisibility={initialColumnVisibility}
      searchPlaceholder="Search by staff name or ID..."
      addLabel="Add Attendance"
      onAddClick={handleAddAttendance}
      searchKey="staffName" // You might want to change this to a combined search or add more search logic
    />
  );
}
