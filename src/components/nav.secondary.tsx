// members -> combobox
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// import { ChevronRight, type LucideIcon } from "lucide-react"

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@components/ui/collapsible"
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
// } from "@components/ui/sidebar"

const data = {
  items: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "T",
    },
    {
      title: "Create Task",
      url: "/create/task",
      icon: "T",
    },
    {
      title: "Create Tag",
      url: "/create/tag",
      icon: "T",
    },
    {
      title: "Create Team",
      url: "#",
      icon: "T",
    },
    {
      title: "Bookmark",
      url: "/bookmark",
      icon: "T",
    },
  ],
};

export default function NavMain() {
  const pathname = usePathname();

  return (
    <>
      {data.items.map((item) => (
        <>
          {item.title}
          <Link href={item.url}>
            <span
              className={`nav-link ${pathname === item.url ? "active" : ""}`}
            >
              {item.url}
            </span>
          </Link>
        </>
      ))}
    </>
  );
}
