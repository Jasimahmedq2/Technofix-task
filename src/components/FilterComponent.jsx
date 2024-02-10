import { Divider, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

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

// eslint-disable-next-line react/prop-types
const FilterComponent = ({ setSearch, setUsers, users }) => {
  const [sortBy, setSortBy] = useState(null);
  const sortUsers = () => {
    if (sortBy) {
      const sortedUsers = [...users];
      sortedUsers.sort((a, b) => {
        if (sortBy === "name") {
          const nameA = `${a.firstName} ${a.lastName}`;
          const nameB = `${b.firstName} ${b.lastName}`;
          return nameA.localeCompare(nameB);
        } else if (sortBy === "email") {
          return a.email.localeCompare(b.email);
        } else if (sortBy === "company") {
          const companyA = a.company.name;
          const companyB = b.company.name;
          return companyA.localeCompare(companyB);
        }
        return 0;
      });
      setUsers(sortedUsers);
    }
  };

  useEffect(() => {
    sortUsers();
  }, [sortBy]);
  return (
    <div className="sm:flex space-y-4 sm:space-y-0 lg:max-w-lg flex-wrap md:flex-nowrap gap-4 pl-4 sm:pl-12 pr-6 ">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        label="search by name"
        size="sm"
      />
      <Divider orientation="vertical" />

      <div className="flex sm:w-[400px] flex-wrap md:flex-nowrap gap-4">
        <Select
          onChange={(e) => setSortBy(e.target.value)}
          label="filter by"
          className="sm:max-w-lg"
          size="sm"
        >
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
