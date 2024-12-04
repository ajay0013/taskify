// "use client";
// import { useState } from "react";
// // import { AppSidebar } from "@/components/app-sidebar"
// // import {
// //   Breadcrumb,
// //   BreadcrumbItem,
// //   BreadcrumbLink,
// //   BreadcrumbList,
// //   BreadcrumbPage,
// //   BreadcrumbSeparator,
// // } from "@/components/ui/breadcrumb"
// // import { Separator } from "@/components/ui/separator"
// // import {
// //   SidebarProvider,
// //   SidebarTrigger,
// // } from "@/components/ui/sidebar"

// const Sidebar_Right = () => {
//   // State to manage sidebar visibility
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Functions to open and close the sidebar
//   const openSidebar = () => setIsSidebarOpen(true);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <>
//       {/* Sidebar */}
//       {isSidebarOpen && (
//         <>
//           {/* Overlay with blur effect */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//             onClick={closeSidebar}
//           ></div>

//           {/* Sidebar component */}
//           <div className="fixed top-0 left-0 h-full z-50">AppSidebar</div>
//         </>
//       )}

//       {/* Main Content */}
//       <div className={`relative ${isSidebarOpen ? "overflow-hidden" : ""}`}>
//         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
//           <div className="flex items-center gap-2 px-4">
//             {/* Modify SidebarTrigger to open the sidebar */}
//             <button onClick={openSidebar} className="-ml-1">
//               SidebarTrigger
//             </button>
//             {/* <Separator orientation="vertical" className="mr-2 h-4" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     Building Your Application
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb> */}
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//           </div>
//           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar_Right;
