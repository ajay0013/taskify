import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import Link from "next/link";

//TODO: props m assigned to you || created by you & fetched data bhejke show karana h
const TaskWidget = () => {
  return (
    <div className="bg-[#191919] rounded -lg border-[0.5px] border-[#262626] w-full flex flex-col space-y-3 hover:shadow-custom-shadow-4xl duration-300 p-6">
      <div className="flex items-center justify-start gap-2 mb-4">
        <Link
          href="#"
          className="text-lg font-semibold text-[#737373] hover:underline"
        >
          Assigned to you
        </Link>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <Tabs
          defaultValue="upcoming"
          className=" w-full items-center flex flex-col justify-center"
        >
          <TabsList className="relative h-[30px] w-full p-[1px] rounded  border-[0.4px] border-[#262626]">
            <TabsTrigger
              className="bg-[#2c2c2c] text-xs w-full font-semibold text-[#525252] hover:text-[#737373]  h-full rounded-[3px] transition-all duration-500 ease-in-out shadow-[2px_0_8px_rgba(167,169,174,0.15)]"
              value="upcoming"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#2c2c2c] text-xs  w-full font-semibold text-[#525252] hover:text-[#737373]  h-full rounded-[3px] transition-all duration-500 ease-in-out shadow-[2px_0_8px_rgba(167,169,174,0.15)]"
              value="overdue"
            >
              Overdue
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#2c2c2c] text-xs  w-full font-semibold text-[#525252] hover:text-[#737373]  h-full rounded-[3px] transition-all duration-500 ease-in-out shadow-[2px_0_8px_rgba(167,169,174,0.15)]"
              value="completed"
            >
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">Upcoming</TabsContent>
          <TabsContent value="overdue">Overdue</TabsContent>
          <TabsContent value="completed">Completed</TabsContent>
        </Tabs>
      </div>

      {/* TODO: pass in correct link in href */}
      <a
        className="text-[#486ee4] hover:bg-[#232b45] hover:text-[#4569de] font-medium rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center w-min my-3 mx-auto py-1 px-2 text-xs"
        href="/skudfhjgb/workspace-views/assigned/?target_date=2024-12-14;after"
      >
        View all issues
      </a>
    </div>
  );
};

export default TaskWidget;
