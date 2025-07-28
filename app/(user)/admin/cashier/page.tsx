import React from "react";
import { Input } from "@/components/ui/input";
import { FileCheck, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type TableStatus = "default" | "running" | "printed";

export default function Page() {
  const adminId = "202020";
  const tableId = "29384748";

  const legendItems = [
    { label: "Blank Table", color: "border bg-background shadow-xs" },
    { label: "Running Table", color: "bg-destructive" },
    { label: "Printed Table", color: "bg-green-500" }, // green circle
  ];

  const tableStatuses: Record<string, TableStatus> = {
    A1: "default",
    A2: "running",
    A3: "printed",
    B1: "running",
    B2: "default",
    C1: "printed",
    B10: "printed",
    A20: "running",
    A12: "printed",
    B14: "running",
    B12: "default",
    C11: "printed",
  };

  function getStatus(table: string): TableStatus {
    return tableStatuses[table] || "default";
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header Section */}
      <div className="flex-shrink-0 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-3">
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by table or department..."
              className="pl-9 pr-4 py-2 h-10 w-full rounded-md"
            />
          </div>

          {/* Legend */}
          <div className="flex items-center space-x-4 flex-wrap gap-1">
            {legendItems.map((item) => (
              <div key={item.label} className="flex items-center space-x-1">
                <span
                  className={`w-3 h-3 rounded-full ${item.color}`}
                  aria-hidden="true"
                ></span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-auto px-4 pb-6">
        {["A", "B", "C", "D"].map((deptLetter) => (
          <div key={deptLetter} className="mb-6">
            <Label className="block mb-2 text-md font-medium">
              Department {deptLetter}
            </Label>

            {/* ✅ Using CSS Grid for perfect alignment */}
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
              }}
            >
              {Array.from(
                { length: 30 },
                (_, i) => `${deptLetter}${i + 1}`
              ).map((table) => {
                const status = getStatus(table);
                const variant =
                  status === "default"
                    ? "outline"
                    : status === "running"
                    ? "destructive"
                    : "print";

                return (
                  <Link
                    key={table}
                    href={`/admin/cashier/${adminId}/${tableId}/${table}`}
                    className="relative inline-block"
                  >
                    <Button
                      variant={variant}
                      className="w-20 h-20 flex items-center justify-center font-semibold cursor-pointer p-0"
                    >
                      <div className="flex flex-col items-center">
                        {(status === "running" || status === "printed") && (
                          <span className="text-[12px]">5:55m</span>
                        )}
                        {table}
                        {(status === "running" || status === "printed") && (
                          <span className="text-[12px]">1200</span>
                        )}
                      </div>
                    </Button>

                    {status === "printed" && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-background border border-gray-400 rounded-full p-1 shadow-md">
                        <FileCheck className="w-4 h-4" />
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
