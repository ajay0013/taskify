//TODO: database se project fetch karne  h

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

const SelectProject = () => {
  return (
    <Select>
      <SelectTrigger className="w-auto bg-[#191919]">
        <SelectValue placeholder="CurrentProject" />
      </SelectTrigger>
      <SelectContent className="bg-[#191919]">
        <SelectGroup>
          <SelectItem value="project1">Project1</SelectItem>
          <SelectItem value="project2">Project2</SelectItem>
          <SelectItem value="project3">Project3</SelectItem>
          <SelectItem value="project4">Project4</SelectItem>
          <SelectItem value="project5">Project5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectProject;
