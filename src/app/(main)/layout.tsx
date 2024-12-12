import Sidebar_Left from "@components/sidebar/Sidebar-Left";

import { SidebarProvider } from "@components/ui/sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <Sidebar_Left />
        {children}
      </SidebarProvider>
    </div>
  );
}
