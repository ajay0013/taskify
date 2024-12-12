//TODO: Customize, add proper values

export default function Home() {
  const greet = "Welcome back, {activeUser.firstName}";
  const flow = "{ticket.flow}";
  const unassigned = "{unassigned.count}";
  const notification = "{notification.count}";
  return (
    <div className="flex  h-screen bg-zinc-900 text-white">
      <div className="text-left mt-[30vh] ml-[25%]">
        <h1 className="text-5xl font-bold mb-4">{greet}</h1>
        <p className="text-xl mb-8">Things are looking good.</p>

        {/* TODO: Dividers lagane h  */}
        <div className="flex justify-start space-x-8 mb-8">
          <div className="flex-col justify-center items-center">
            <p className="text-green-500 text-3xl font-medium">{flow}</p>
            <p className="text-gray-400 ">Ticket flow</p>
          </div>

          <div>
            <p className="text-green-500 text-3xl font-medium">{unassigned}</p>
            <p className="text-gray-400">Unassigned</p>
          </div>

          <div>
            <p className="text-green-500 text-3xl font-medium">
              {notification}
            </p>
            <p className="text-gray-400">Notifications</p>
          </div>
        </div>
        {/* TODO: Button ko change karna mat bhulna = Lets get started ---->   link to all tickets */}
        <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 mt-9 rounded transition">
          Let&apos;s get started
        </button>
      </div>
    </div>
  );
}
