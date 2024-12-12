"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  MessageCircleQuestion,
  LayoutDashboard,
  Ticket,
  Inbox,
  ChartColumn,
  Settings2,
  Trash2,
  Bookmark,
  Briefcase,
  // LogOut,
} from "lucide-react";

// import { NavFavorites } from "@components/nav-favorites";
import NavBoards from "./nav-boards";
import NavMain from "@components/sidebar/nav-main";
// import { NavSecondary } from "@components/nav-secondary";
// import { NavWorkspaces } from "@components/nav-workspaces";
import TeamSwitcher from "@components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@components/ui/sidebar";
import NavOptions from "./nav-options";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "User",
    email: "m@example.com",
    avatar: "",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Projects",
      url: "#",
      icon: Briefcase,
    },
    {
      title: "Tickets",
      url: "#",
      icon: Ticket,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartColumn,
    },
    {
      title: "Bookmarks",
      url: "#",
      icon: Bookmark,
    },
  ],
  navOptions: [
    {
      title: "Activity",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Report",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  boards: [
    {
      name: "API's",
      url: "#",
      emoji: Blocks,
    },
    {
      name: "Front",
      url: "#",
      emoji: Blocks,
    },
    {
      name: "Security",
      url: "#",
      emoji: Blocks,
    },
    {
      name: "Database",
      url: "#",
      emoji: Blocks,
    },
    {
      name: "Payment",
      url: "#",
      emoji: Blocks,
    },
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
  ],
};

export default function Sidebar_Left({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className=" flex justify-between">
          {state == "expanded" && <TeamSwitcher teams={data.teams} />}
          <SidebarTrigger />
        </div>

        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavBoards boards={data.boards} />
        <NavOptions items={data.navOptions} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
