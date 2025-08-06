"use client";
import {
  Calendar,
  Home,
  Settings,
  User2,
  ChevronUp,
  ChevronDown,
  CreditCard,
  LogOut,
  Crown,
  Users,
  ChefHat,
  HandHelping,
  Package,
  Tags,
  Ruler,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  BarChart3,
  ReceiptIcon as CashRegister,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation"; // Import usePathname

const mainItems = [
  { title: "Dashboard", url: "/admin", icon: Home },
  { title: "Cashier", url: "/admin/cashier", icon: CashRegister },
  { title: "Kitchen", url: "/admin/kitchen", icon: ChefHat },
  { title: "Request Waiter", url: "/admin/request-waiter", icon: HandHelping },
  { title: "Super Dashboard", url: "/super", icon: Users },
  { title: "My Admin", url: "/super/my-admin", icon: Users },
  { title: "Upgrade request", url: "/admin/upgrade-plan", icon: Users },
  { title: "Feed Back", url: "/super/feedback", icon: Users },
];

const inventoryItems = [
  { title: "Categories", url: "/admin/inventory/categories", icon: Tags },
  { title: "Units", url: "/admin/inventory/units", icon: Ruler },
  { title: "Products", url: "/admin/inventory/products", icon: Package },
];

const reportItems = [
  { title: "Sales", url: "/admin/report/sales", icon: TrendingUp },
  { title: "Purchase", url: "/admin/report/purchase", icon: TrendingDown },
];

const tableItems = [
  { title: "Tables", url: "/admin/tables", icon: Calendar },
  { title: "Department", url: "/admin/tables/department", icon: TrendingDown },
];

const staffDetails = [
  { title: "Staff Details", url: "/admin/staff/details", icon: Users },
  { title: "Attendance", url: "/admin/staff/attendance", icon: TrendingUp },
];

const roleAccess: Record<string, string[]> = {
  admin: [
    "/admin",
    "/admin/tables",
    "/admin/tables/department",
    "/admin/cashier",
    "/admin/kitchen",
    "/admin/request-waiter",
    "/admin/staff/details",
    "/admin/staff/attendance", // Corrected path here
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

const fallbackUser = {
  name: "Guest",
  email: "N/A",
  avatar: "https://github.com/evilrabbit.png",
};

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  const { data: session } = useSession();
  const pathname = usePathname(); // Get current pathname

  const userRole = session?.user?.role || "guest";
  const allowedPaths = roleAccess[userRole] || [];

  const filteredMainItems = mainItems.filter((item) =>
    allowedPaths.includes(item.url)
  );
  const filteredInventoryItems = inventoryItems.filter((item) =>
    allowedPaths.includes(item.url)
  );
  const filteredReportItems = reportItems.filter((item) =>
    allowedPaths.includes(item.url)
  );
  const filteredTableItems = tableItems.filter((item) =>
    allowedPaths.includes(item.url)
  );
  const filteredStaffDetails = staffDetails.filter((item) =>
    allowedPaths.includes(item.url)
  );

  const handleMenuItemClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const user = {
    name: session?.user?.name || fallbackUser.name,
    email: session?.user?.email || fallbackUser.email,
    avatar: session?.user?.image || fallbackUser.avatar,
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{user.name}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} onClick={handleMenuItemClick}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {filteredTableItems.length > 0 && (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full">
                        <BarChart3 />
                        <span>View Tables</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {filteredTableItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.url}
                            >
                              <Link
                                href={item.url}
                                onClick={handleMenuItemClick}
                              >
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}
              {filteredInventoryItems.length > 0 && (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full">
                        <ShoppingCart />
                        <span>Inventory</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {filteredInventoryItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.url}
                            >
                              <Link
                                href={item.url}
                                onClick={handleMenuItemClick}
                              >
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}
              {filteredStaffDetails.length > 0 && (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full">
                        <Users />
                        <span>Staff Management</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {filteredStaffDetails.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.url}
                            >
                              <Link
                                href={item.url}
                                onClick={handleMenuItemClick}
                              >
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}
              {filteredReportItems.length > 0 && (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full">
                        <BarChart3 />
                        <span>View Reports</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {filteredReportItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.url}
                            >
                              <Link
                                href={item.url}
                                onClick={handleMenuItemClick}
                              >
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="flex items-center border gap-3 hover:bg-muted focus:bg-muted data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  aria-label="Open user menu"
                >
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback className="rounded-lg">
                      {user.name.charAt(0) || "G"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                  <ChevronUp className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-56 rounded-lg w-(--radix-dropdown-menu-trigger-width)"
                side="bottom"
                align="start"
                sideOffset={4}
              >
                <div className="flex items-center gap-3 p-3 border-b">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback className="rounded-lg">
                      {user.name.charAt(0) || "G"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm leading-tight">
                    <span className="font-semibold">{user.name}</span>
                    <span className="text-xs text-muted-foreground block">
                      {user.email}
                    </span>
                  </div>
                </div>
                {userRole === "admin" && (
                  <DropdownMenuItem className="text-primary font-semibold hover:bg-accent">
                    <Crown className="mr-2 h-4 w-4 text-primary" /> Upgrade to
                    Pro
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User2 className="mr-2 h-4 w-4" /> Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" /> Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Settings & Privacy
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
