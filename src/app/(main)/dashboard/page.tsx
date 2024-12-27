"use client";

import UserGreetingsView from "@components/main/dashboard/Greeting";
import Header from "@components/main/header/Header";
import React from "react";
import { Home } from "lucide-react";
import IssueSummary from "@components/main/dashboard/issue-summary";
import TaskWidget from "@components/main/dashboard/task-widget";
import { CreateTicket } from "@components/main/tickets/create-ticket";

const Dashboard = () => {
  const heading = {
    title: "Dashboard",
    icon: Home,
  };
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#202020]">
      <Header heading={heading} />
      <CreateTicket />

      <div className="h-full w-full overflow-hidden">
        <div className="relative h-full w-full overflow-x-hidden overflow-y-scroll">
          <div className="px-5 flex flex-col vertical-scrollbar scrollbar-lg h-full w-full overflow-y-auto py-5 gap-7 ">
            <div>
              <UserGreetingsView />
            </div>

            <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-7">
              <IssueSummary />
              <TaskWidget />
              <TaskWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
