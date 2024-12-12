import IssueSummarySingle from "./issue-summary-single";

const data = {
  assigned: {
    amount: "0",
    title: "Issues assigned",
  },
  overdue: {
    amount: "0",
    title: "Issues overdue",
  },
  created: {
    amount: "0",
    title: "Issues created",
  },
  completed: {
    amount: "0",
    title: "Issues completed",
  },
};

const IssueSummary = () => {
  return (
    <div className="lg:col-span-2">
      {/* TODO: yeh niche wali classes search karni h */}
      <div
        className="bg-[#1b1b1b] border-[0.5px] rounded-lg border-[#323232] w-full hover:shadow-custom-shadow-4xl duration-300 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 p-0.5
  [&>div:first-child]:rounded-l-lg
  [&>div:last-child]:rounded-r-lg
  [&>div:last-child]:rounded-l-none
  [&>div:not(:first-child):not(:last-child)]:rounded-none
  [&>div>a>div]:border-r
  [&>div:last-child>a>div]:border-0
  [&>div>a>div]:border-[#262626]"
      >
        <IssueSummarySingle data={data.assigned} />
        <IssueSummarySingle data={data.overdue} />
        <IssueSummarySingle data={data.created} />
        <IssueSummarySingle data={data.completed} />
      </div>
    </div>
  );
};

export default IssueSummary;
