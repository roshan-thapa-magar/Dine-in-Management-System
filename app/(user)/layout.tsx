'use client'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import type { ReactNode } from "react";
import ProtectedLayout from "@/components/ProtectedLayout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedLayout>
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1 overflow-hidden">
            <AppHeader />
            <main className="flex-1 overflow-auto">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ProtectedLayout>
  );
}
