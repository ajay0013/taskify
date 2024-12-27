export function CancelButton() {
  return (
    <button
      type="button"
      className="bg-[#191919] border border-[#252525] hover:bg-[#ca4343]   px-3 py-1.5 font-medium text-xs rounded flex items-center gap-1.5 whitespace-nowrap justify-center transition-all"
    >
      Discard
    </button>
  );
}

export function CreateButton() {
  return (
    <button
      type="submit"
      className="bg-[#4c75f6] border border-[#324787] hover:bg-blue-700   px-3 py-1.5 font-medium text-xs rounded flex items-center gap-1.5 whitespace-nowrap justify-center transition-all"
    >
      Create
    </button>
  );
}
