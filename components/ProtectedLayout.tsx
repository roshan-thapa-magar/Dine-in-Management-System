"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const roleAccess: Record<string, string[]> = {
  admin: [
    "/admin",
    "/admin/tables",
    "/admin/tables/department",
    "/admin/cashier",
    "/admin/kitchen",
    "/admin/request-waiter",
    "/admin/staffs",
    "/admin/staffs/attendance", // Corrected path here as well for consistency
    "/admin/inventory/categories",
    "/admin/inventory/units",
    "/admin/inventory/products",
    "/admin/report/sales",
    "/admin/report/purchase",
    "/admin/upgrade-plan",
  ],
  super: ["/super", "/super/my-admin", "/super/feedback"],
  kitchen: ["/admin/kitchen"],
  waiter: ["/admin", "/admin/cashier", "/admin/request-waiter"],
};

// Map user role to their base dashboard path
const roleDashboardPath: Record<string, string> = {
  admin: "/admin",
  super: "/super",
  kitchen: "/admin/kitchen",
  waiter: "/admin",
  guest: "/login", // fallback
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    const role = session?.user?.role || "guest";
    const allowedPaths = roleAccess[role] || [];

    if (!allowedPaths.includes(pathname)) {
      const redirectPath = roleDashboardPath[role] || "/login";
      router.replace(redirectPath);
    }
  }, [status, session, pathname, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
