import { Input, Select, SelectItem } from "@nextui-org/react";

const animals = [
  {
    value: "name",
    label: "name",
  },
  {
    value: "email",
    label: "email",
  },
  {
    value: "company",
    label: "company",
  },
];

const FilterComponent = () => {
  return (
    <div className="flex lg:max-w-lg flex-wrap md:flex-nowrap gap-4 pl-4 sm:pl-12 pr-6 ">
      <Input type="text" label="search by name" size="sm" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Select label="filter by" className="sm:max-w-lg" size="sm">
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default FilterComponent;
