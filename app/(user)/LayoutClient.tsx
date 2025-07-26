"use client";

import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ToggleTheme } from "@/components/toggle-theme";
import { Bell, Globe } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const routeNames: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/tables": "Tables",
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

export default function LayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentPage = routeNames[pathname] || "Dashboard";

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {/* ✅ Header */}
        <div className="flex justify-between items-center px-2 py-2 border-b">
          <SidebarInset>
            <header className="flex shrink-0 items-center gap-2">
              <div className="flex items-center gap-2">
                <SidebarTrigger/>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        Restaurant Management
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
          </SidebarInset>

          {/* ✅ Right-side icons */}
          <div className="flex items-center space-x-3">
            <Bell size={20} />
            <Globe size={20} />
            <ToggleTheme />
          </div>
        </div>

        {/* ✅ Content */}
        <div>{children}</div>
      </main>
    </SidebarProvider>
  );
}
