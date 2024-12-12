import { useCurrentTime } from "hooks/use-current-time";

const UserGreetingsView = () => {
  //   const { user } = props;
  // current time hook

  //TODO: userko currentUser se change karna h
  const user = {
    first_name: "First",
    last_name: "Last",
    user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  const { currentTime } = useCurrentTime();

  const hour = new Intl.DateTimeFormat("en-US", {
    hour12: false,
    hour: "numeric",
  }).format(currentTime);

  const date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(currentTime);

  const weekDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(currentTime);

  const timeString = new Intl.DateTimeFormat("en-US", {
    timeZone: user?.user_timezone,
    hour12: false, // Use 24-hour format
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentTime);

  const greeting =
    parseInt(hour, 10) < 12
      ? "morning"
      : parseInt(hour, 10) < 18
      ? "afternoon"
      : "evening";

  return (
    <div>
      {/* The main greeting text: a larger, bold font. */}
      <h3 className="text-xl font-semibold text-white">
        Good {greeting}, {user?.first_name} {user?.last_name}
      </h3>

      {/* The secondary line: smaller, lighter text with an icon to the left. */}
      <h6 className="flex items-center gap-2 text-sm font-medium text-gray-400 mt-1">
        <span>
          {greeting === "morning"
            ? "🌤️"
            : greeting === "afternoon"
            ? "🌥️"
            : "🌙️"}
        </span>
        <span>
          {weekDay}, {date} {timeString}
        </span>
      </h6>
    </div>
  );
};

export default UserGreetingsView;
