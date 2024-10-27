"use client";

import {
  Calendar,
  Home,
  Search,
  Settings,
  Flag,
  Mail,
  Images,
  Users,
} from "lucide-react";
import { List } from "@phosphor-icons/react/dist/ssr";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "flag",
    url: "#",
    icon: Flag,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Mail,
  },
  {
    title: "Images",
    url: "#",
    icon: Images,
  },

  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <SidebarMenuButton
      size="lg"
      className={` ${open ? "text-sidebar-foreground bg-sidebar hover:text-sidebar-foreground active:text-sidebar-foreground hover:bg-sidebar active:bg-sidebar" : "bg-sidebar-foreground text-sidebar-accent hover:bg-sidebar-foreground active:bg-sidebar-foreground hover:text-sidebar-accent active:text-sidebar-accent"} p-0 `}
      asChild
    >
      <div>
        <button
          className="flex aspect-square h-full items-center justify-center rounded-lg  bg-sidebar-foreground text-sidebar-accent"
          onClick={toggleSidebar}
        >
          <List className="size-8" />
        </button>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Space X Inc.</span>
          <span className="truncate font-normal">Enterprise</span>
        </div>
      </div>
    </SidebarMenuButton>
  );
}

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={`h-16 ${open ? "bg-sidebar text-sidebar-foreground" : "bg-sidebar-foreground text-sidebar-accent"}`}
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <CustomTrigger />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <Link
                      href={item.url}
                      className="flex items-center justify-start p-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
