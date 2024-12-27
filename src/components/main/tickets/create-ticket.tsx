import { DropDownAddon } from "@components/create-ticket-aaddOns";
import DueDatePicker from "@components/date-picker";

import { DropdownSearch } from "@components/dropdown-search";
import SelectProject from "@components/select-project";
import { Button } from "@components/ui/button";

import {
  defaultStatus,
  backlogStatus,
  inProgressStatus,
  completedStatus,
  cancelledStatus,
  defaultPriority,
  urgentPriority,
  highPriority,
  lowPriority,
  nonePriority,
} from "@components/icons";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";

import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/text-area";
import { Home } from "lucide-react";
import { CancelButton, CreateButton } from "./action-buttons";

export function CreateTicket() {
  return (
    <Dialog>
      <DialogTrigger className="h-6 py-0 px-[10px] hover:bg-black" asChild>
        <Button className="bg-black text-white rounded-none p-none">
          Create Ticket
        </Button>
      </DialogTrigger>

      <DialogContent className="h-auto px-0 max-h-[77vh] bg-[#191919] overflow-visible">
        <DialogHeader className="px-6">
          <DialogTitle>
            <SelectProject />
          </DialogTitle>
        </DialogHeader>

        <div className="grid max-h-full gap-4 py-4 px-6">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="title"
              placeholder="Title"
              className="col-span-4  bg-[#191919]"
            />
          </div>

          <div className="grid h-auto grid-cols-4 items-center gap-4">
            <Textarea
              id="description"
              rows={7}
              style={{
                width: "100%",
                resize: "none",
              }}
              placeholder="Description..."
              className="col-span-4 bg-[#191919] h-auto max-h-full"
            />
          </div>
        </div>
        <DialogFooter>
          <div className=" overflow-visible w-full ">
            {/* OPTIONS */}
            <div className="pb-3 ">
              <div className="flex px-6 flex-wrap py-[10px] border-y-[0.5px] border-[#323232] overflow-visible items-center gap-2">
                {/* height - 7 */}
                <DropDownAddon props={data.status} />
                <DropDownAddon props={data.priority} />

                <DueDatePicker />

                <DropdownSearch props={data.assignes} />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-2">
                <CancelButton />
                <CreateButton />
              </div>
              <div></div>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const data = {
  duedate: {
    icon: Home,
    title: "Due Date",
  },
  status: {
    icon: defaultStatus,
    title: "Status",
    options: [
      {
        logo: backlogStatus,
        label: "Backlog",
      },
      { logo: inProgressStatus, label: "In Progress" },
      { logo: completedStatus, label: "Completed" },
      { logo: cancelledStatus, label: "Cancelled" },
    ],
  },
  priority: {
    icon: defaultPriority,
    title: "Priority",
    options: [
      { logo: urgentPriority, label: "Urgent" },
      { logo: highPriority, label: "High" },
      { logo: lowPriority, label: "Low" },
      { logo: nonePriority, label: "None" },
    ],
  },
  //TODO: assignes m users ko fetch karke lagana h
  assignes: {
    icon: Home,
    title: "Assignees",
    options: [
      { logo: Home, label: "Person 1" },
      { logo: Home, label: "Person 2" },
      { logo: Home, label: "Person 3" },
      { logo: Home, label: "Person 4" },
      { logo: Home, label: "Person 5" },
      { logo: Home, label: "Person 6" },
      { logo: Home, label: "Person 7" },
      { logo: Home, label: "Person 8" },
      { logo: Home, label: "Person 9" },
      { logo: Home, label: "Person 10" },
      { logo: Home, label: "Person 11" },
      { logo: Home, label: "Person 12" },
      { logo: Home, label: "Person 13" },
      { logo: Home, label: "Person 14" },
      { logo: Home, label: "Person 15" },
      { logo: Home, label: "Person 16" },
      { logo: Home, label: "Person 17" },
      { logo: Home, label: "Person 18" },
      { logo: Home, label: "Person 19" },
      { logo: Home, label: "Person 20" },
    ],
  },
};
