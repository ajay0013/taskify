import { LucideIcon } from "lucide-react";

const Header = ({
  heading,
}: {
  heading: {
    title: string;
    icon: LucideIcon;
  };
}) => {
  return (
    <div className="w-screen z-10">
      <div className="px-4 h-[3.75rem] flex gap-2 w-full items-center border-b border-[#262626] bg-[#191919]">
        <div className="w-full">
          <div className="px-0 relative flex w-full flex-shrink-0 flex-row items-center justify-between gap-x-2 gap-y-4 bg-[#191919] z-[10]">
            <div className="flex flex-wrap items-center gap-2 overflow-ellipsis whitespace-nowrap max-w-[80%]">
              <div>
                <div className="flex items-center space-x-2 overflow-hidden">
                  <div className="flex items-center gap-2.5">
                    <li className="flex items-center space-x-2" tabIndex={-1}>
                      <div className="flex flexx-wrap items-center gap-2.5">
                        <div className="flex cursor-default items-center gap-1 text-sm font-medium text-slate-300">
                          <div className="flex h-5 w-5 items-center justify-start overflow-hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#737373"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-home h-4 w-4 text-custom-text-300"
                            >
                              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          </div>
                          <div className="relative text-[#E5E5E5] line-clamp-1 block max-w-[150px] overflow-hidden truncate">
                            {heading.title}
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
