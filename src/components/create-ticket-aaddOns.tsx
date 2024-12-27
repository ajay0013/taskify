import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

export function DropDownAddon({
  props,
}: {
  props: {
    icon: JSX.Element;
    title: string;
    options: { logo: JSX.Element; label: string }[];
  };
}) {
  return (
    <div className="h-7">
      <div className="block h-full max-w-full outline-none cursor-pointer">
        <Select>
          <SelectTrigger className="h-full w-auto bg-[#191919] flex items-center gap-1.5 border-[0.5px] border-[#3a3a3a] hover:bg-[#2c2c2c] rounded text-xs px-2 py-0.5">
            <SelectValue
              placeholder={
                <div className="flex gap-1.5 items-center justify-center">
                  {props.icon}
                  <span>{props.title}</span>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className="bg-[#191919] ">
            <SelectGroup>
              {props.options.map((option, index) => (
                <SelectItem
                  className="hover:bg-[#2c2c2c]"
                  value={option.label}
                  key={index}
                >
                  <div className="flex flex-row  gap-2 text-xs ">
                    {option.logo}
                    {option.label}
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
