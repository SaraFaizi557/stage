"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Bot, FileText, GraduationCap, LogOut, School, Settings, Users } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const items = [
    { title: "Dashboard", url: "/", icon: School },
    { title: "Manage Users", url: "/manage-users", icon: Users },
    { title: "Manage Students", url: "/manage-students", icon: GraduationCap },
    { title: "AI Verification", url: "/ai-verification", icon: Bot },
    { title: "Manage Components", url: "/manage-components", icon: Settings },
    { title: "Reports", url: "/reports", icon: FileText },
    { title: "Logout", url: "/logout", icon: LogOut },
  ];

  const pathname = usePathname();

  return (
    <Sidebar className="bg-sidebar border-sidebar p-2 items-center justify-center" side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader className="px-4 py-5">
        <Link href="/">
          {/* Light logo */}
          <Image
            src="/logo-light.png"
            alt="School logo"
            width={180}
            height={24}
            className="block h-6 cursor-pointer dark:hidden"
          />
          {/* Dark logo */}
          <Image
            src="/logo-dark.png"
            alt="School logo"
            width={180}
            height={24}
            className="hidden h-6 cursor-pointer dark:block"
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-3">
            {items.map((item) => {
              const isActive = pathname === item.url;

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="px-2 py-6 gap-3" asChild>
                    <Link href={item.url} className={`flex items‑center px‑4 py‑2`}>
                      <item.icon strokeWidth={isActive ? 2 : 1.6} className={`icon-size ${isActive
                          ? "text-black dark:text-white"
                          : "text-sidebar-foreground"
                        }`} />
                      <span className={`text-[17px] ${isActive
                          ? "font-medium text-black dark:text-white"
                          : "font-light text-sidebar-foreground"
                        }`}>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}


