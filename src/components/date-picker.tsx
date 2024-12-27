import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";
// import "react-calendar/dist/Calendar.css"; // import the default calendar CSS
import { FaCalendarAlt } from "react-icons/fa";

type ReactCalendarValue =
  | Date
  | Date[]
  | [Date, Date]
  | [Date | null, Date | null]
  | null;

const DueDatePicker: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Only allow user to pick dates >= today
  const minDate = new Date();

  const calendarRef = useRef<HTMLDivElement>(null);

  // Close the calendar if user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * When user picks a date from the calendar
   */
  const handleDateChange = (
    value: ReactCalendarValue,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!value) {
      setSelectedDate(null);
    } else if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(value);
    }
    setShowCalendar(false);
  };

  /**
   * If we want a small dot on "today’s date," we can add a Tailwind class
   * that draws a circle via a pseudo-element.
   */
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      // Add dot if tile is "today"
      if (isSameDay(date, new Date())) {
        return (
          "relative " +
          // after: pseudo-element for the dot
          'after:content-[""] ' +
          "after:absolute " +
          "after:-bottom-1 after:left-1/2 after:-translate-x-1/2 " +
          "after:w-1.5 after:h-1.5 after:bg-blue-500 after:rounded-full"
        );
      }
    }
    return null;
  };

  return (
    <div className="relative hover:bg-[#2c2c2c] h-7 ">
      <div className="flex justify-center items-center h-full w-fit max-w-fit outline-none cursor-pointer">
        {/* If no date selected, show "Due Date" button with calendar icon */}
        {!selectedDate ? (
          <button
            className="h-full w-full bg-[#191919] flex items-center gap-1.5 border-[0.5px] border-[#3a3a3a] hover:bg-[#2c2c2c] rounded text-xs px-2 py-0.5"
            onClick={() => setShowCalendar((prev) => !prev)}
          >
            <FaCalendarAlt />
            <span>Due Date</span>
          </button>
        ) : (
          // If there is a date selected, show that date + an "x" button
          <div className="flex justify-center items-center h-full w-fit max-w-fit border-[0.5px]  border-[#3a3a3a] outline-none cursor-pointer">
            <button
              className="h-full w-full bg-[#191919] hover:bg-[#2c2c2c] flex items-center gap-1.5 rounded text-xs px-2 py-0.5"
              onClick={() => setShowCalendar((prev) => !prev)}
            >
              {selectedDate.toLocaleDateString()}
              <button
                className="text-gray-600 hover:text-white pl-1"
                onClick={() => setSelectedDate(null)}
              >
                X
              </button>
            </button>
          </div>
        )}
      </div>

      {showCalendar && (
        <div
          className="absolute z-50 mt-2 shadow-xl bg-[#191919] rounded"
          ref={calendarRef}
        >
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            calendarType="iso8601"
            defaultValue={new Date()}
            minDate={minDate}
            tileClassName={tileClassName}
            selectRange={false}
            next2Label={null}
            prev2Label={null}
          />
        </div>
      )}
    </div>
  );
};

export default DueDatePicker;
