"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@components/ui/sidebar";
import { LucideIcon, MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBoards({
  boards,
}: {
  boards: {
    name: string;
    url: string;
    emoji: LucideIcon;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-8">
      <SidebarGroupLabel>Boards</SidebarGroupLabel>
      <SidebarMenu>
        {boards.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild isActive={pathname === item.url && true}>
              <Link href={item.url}>
                <item.emoji />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarMenuButton className="text-sidebar-foreground/70">
        <span>View all</span>
        <MoveRight />
      </SidebarMenuButton>
    </SidebarGroup>
  );
}
