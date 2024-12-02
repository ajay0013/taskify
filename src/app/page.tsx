//TODO: Customize, add proper values

export default function Home() {
  return (
    <div className="flex  h-screen bg-zinc-900 text-white">
      <div className="text-left mt-[30vh] ml-[25%]">
        <h1 className="text-5xl font-bold mb-4">Bonjour, Antoine.</h1>
        <p className="text-xl mb-8">Things are looking good.</p>

        {/* TODO: Dividers lagane h  */}
        <div className="flex justify-start space-x-8 mb-8">
          <div className="flex-col justify-center items-center">
            <p className="text-green-500 text-3xl font-medium">Normal</p>
            <p className="text-gray-400 ">Ticket flow</p>
          </div>

          <div>
            <p className="text-green-500 text-3xl font-medium">09</p>
            <p className="text-gray-400">Unassigned</p>
          </div>

          <div>
            <p className="text-green-500 text-3xl font-medium">13 min</p>
            <p className="text-gray-400">Time</p>
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
