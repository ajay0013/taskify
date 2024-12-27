"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

interface AssigneProps {
  icon: LucideIcon;
  title: string;
  options: {
    logo: LucideIcon;
    label: string;
  }[];
}

export function DropdownSearch({ props }: { props: AssigneProps }) {
  const { icon: TitleIcon, options } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Assignees");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  //   const handleItemSelect = (e: React.MouseEventHandler<HTMLButtonElement>) => {
  //     setSelectedOption(e.target.value);
  //   };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="h-7 text-xs rounded">
      <div className="block h-full max-w-full outline-none cursor-pointer">
        <button
          onClick={handleToggle}
          className="h-full w-fit bg-[#191919] flex items-center gap-1.5 border-[0.5px] border-[#3a3a3a] hover:bg-[#2c2c2c] rounded text-xs px-2 py-0.5"
        >
          <TitleIcon className="h-3 w-3" />
          <span>{selectedOption}</span>
        </button>

        {isOpen && (
          <div className="bg-[#191919] max-h-32 rounded text-xs overflow-hidden z-50 border-[0.5px] border-[#3a3a3a] w-full  px-1">
            <div className="p-2">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full px-2 text-xs outline-none py-1 border-[0.5px] border-[#3a3a3a] rounded"
              />
            </div>

            <ul className="h-24 py-[6px] overflow-y-scroll">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    onClick={() => {
                      setSelectedOption(option.label);
                      setIsOpen(!isOpen);
                    }}
                    key={index}
                    className="flex px-[6px] h-7 w-full bg-[#191919] truncate cursor-pointer hover:bg-[#2c2c2c] justify-between select-none items-center gap-2 rounded text-white"
                  >
                    <span className="flex-grow truncate">
                      <div className="flex items-center gap-2">
                        <option.logo className="h-[12px] w-[12px]" />
                        <span className="text-xs">{option.label}</span>
                      </div>
                    </span>

                    {/* TODO: if selected, show tick mark here */}
                    {selectedOption === option.label && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-check h-3.5 w-3.5 flex-shrink-0"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    )}
                  </div>
                ))
              ) : (
                <li className="p-2 text-gray-500 italic">
                  No matching results
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
