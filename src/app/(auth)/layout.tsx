"use client";

import { useState } from "react";
import Sidebar_Left from "@components/Sidebar-Left";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target instanceof HTMLElement && !e.target.closest(".sidebar")) {
      closeSidebar();
    }
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <Sidebar_Left
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      />

      {/* Main Content */}
      <div
        className={`main-content transition duration-300 ease-out ${
          isOpen ? "filter blur-sm" : ""
        }`}
      >
        {children}
      </div>

      {/* Background Click to Close */}
      {isOpen && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-40"
          style={{ backgroundColor: "transparent" }}
        ></div>
      )}
    </div>
  );
}
