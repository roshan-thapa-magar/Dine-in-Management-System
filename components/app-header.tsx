"use client";

import { usePathname } from "next/navigation";
import { Bell, Globe } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from "./toggle-theme";

const routeNames: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/tables": "Tables",
  "/admin/tables/department":"Department",
  "/admin/cashier": "Cashier",
  "/admin/kitchen": "Kitchen",
  "/admin/manual-order": "Manual Order",
  "/admin/request-waiter": "Request Waiter",
  "/admin/staff-details": "Staff Details",
  "/super": "Super Dashboard",
  "/super/my-admin": "My Admin",
  "/super/feedback": "Feedback",
  "/admin/inventory/categories": "Categories",
  "/admin/inventory/units": "Units",
  "/admin/inventory/products": "Products",
  "/admin/report/sales": "Sales Report",
  "/admin/report/purchase": "Purchase Report",
};

export function AppHeader() {
  const pathname = usePathname();
  const currentPage = routeNames[pathname] || "Dashboard";

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-2">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Restaurant Management</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right-side icons */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Globe className="h-4 w-4" />
        </Button>
        <ToggleTheme />
      </div>
    </header>
  );
}
