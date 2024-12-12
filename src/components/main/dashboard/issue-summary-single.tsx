import Link from "next/link";
import React from "react";

const IssueSummarySingle = ({
  data,
}: {
  data: {
    amount: string;
    title: string;
  };
}) => {
  return (
    <div className="w-full flex flex-col gap-2 bg-[#191919] hover:bg-[#2c2c2c] rounded-l-md">
      <Link className="py-4 duration-300 rounded-[10px] w-full" href="#">
        <div className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
          <div>
            <h5 className="font-semibold text-xl">{data.amount}</h5>
            <p className="text-[#737373] text-sm xl:text-base">{data.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default IssueSummarySingle;
